CREATE DATABASE archivo_links;
USE archivo_links;

CREATE TABLE usuarios (
	identificador int(8) AUTO_INCREMENT,
  nombre VARCHAR(255),
  contrasenya VARCHAR(255),
  PRIMARY KEY (identificador)
)ENGINE = InnoDB;
CREATE TABLE tablas (
	identificador INT(8) AUTO_INCREMENT,
	nombre VARCHAR(255),
	link VARCHAR(255) NOT NULL,
	fecha_de_modificacion VARCHAR(255),
  imagen VARCHAR(255),
  identificador_usuario INT(8),
  FOREIGN KEY (identificador_usuario) REFERENCES usuarios(identificador),
	PRIMARY KEY (identificador)
)ENGINE = InnoDB;

USE archivo_links;
INSERT INTO usuarios (nombre, contrasenya) VALUES
('Yisoo', 'rockYou'),
('Fubu', 'rockYou');

USE archivo_links;
INSERT INTO tablas (nombre, link, fecha_de_modificacion, imagen, identificador_usuario) VALUES
('Fila A', 'https://www.wikipedia.com', '2023-09-09', 'hello_world', 2),
('Fila B', 'https://www.wikipedia.com', '2023-09-09', 'hello_world', 2),
('Fila C', 'https://www.wikipedia.com', '2023-09-09', 'hello_world', 2),
('Fila D', 'https://www.wikipedia.com', '2023-09-09', 'hello_world', 1),
('Fila E', 'https://www.wikipedia.com', '2023-09-09', 'hello_world', 2),
('Fila F', 'https://www.wikipedia.com', '2023-09-09', 'hello_world', 1),
('Fila G', 'https://www.wikipedia.com', '2023-09-09', 'hello_world', 1),
('Fila H', 'https://www.wikipedia.com', '2023-09-09', 'hello_world', 2),
('Fila I', 'https://www.wikipedia.com', '2023-09-09', 'hello_world', 2),
('Fila J', 'https://www.wikipedia.com', '2023-09-09', 'hello_world', 1);
