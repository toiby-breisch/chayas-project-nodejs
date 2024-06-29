CREATE TABLE users.bikes (
    IdBike int,
    Stutus varchar(255),
    HasTaken boolean,
    IdStation int,
    IdUser int,
    PRIMARY KEY (IdBike),
	FOREIGN KEY (IdStation) REFERENCES users.stations(IdStation)
);



INSERT INTO users.bikes 
VALUES (456,'proper',0, 123, 0);


SELECT * FROM users.Bikes;

INSERT INTO users.Bikes 
VALUES (777, 'proper' ,2, 123, 0);

SELECT * FROM users.Bikes  ;


UPDATE users.bikes
SET IdBike= 6666666,Stutus= "rrrrrrrrrr" , HasTaken=99
WHERE IdBike=212;

SELECT * FROM users.bikes ;

ALTER TABLE users.bikes
ADD IdStation int;

ALTER TABLE users.bikes 
ADD FOREIGN KEY (IdStation) REFERENCES users.stations(IdStation);
