const palette = document.querySelectorAll('#color-palette > div');
palette[0].style.backgroundColor = 'black';
palette[0].classList.add('selected');

// Função para criar pixels
function generatePixels(n) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < n; i += 1) {
    const teste = document.createElement('div');
    teste.className = 'teste';
    for (let j = 0; j < n; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      teste.appendChild(pixel);
    }
    pixelBoard.appendChild(teste);
  }
}

// Função apagar todos as divs
function removePixels(n) {
  const pixelBoard = document.querySelector('#pixel-board');
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
  generatePixels(n);
  listening();
}

const blocks = document.querySelectorAll('#pixel-board .pixel');

// Valores do LocalStorage convertidos para objeto
const colorPalette = JSON.parse(localStorage.getItem('colorPalette'));
const pixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));

// Cores salvas em objeto
const saveColorsObj = {};

// Cores em objeto
const colorObj = {
  2: '',
  3: '',
  4: '',
};

// Função para adicionar valores no objeto
function updateColors() {
  for (let i = 1; i <= 3; i += 1) {
    colorObj[i + 1] = palette[i].style.backgroundColor;
  }
}

// Atualiza valores das cores no LocalStorage
const newColorsUpdate = () => {
  updateColors();
  localStorage.setItem('pixelBoard', JSON.stringify(saveColorsObj));
  localStorage.setItem('colorPalette', JSON.stringify(colorObj));
};

// Função de seleção de cor
function selectColor(event) {
  for (let i = 0; i <= 3; i += 1) {
    palette[i].classList.remove('selected');
  }
  event.classList.add('selected');
}

// Função Load
const load = () => {
  palette[1].style.backgroundColor = colorPalette['2'];
  palette[2].style.backgroundColor = colorPalette['3'];
  palette[3].style.backgroundColor = colorPalette['4'];
  blocks.forEach((block, i) => {
    block.style.backgroundColor = pixelBoard[i];
  });
  updateColors();
};

// Gera números aleatórios entre 0 e 255
const randomColor = () => {}
 
// Função que escuta pelo click no botão de salvar
const saveButton = document.querySelectorAll('#save')[0];
saveButton.addEventListener('click', function() {
for (let i = 0; i < document.querySelectorAll('#pixel-board .pixel').length; i += 1) {
saveColorsObjt[i] = document.querySelectorAll('#pixel-board .pixel')[i].style.backgroundColor;
}
newColorsUpDate();
});

// Função que escuta pelo click no botão de apagar
const clearButton = document.querySelectorAll('#clear')[0];
clearButton.addEventListener('click', function() {
for (let i = 0; i < blocks.length; i += 1) {
blocks[i].style.backgroundColor = '';
}
});

// Função que escuta pelo click nos pixels
const listening = () => {
for (let i = 0; i < blocks.length; i += 1) {
blocks[i].addEventListener('click', function(event) {
for (let index = 0; index <= 3; index += 1) {
if (palette[index].classList.contains('selected')) {
event.target.style.backgroundColor = palette[index].style.backgroundColor;
}
}
});
}
};

// Chama as funções e inicia o programa
gerationDiv(16);
colors();
listening();

// Carrega as cores salvas no LocalStorage
if (convert2 !== null) {
load();
};

