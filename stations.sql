

CREATE TABLE users.stations (
    IdStation int NOT NULL,
    Location varchar(255),
    NumOfFreeScooter int,
    lat int,
    len int,
     PRIMARY KEY (IdStation)
);


INSERT INTO users.stations
VALUES (454,'Jerusalem',  10, 30.5448454, 35.874135436);


INSERT INTO users.stations
VALUES (15,'Ashdod', 10, 45.567987, 87.456787);

INSERT INTO users.stations
VALUES (789,'Tel Aviv', 10,31.795583356519643,35.21523500257588);

INSERT INTO users.stations
VALUES (123,'Beit Shemesh', 10);

INSERT INTO users.stations
VALUES (456,'Beitar', 9);

UPDATE users.stations
SET NumOfFreeScooter =10 where IdStation = 454 ;

ALTER TABLE  users.stations
ADD lat int;

ALTER TABLE  users.stations
ADD len int;

select * from users.stations;

SELECT * FROM users.stations WHERE NumOfFreeScooter >0;

select * from users.stations where NumOfFreeScooter >8;

SELECT * FROM users.stations;

