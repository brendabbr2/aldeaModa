ALTER ROLE postgres WITH PASSWORD 'password';

Create table Product(
id SERIAL PRIMARY KEY,
name VARCHAR(30),
in_stock int,
price float
);

Insert into Product(name,in_stock,price) values('Sport Puma T-Shirt',10,15);
Insert into Product(name,in_stock,price) values('Sport Nike T-Shirt',10,13);
Insert into Product(name,in_stock,price) values('Sport Adidas T-Shirt',10,12);
Insert into Product(name,in_stock,price) values('Sport Coco T-Shirt',10,14);
Insert into Product(name,in_stock,price) values('Sport Hurley T-Shirt',10,12);
Insert into Product(name,in_stock,price) values('Sport Lotto T-Shirt',10,15);
Insert into Product(name,in_stock,price) values('Sport Zara T-Shirt',10,16);
Insert into Product(name,in_stock,price) values('Fashion Pri-Pro T-Shirt',10,20);

Create table OrderClient(
id SERIAL PRIMARY KEY,
status VARCHAR(30),
client VARCHAR(50),
location VARCHAR(100),
order_date Date,
est_delivery_date Date
);

INSERT INTO OrderClient (status, client, location, order_date, est_delivery_date)
VALUES
('Pending', 'Juan Pérez', 'San José, San José, San José', '2024-05-01', '2024-05-10'),
('Pending', 'María Rodríguez', 'Alajuela, Alajuela, Alajuela', '2024-05-02', '2024-05-11'),
('Pending', 'Carlos González', 'Heredia, Heredia, Heredia', '2024-05-03', '2024-05-12'),
('Pending', 'Ana Martínez', 'Cartago, Cartago, Cartago', '2024-05-04', '2024-05-13'),
('Pending', 'Luis Sánchez', 'Guanacaste, Liberia, Liberia', '2024-05-05', '2024-05-14'),
('Pending', 'Laura Gutiérrez', 'Puntarenas, Puntarenas, Puntarenas', '2024-05-06', '2024-05-15'),
('Pending', 'Pedro Jiménez', 'Limón, Limón, Limón', '2024-05-07', '2024-05-16'),
('Pending', 'Sofía Chaves', 'Desamparados, San José, Desamparados', '2024-05-08', '2024-05-17'),
('Pending', 'Daniel Blanco', 'San Ramón, Alajuela, San Ramón', '2024-05-09', '2024-05-18'),
('Pending', 'Elena Rojas', 'Barva, Heredia, Barva', '2024-05-10', '2024-05-19'),
('Pending', 'Ricardo Mora', 'Paraíso, Cartago, Paraíso', '2024-05-11', '2024-05-20'),
('Pending', 'Adriana Solís', 'Santa Cruz, Guanacaste, Santa Cruz', '2024-05-12', '2024-05-21'),
('Pending', 'Javier Aguilar', 'Garabito, Puntarenas, Jacó', '2024-05-13', '2024-05-22'),
('Pending', 'Verónica Vargas', 'Pococí, Limón, Guápiles', '2024-05-14', '2024-05-23'),
('Pending', 'Mariana Rojas', 'Escazú, San José, Escazú', '2024-05-15', '2024-05-24');

CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    phone VARCHAR(20)
);

INSERT INTO account (nombre, email, password, phone) VALUES
('Juan Pérez', 'juan@example.com', 'password123', '123-456-7890'),
('María Rodríguez', 'maria@example.com', 'securepass', '987-654-3210'),
('Carlos González', 'carlos@example.com', 'mysecretpass', '456-789-0123'),
('Ana Martínez', 'ana@example.com', 'p@ssw0rd', '789-012-3456'),
('Luis Sánchez', 'luis@example.com', 'letmein', '012-345-6789'),
('Laura Gutiérrez', 'laura@example.com', '123456', '234-567-8901'),
('Pedro Jiménez', 'pedro@example.com', 'password123', '567-890-1234'),
('Sofía Chaves', 'sofia@example.com', 'abc123', '890-123-4567'),
('Daniel Blanco', 'daniel@example.com', 'passw0rd', '345-678-9012'),
('Elena Rojas', 'elena@example.com', 'qwerty', '678-901-2345'),
('Ricardo Mora', 'ricardo@example.com', 'password', '901-234-5678'),
('Adriana Solís', 'adriana@example.com', 'letmein123', '123-456-7890'),
('Javier Aguilar', 'javier@example.com', 'password123', '234-567-8901'),
('Verónica Vargas', 'veronica@example.com', 'password1234', '345-678-9012'),
('Mariana Rojas', 'mariana@example.com', 'password12345', '456-789-0123');

select * from account




