DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY (id)
);
