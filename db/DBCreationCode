# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.25)
# Database: Dogs
# Generation Time: 2019-06-22 04:09:09 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Dogs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Dogs`;

CREATE TABLE `Dogs` (
  `Id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `DogId` mediumint(9) DEFAULT NULL,
  `Breed` varchar(255) DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Images` text,
  `CURRENT_TIMESTAMP` timestamp NULL DEFAULT NULL,
  `BOOKED_TIMESTAMP` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;



# Dump of table Shelters
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Shelters`;

CREATE TABLE `Shelters` (
  `Id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(11) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `CURRENT_TIMESTAMP` timestamp NULL DEFAULT NULL,
  `Zipcode` char(5) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
