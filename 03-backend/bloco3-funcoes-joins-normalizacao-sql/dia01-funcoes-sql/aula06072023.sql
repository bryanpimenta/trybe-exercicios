/* 
SELECT director, json_arrayagg(title) AS filmes, COUNT(*) AS quantidade
  FROM  pixar.movies 
  GROUP BY director;
*/

-- Tirar a média de duração de cada filme por diretor
-- SELECT director, AVG(LENGTH_MINUTES) FROM pixar.movies GROUP BY director

-- Agrupar clientes por loja
-- SELECT store_id FROM sakila.customer GROUP BY store_id

-- Contar quantos clientes estão em cada loja
-- SELECT store_id, COUNT(*) FROM sakila.customer GROUP BY store_id

-- Juntar os emails dos clientes de cada loja em arrays
-- SELECT store_id, COUNT(*), JSON_ARRAYAGG(email) FROM sakila.customer GROUP BY store_id;

/*
SELECT rating, AVG(rental_rate)
  FROM sakila.film
  GROUP BY rating;
  
SELECT rating, MIN(rental_rate)
  FROM sakila.film
  GROUP BY rating;
  
SELECT rating, MAX(rental_rate)
  FROM sakila.film
  GROUP BY rating;
  
SELECT rating, SUM(rental_rate)
  FROM sakila.film
  GROUP BY rating;
*/

-- Ver apenas os endereõs atualizados após às 22:32:00
-- SELECT * FROM sakila.address WHERE TIME(last_update) > '22:32:00';

# Quantos endereços temos por distrito
-- SELECT district, COUNT(*) AS quantidade FROM sakila.address GROUP BY district ORDER BY quantidade DESC

# Quantos endereços temos por distrito, contabilizando apenas endereços atualizados após 22:34:00
/*
SELECT district, COUNT(*) AS quantidade
  FROM sakila.address
  WHERE TIME(last_update) > '22:34:00' 
  GROUP BY district
  ORDER BY quantidade DESC;
*/

# Quantos endereços temos por distrito, mostrando apenas distritos com mais de 5 endereços cadastrados
/*
SELECT district, COUNT(*) AS quantidade
  FROM sakila.address
  GROUP BY district
  HAVING quantidade > 5
  ORDER BY quantidade DESC;
*/

# Mostrar os filmes com as labels "Caro" ou "Barato" de acordo com o preço
# SELECT title, rental_rate, IF(rental_rate <= 0.99, 'Tá barato', 'Na volta a gente ve') FROM sakila.film;

# Mostrar label "Curto", "Médio" e "Longo" para durações 60/150/+
/*
SELECT 
    title,
    rental_rate,
    length,
    IF(rental_rate <= 0.99, 'Tá barato', 'Na volta a gente ve'),
    CASE 
       WHEN length < 60
           THEN 'Curto'
	   WHEN length >= 60 AND length < 150
           THEN 'Médio'
	    ELSE 'Longo'
	END AS 'Duração'
    FROM sakila.film;
*/

SELECT title, length_minutes
  FROM pixar.movies
  ORDER BY length_minutes