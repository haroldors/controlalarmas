SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `usuarios`;
DROP TABLE IF EXISTS `perfiles`;
DROP TABLE IF EXISTS `logusuarios`;
DROP TABLE IF EXISTS `historicosesiones`;
DROP TABLE IF EXISTS `sensores`;
DROP TABLE IF EXISTS `tiposensores`;
DROP TABLE IF EXISTS `tq_usuarios_logusuarios`;
DROP TABLE IF EXISTS `reportessensores`;
DROP TABLE IF EXISTS `logsensores`;
DROP TABLE IF EXISTS `tq_sensores_logsensores`;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE `usuarios` (
    `idusuario` VARCHAR(50) NOT NULL,
    `nombreusuario` VARCHAR(50) NOT NULL,
    `idperfil` BIGINT NOT NULL,
    `passwordusuario` VARCHAR(50) NOT NULL,
    `estadousuario` TINYINT(1) NOT NULL,
    PRIMARY KEY (`idusuario`)
);

CREATE TABLE `perfiles` (
    `idperfil` BIGINT NOT NULL,
    `nombreperfil` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`idperfil`)
);

CREATE TABLE `logusuarios` (
    `idlogusuario` BIGINT NOT NULL,
    `idusuario` VARCHAR(50) NOT NULL,
    `nombreusuario` VARCHAR(50) NOT NULL,
    `idperfil` BIGINT NOT NULL,
    `passwordusuario` VARCHAR(50) NOT NULL,
    `estadousuario` TINYINT(1) NOT NULL,
    PRIMARY KEY (`idlogusuario`),
    UNIQUE (`idlogusuario`)
);

CREATE TABLE `historicosesiones` (
    `idhitoricosesion` BIGINT NOT NULL,
    `ipsesion` VARCHAR(50) NOT NULL,
    `fechalargaregistro` DATETIME NOT NULL,
    `idusuario` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`idhitoricosesion`),
    UNIQUE (`idhitoricosesion`)
);

CREATE TABLE `sensores` (
    `idsensor` BIGINT NOT NULL,
    `nombresensor` VARCHAR(100) NOT NULL,
    `idtiposensor` BIGINT NOT NULL,
    `ipautorizadasensor` VARCHAR(50) NOT NULL,
    `estadosensor` TINYINT(1) NOT NULL,
    PRIMARY KEY (`idsensor`)
);

CREATE TABLE `tiposensores` (
    `idtiposensor` BIGINT NOT NULL,
    `nombretiposensor` VARCHAR(50) NOT NULL,
    `estadotiposensor` TINYINT(1) NOT NULL,
    PRIMARY KEY (`idtiposensor`)
);

CREATE TABLE `tq_usuarios_logusuarios` (
    `idtq_usuario_logusuario` BIGINT NOT NULL,
    `idusuario` VARCHAR(50) NOT NULL,
    `idlogusuario` BIGINT NOT NULL,
    PRIMARY KEY (`idtq_usuario_logusuario`)
);

CREATE TABLE `reportessensores` (
    `idreportesensor` BIGINT NOT NULL,
    `idsensor` BIGINT NOT NULL,
    `fechalargaregistro` DATETIME NOT NULL,
    `reportesensor` TINYINT(1) NOT NULL,
    `ipsensor` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`idreportesensor`)
);

CREATE TABLE `logsensores` (
    `idlogsensor` BIGINT NOT NULL,
    `idsensor` BIGINT NOT NULL,
    `nombresensor` VARCHAR(100) NOT NULL,
    `idtiposensor` BIGINT NOT NULL,
    `ipautorizadasensor` VARCHAR(50) NOT NULL,
    `estadosensor` TINYINT(1) NOT NULL,
    PRIMARY KEY (`idlogsensor`),
    UNIQUE (`idlogsensor`)
);

CREATE TABLE `tq_sensores_logsensores` (
    `idtq_sensores_logsensores` BIGINT NOT NULL,
    `idlogsensor` BIGINT NOT NULL,
    `idusuario` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`idtq_sensores_logsensores`),
    UNIQUE (`idtq_sensores_logsensores`)
);
