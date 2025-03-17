-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )
-----------------------------------------
-- Add the first female actor
INSERT INTO actors (first_name, last_name, age, number_oscars) 
VALUES ('Emma', 'Watson', '1990-04-15', 0);

-- Add the second female actor
INSERT INTO actors (first_name, last_name, age, number_oscars) 
VALUES ('Scarlett', 'Johansson', '1984-11-22', 1);
-- Add three more actors in one query
INSERT INTO actors (first_name, last_name, age, number_oscars) 
VALUES 
('Robert', 'Downey Jr.', '1965-04-04', 1),
('Chris', 'Hemsworth', '1983-08-11', 0),
('Gal', 'Gadot', '1985-04-30', 0);
------------------------------------------
SELECT * FROM actors;
--------------------------------------------
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('here', '','','');
-----output--------------
-- ERROR:  syntaxe en entrée invalide pour le type date : «  »
-- LINE 5: VALUES ('', '','','');
-- ERREUR:  syntaxe en entrée invalide pour le type date : «  »


