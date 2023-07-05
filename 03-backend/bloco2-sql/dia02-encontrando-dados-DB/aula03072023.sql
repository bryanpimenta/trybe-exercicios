-- SELECT * FROM sakila.actor
-- WHERE  first_name = 'JOHNNY' AND last_name = 'CAGE';

-- SELECT * FROM sakila.film WHERE rental_duration = '6';

-- SELECT * FROM sakila.film
-- WHERE rental_duration = '6' AND (rating = 'R' OR rating = 'PG-13');

-- SELECT * FROM sakila.film
-- WHERE title NOT IN ('AFFAIR PREJUDICE','AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');

-- SELECT COUNT(*) AS 'Quantidade', AVG(rental_duration), json_arrayagg(title) FROM sakila.film
  -- WHERE length BETWEEN 120 AND 150
 --  ORDER BY length DESC;
 
 -- SELECT now(); -- datetime
 -- SELECT curdate(); -- date
 -- SELECT curtime(); -- time
 -- SELECT YEAR(now()); -- year
 -- SELECT MONTH(now()); -- mounth
 
SELECT * FROM sakila.rental
WHERE rental_date = '2005-05-26 00:07:11';
 