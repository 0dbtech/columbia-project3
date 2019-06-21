-- Create syntax for 'Dogs'

CREATE TABLE `Dogs` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `DogId` mediumint(9) DEFAULT NULL,
  `Breed` varchar(255) DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Images` text,
  `CURRENT_TIMESTAMP` timestamp NULL DEFAULT NULL,
  `BOOKED_TIMESTAMP` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
