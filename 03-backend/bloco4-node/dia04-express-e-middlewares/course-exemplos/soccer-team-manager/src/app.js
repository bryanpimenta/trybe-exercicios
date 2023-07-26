const express = require('express');
require('express-async-errors'); // não precisa definir uma variável
const rateLimit = require("express-rate-limit");
const fs = require('fs').promises;
const path = require('path');

const morgan = require('morgan');
const helmet = require("helmet");
const app = express();
const apiCredentials = require('./middlewares/apiCredentials');
const cors = require('cors');

app.use(helmet());
app.use(express.json());
app.use(apiCredentials);
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('./images'));

// Configuramos um limitador para uma taxa máxima de 100 requisições em um intervalo de 15 minutos
const limiter = rateLimit({
  max: 100, // número máximo de requisições
  windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: "Muitas requisições originadas desta IP" // mensagem personalizada quando atinge o limit rate
});

app.use(limiter);

// Log de todas as requisições feitas ao servidor
/* app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
}); */

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

/* app.get('/teams', (req, res) => res.json(teams)); */

app.get('/teams', async (req, res, next) => {
  const data = await fs.readFile(path.resolve(__dirname, './teams-data.json'));
  const teams = JSON.parse(data);
  return res.status(200).json({ teams })
});

app.get('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);

  if (team) {
    res.json(team);
  } else {
    res.status(400).json({ message: 'Time não encontrado' });
  }
});

const validateTeam = (req, res, next) => {
  const { nome, sigla } = req.body;
  if (!nome) return res.status(400).json({ message: 'O campo "nome" é obrigatório' });
  if (!sigla) return res.status(400).json({ message: 'O campo "sigla" é obrigatório' });
  next();
};

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla' });
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);

  if (!team) return res.status(400).json({ message: 'Time não encontrado' });

  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.status(400).json({ message: 'Time não encontrado' });
  }
});

app.delete('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);

  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

app.use((error, _req, res, _next) => {
  return res.status(500).json({ error: error.message });
});

// se ninguém respondeu, vai cair neste middleware
app.use((req, res) => res.sendStatus(404));

module.exports = app;