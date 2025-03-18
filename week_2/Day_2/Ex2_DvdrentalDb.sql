--1
select * from customer;
--2
select concat(last_name,' ', first_name) as full_name from customer;
--3
select distinct create_date from customer ;
--4
select * from customer order by first_name desc;
--5
select film_id, title,description,release_year,rental_rate from film order by rental_rate asc;
--6
select address, phone from address where district='Texas';
--7
select * from film where film_id = 15 or film_id = 150;
select * from film where film_id in (15,150);
--8
select film_id, title, description, length, rental_rate  from film where title='Airport Pollock';
--9
select film_id, title, description, length, rental_rate  from film where title like 'Ja%';
--10
select * from film order by rental_rate asc limit 10;
--11
SELECT * FROM film 
WHERE rental_rate > (SELECT MIN(rental_rate) FROM (SELECT rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10) AS sub)
ORDER BY rental_rate ASC 
FETCH FIRST 10 ROWS ONLY;
--12
select customer.first_name, customer.last_name, payment.amount, payment.payment_date
from customer 
inner join payment 
on customer.customer_id = payment.customer_id
order by customer.customer_id;
--13
select * from film where film_id not in (select distinct film_id from inventory);
--14
select city.city, country.country 
from city
inner join country
on city.country_id = country.country_id;
--15
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, payment.staff_id 
FROM customer 
JOIN payment ON customer.customer_id = payment.customer_id 
ORDER BY payment.staff_id;
