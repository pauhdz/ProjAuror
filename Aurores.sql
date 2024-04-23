/*
Created: 05/03/2024
Modified: 06/03/2024
Model: MySQL 8.0
Database: MySQL 8.0
*/

-- Create tables section -------------------------------------------------

-- Table Usuarios

CREATE TABLE `Usuarios`
(
  `ID_Usuario` Int NOT NULL AUTO_INCREMENT,
  `Nombre` Varchar(255) NOT NULL,
  `Contraseña` Varchar(255) NOT NULL,
  `Apellidos` Varchar(255) NOT NULL,
  `Correo` Varchar(255) NOT NULL,
  `Fecha_Nacimiento` Date NOT NULL,
  `Numero_Telefono` Int,
  `ID_Rol` Int,
  `ID_Plan` Int,
  PRIMARY KEY (`ID_Usuario`)
)
;

CREATE INDEX `IX_Relationship9` ON `Usuarios` (`ID_Rol`)
;

CREATE INDEX `IX_Relationship10` ON `Usuarios` (`ID_Plan`)
;

-- Table Roles

CREATE TABLE `Roles`
(
  `ID_Rol` Int NOT NULL AUTO_INCREMENT,
  `Nombre_Rol` Varchar(255) NOT NULL,
  PRIMARY KEY (`ID_Rol`)
)
;

-- Table Planes

CREATE TABLE `Planes`
(
  `ID_Plan` Int NOT NULL AUTO_INCREMENT,
  `Nombre_Plan` Varchar(255) NOT NULL,
  `Precio_Planes` Double NOT NULL,
  `Descripcion` Varchar(255) NOT NULL,
  PRIMARY KEY (`ID_Plan`)
)
;

-- Table Actividades

CREATE TABLE `Actividades`
(
  `ID_Actividad` Int NOT NULL AUTO_INCREMENT,
  `Nombre_Actividad` Varchar(255) NOT NULL,
  `Precio_Actividades` Double NOT NULL,
  `Cantidad_Disponible` Int NOT NULL,
  `Descripcion_Actividad` Varchar(255) NOT NULL,
  `Fecha_Actividad` Datetime NOT NULL,
  PRIMARY KEY (`ID_Actividad`)
)
;

-- Table Reserva_Actividad

CREATE TABLE `Reserva_Actividad`
(
  `ID_Reserva` Int NOT NULL AUTO_INCREMENT,
  `Fecha_Reserva` Datetime(0) NOT NULL,
  `ID_Actividad` Int,
  `ID_Usuario` Int,
  PRIMARY KEY (`ID_Reserva`)
)
;

CREATE INDEX `IX_Relationship11` ON `Reserva_Actividad` (`ID_Actividad`)
;

CREATE INDEX `IX_Relationship14` ON `Reserva_Actividad` (`ID_Usuario`)
;

-- Table Fecha Reserva

CREATE TABLE `Fecha Reserva`
(
  `ID_Reservado_Seguro` Int NOT NULL AUTO_INCREMENT,
  `Fecha_Actividad` Datetime NOT NULL,
  `ID_Actividad` Int,
  `ID_Usuario` Int,
  `ID_Reserva` Int,
  PRIMARY KEY (`ID_Reservado_Seguro`)
)
;

CREATE INDEX `IX_Relationship12` ON `Fecha Reserva` (`ID_Actividad`)
;

CREATE INDEX `IX_Relationship13` ON `Fecha Reserva` (`ID_Usuario`)
;

CREATE INDEX `IX_Relationship15` ON `Fecha Reserva` (`ID_Reserva`)
;

-- Table Pago

CREATE TABLE `Pago`
(
  `ID_Pago` Int NOT NULL AUTO_INCREMENT,
  `ID_Cesta` Int,
  `ID_Pago_Immediato` Int,
  `Metodo_Pago` Varchar(255) NOT NULL,
  `Precio_Total` Double NOT NULL,
  `Numero_Targeta` Int,
  `Nombre_Targeta` Varchar(255),
  `CCV` Int,
  `Fecha_Caducidad` Date,
  `Correo_PayPal` Varchar(255),
  `Correo_ApplePay` Varchar(255),
  PRIMARY KEY (`ID_Pago`)
)
;

CREATE INDEX `IX_Relationship7` ON `Pago` (`ID_Cesta`)
;

CREATE INDEX `IX_Relationship8` ON `Pago` (`ID_Pago_Immediato`)
;

-- Table Compra_Directa

CREATE TABLE `Compra_Directa`
(
  `ID_Pago_Immediato` Int NOT NULL AUTO_INCREMENT,
  `ID_Usuario` Int,
  `ID_Actividad` Int,
  PRIMARY KEY (`ID_Pago_Immediato`)
)
;

CREATE INDEX `IX_Relationship1` ON `Compra_Directa` (`ID_Usuario`)
;

CREATE INDEX `IX_Relationship4` ON `Compra_Directa` (`ID_Actividad`)
;

-- Table Cesta

CREATE TABLE `Cesta`
(
  `ID_Cesta` Int NOT NULL AUTO_INCREMENT,
  `Precio_Total` Double NOT NULL,
  `ID_Actividad` Int,
  `ID_Usuario` Int,
  PRIMARY KEY (`ID_Cesta`)
)
;

CREATE INDEX `IX_Relationship5` ON `Cesta` (`ID_Actividad`)
;

CREATE INDEX `IX_Relationship6` ON `Cesta` (`ID_Usuario`)
;

-- Create foreign keys (relationships) section -------------------------------------------------

ALTER TABLE `Compra_Directa` ADD CONSTRAINT `Compra-Directa-Usuario` FOREIGN KEY (`ID_Usuario`) REFERENCES `Usuarios` (`ID_Usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Compra_Directa` ADD CONSTRAINT `Relationship4` FOREIGN KEY (`ID_Actividad`) REFERENCES `Actividades` (`ID_Actividad`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Cesta` ADD CONSTRAINT `Relationship5` FOREIGN KEY (`ID_Actividad`) REFERENCES `Actividades` (`ID_Actividad`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Cesta` ADD CONSTRAINT `Relationship6` FOREIGN KEY (`ID_Usuario`) REFERENCES `Usuarios` (`ID_Usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Pago` ADD CONSTRAINT `Relationship7` FOREIGN KEY (`ID_Cesta`) REFERENCES `Cesta` (`ID_Cesta`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Pago` ADD CONSTRAINT `Relationship8` FOREIGN KEY (`ID_Pago_Immediato`) REFERENCES `Compra_Directa` (`ID_Pago_Immediato`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Usuarios` ADD CONSTRAINT `Relationship9` FOREIGN KEY (`ID_Rol`) REFERENCES `Roles` (`ID_Rol`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Usuarios` ADD CONSTRAINT `Relationship10` FOREIGN KEY (`ID_Plan`) REFERENCES `Planes` (`ID_Plan`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Reserva_Actividad` ADD CONSTRAINT `Relationship11` FOREIGN KEY (`ID_Actividad`) REFERENCES `Actividades` (`ID_Actividad`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Fecha Reserva` ADD CONSTRAINT `Relationship12` FOREIGN KEY (`ID_Actividad`) REFERENCES `Actividades` (`ID_Actividad`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Fecha Reserva` ADD CONSTRAINT `Relationship13` FOREIGN KEY (`ID_Usuario`) REFERENCES `Usuarios` (`ID_Usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Reserva_Actividad` ADD CONSTRAINT `Relationship14` FOREIGN KEY (`ID_Usuario`) REFERENCES `Usuarios` (`ID_Usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Fecha Reserva` ADD CONSTRAINT `Relationship15` FOREIGN KEY (`ID_Reserva`) REFERENCES `Reserva_Actividad` (`ID_Reserva`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

