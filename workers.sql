CREATE TABLE users.workers (
    IdWorker int,
    Name varchar(255),
    Password int ,
    Email varchar (255),
	PRIMARY KEY (IdWorker),
    UNIQUE (Password)
);

ALTER TABLE users.workers RENAME COLUMN IdWorkers TO IdWorker;

SELECT * FROM users.workers ;

INSERT INTO users.workers
VALUES (123,'chaya', 987, "chaye@gmail.com");

INSERT INTO users.workers
VALUES (456,'sari', 654);

UPDATE users.workers
SET Email ='sari@gmail.com'
WHERE IdWorker=456;

UPDATE users.workers
SET Email ='chaya@gmail.com'
WHERE IdWorker=123;

SELECT * FROM users.workers;

ALTER TABLE users.workers
ADD Email varchar (255);

SELECT * FROM users.workers WHERE IdWorkers = 456;