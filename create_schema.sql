DROP DATABASE IF EXISTS `lolhelper`;
CREATE DATABASE `lolhelper`;
USE `lolhelper`;

DROP TABLE IF EXISTS `champions`;
CREATE TABLE champions (
	`ID` INT(11) NOT NULL AUTO_INCREMENT,
	`NAME` VARCHAR(256) NOT NULL UNIQUE, 
	`RP_PRICE` INT(11) NOT NULL,
	`IP_PRICE` INT(11) NOT NULL,
	`IMAGE_URL` VARCHAR(256) NOT NULL, 
	PRIMARY KEY(`id`)
 );
 
 INSERT INTO `champions`(`name`, `RP_PRICE`, `IP_PRICE`, `IMAGE_URL`)
 VALUES 
 ('Aatrox', 975, 6300, 'http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Aatrox.png')
 
 
 
 
 