-- Create syntax for TABLE 'Dogs'
CREATE TABLE `Dogs` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `DogId` mediumint(9) DEFAULT NULL,
  `Breed` varchar(255) DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `CURRENT_TIMESTAMP` timestamp NULL DEFAULT NULL,
  `Images` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'Shelters'
CREATE TABLE `Shelters` (
  `id` int(8) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` mediumint(11) DEFAULT NULL,
  `phone` mediumint(11) DEFAULT NULL,
  `CURRENT_TIMESTAMP` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;