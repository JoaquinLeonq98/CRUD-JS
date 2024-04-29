CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) 
VALUES ('John Doe', 'jonh@gmail.com'),('Jane Doe', 'jane@gmail.com');

SELECT * FROM users;