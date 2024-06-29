CREATE TABLE users.scooter (
    IdScooter int,
    Stutus varchar(255),
    HasTaken boolean,
    Idstation int,
    IdUser int,
    FOREIGN KEY (IdStation) REFERENCES users.stations(IdStation),
     PRIMARY KEY (IdScooter)
);

	SELECT COUNT(HasTaken)
	FROM users.scooter
	WHERE HasTaken =1 ;


SELECT users.scooter.IdScooter, users.users.Id, users.users.Name, users.users.Email
    FROM users.scooter
    INNER JOIN users.users ON users.scooter.IdUser=users.users.Id;
    
    
update  users.scooter  set IdUser = 12345 where IdScooter = 189;

SELECT * FROM users.scooter;

INSERT INTO users.scooter 
VALUES (123,'proper',0, 123,0);

INSERT INTO users.scooter 
VALUES (798,'proper',0, 123,0);

INSERT INTO users.scooter 
VALUES (258,'proper',0, 123,0);

INSERT INTO users.scooter 
VALUES (147,'proper',0, 123,0);

INSERT INTO users.scooter 
VALUES (369,'proper',0, 123,0);

INSERT INTO users.scooter 
VALUES (357,'proper',0, 123,0);

INSERT INTO users.scooter 
VALUES (297,'proper',0, 123,0);

INSERT INTO users.scooter 
VALUES (198,'proper',0, 123,0);

INSERT INTO users.scooter 
VALUES (189,'proper',0, 123,0);

INSERT INTO users.scooter 
VALUES (117,'proper',0, 123,0);






INSERT INTO users.scooter 
VALUES (654,'proper',0, 454,0);
INSERT INTO users.scooter 
VALUES (666,'proper',0, 454,0);
INSERT INTO users.scooter 
VALUES (111,'proper',0, 454,0);
INSERT INTO users.scooter 
VALUES (777,'proper',0, 454,0);
INSERT INTO users.scooter 
VALUES (789,'proper',0, 454,0);
INSERT INTO users.scooter 
VALUES (333,'proper',0, 454,0);
INSERT INTO users.scooter 
VALUES (222,'proper',0, 454,0);
INSERT INTO users.scooter 
VALUES (555,'proper',0, 454,0);
INSERT INTO users.scooter 
VALUES (456,'proper',0, 454,0);
INSERT INTO users.scooter 
VALUES (753,'proper',0, 454,0);





INSERT INTO users.scooter 
VALUES (999,'proper',0, 456,0);
INSERT INTO users.scooter 
VALUES (624,'proper',0, 456,0);
INSERT INTO users.scooter 
VALUES (362,'proper',0, 456,0);
INSERT INTO users.scooter 
VALUES (482,'proper',0, 456,0);
INSERT INTO users.scooter 
VALUES (146,'proper',0, 456,0);
INSERT INTO users.scooter 
VALUES (158,'proper',0, 456,0);
INSERT INTO users.scooter 
VALUES (326,'proper',0, 456,0);
INSERT INTO users.scooter 
VALUES (339,'proper',0, 456,0);
INSERT INTO users.scooter 
VALUES (998,'proper',0, 456,0);




INSERT INTO users.scooter 
VALUES (334,'proper',0, 15,0);
INSERT INTO users.scooter 
VALUES (775,'proper',0, 15,0);
INSERT INTO users.scooter 
VALUES (557,'proper',0, 15,0);
INSERT INTO users.scooter 
VALUES (885,'proper',0, 15,0);
INSERT INTO users.scooter 
VALUES (669,'proper',0, 15,0);
INSERT INTO users.scooter 
VALUES (994,'proper',0, 15,0);
INSERT INTO users.scooter 
VALUES (664,'proper',0, 15,0);
INSERT INTO users.scooter 
VALUES (201,'proper',0, 15,0);
INSERT INTO users.scooter 
VALUES (304,'proper',0, 15,0);
INSERT INTO users.scooter 
VALUES (908,'proper',0, 15,0);



INSERT INTO users.scooter 
VALUES (900,'proper',0, 789,0);
INSERT INTO users.scooter 
VALUES (800,'proper',0, 789,0);
INSERT INTO users.scooter 
VALUES (700,'proper',0, 789,0);
INSERT INTO users.scooter 
VALUES (600,'proper',0, 789,0);
INSERT INTO users.scooter 
VALUES (500,'proper',0, 789,0);
INSERT INTO users.scooter 
VALUES (400,'proper',0, 789,0);
INSERT INTO users.scooter 
VALUES (300,'proper',0, 789,0);
INSERT INTO users.scooter 
VALUES (200,'proper',0, 789,0);
INSERT INTO users.scooter 
VALUES (100,'proper',0, 789,0);
INSERT INTO users.scooter 
VALUES (880,'proper',0, 789,0);







INSERT INTO users.scooter (IdScooter,Stutus, HasTaken)
VALUES (123,'proper', 1);

UPDATE users.scooter
SET Idstation= 123 where IdScooter =123;


ALTER TABLE users.scooter
ADD IdUser int;

UPDATE users.scooter
SET hasTaken = 0 where Idstation =123 ;

