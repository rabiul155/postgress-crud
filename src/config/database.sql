-- Active: 1739370938781@@127.0.0.1@5432@postgrescrud


CREATE TABLE todos(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);


SELECT * from todos;


INSERT INTO todos("description") VALUES 
('This is todo 1'),
('This is todo 2'),
('This is todo 3'),
('This is todo 4'),
('This is todo 5');


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (name, email) VALUES
('user1', 'user1@gmail.com'),
('user2', 'user2@gmail.com'),
('user3', 'user3@gmail.com'),
('user4', 'user4@gmail.com');

SELECT * from users
