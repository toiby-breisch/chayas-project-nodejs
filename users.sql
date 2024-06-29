CREATE DATABASE users;

CREATE TABLE users.users (
	Id int NOT NULL,
    Name varchar(255),
    Email varchar(255),
    NumOfScooters int,
    Password int,
    PRIMARY KEY (Id)
);

	SELECT * FROM users.users ;

ALTER TABLE users.users 
ADD Password int;
DELETE from users.users where Id = 987;

INSERT INTO users.users 
VALUES (12348, 'Gitty' ,'Giity@gmail.com',6,2, 362);



INSERT INTO users.users (Id,Name, NumOfJoin) 
VALUES (6789, 'Chaya', 9);
SELECT * FROM users.users;



UPDATE users.users
SET Id= 6666666,Name= "rrrrrrrrrr" , NumOfJoin=99,Email="yiuew@hkjd"
WHERE Id=55;

SELECT *FROM users.users;

ALTER TABLE users.users
ADD Email varchar(255);

