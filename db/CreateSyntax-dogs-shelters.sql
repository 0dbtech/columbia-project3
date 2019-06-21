-- Create syntax for '(null)'

-- Create syntax for TABLE 'Dogs'
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

-- Create syntax for TABLE 'Shelters'
CREATE TABLE `Shelters` (
  `Id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(11) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `CURRENT_TIMESTAMP` timestamp NULL DEFAULT NULL,
  `Zipcode` char(5) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
