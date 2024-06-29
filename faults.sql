CREATE TABLE users.faults (
  Id int, 
  Comments varchar(255),
  IdStatoin int,
  IdProduct  int,
PRIMARY KEY (Id),
FOREIGN KEY (IdStatoin) REFERENCES users.stations(IdStation)

);
INSERT INTO users.faults  VALUES (default,"rrr", 454,123);

ALTER TABLE users.faults
ADD IdProduct int;
select count(Id) as IdStatoin from users.faults;

SELECT * FROM users.faults;


ALTER TABLE users.faults
DROP COLUMN Type;