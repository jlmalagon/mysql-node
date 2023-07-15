CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

/*Esto solo es para ver que comando se ponen en mysql*/


/*Estos comandos  se pegan en la consola MySQL*/
INSERT INTO employee VALUES (1, 'Joe', 1000), 
(2, "Henry", 2000),
(3, "Sam", 2500),
(4, 'Max', 1500);

