CREATE TABLE users.prices (
	IdProduct int,
    price int,
    PRIMARY KEY (IdProduct)
);



INSERT INTO users.prices 
VALUES (8888,15);

INSERT INTO users.prices 
VALUES (666,30 );

INSERT INTO users.prices 
VALUES (777,50 );

INSERT INTO users.prices 
VALUES (999,80 );

INSERT INTO users.prices 
VALUES (111,100 );

INSERT INTO users.prices 
VALUES (555,25 );
INSERT INTO users.prices 
VALUES (444,35 );
INSERT INTO users.prices 
VALUES (333,50 );



SELECT * FROM users.prices;




DELETE FROM users.price WHERE price = 30;



ALTER TABLE users.price
ADD PRIMARY KEY (Idproduct);