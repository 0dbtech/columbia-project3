-- Create syntax for TABLE 'dogs'
CREATE TABLE `dogs` (
  `ID` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `BREED` varchar(255) DEFAULT NULL,
  `GENDER` varchar(9) DEFAULT NULL,
  `CURRENT_TIMESTAMP` varchar(255) DEFAULT 'CURRENT_TIME',
  `BOOKED_TIMESTAMP` varchar(255) DEFAULT NULL,
  `IMAGE` varchar(255) DEFAULT 'https://firebasestorage.googleapis.com/v0/b/paw-media.appspot.com/o/image%2Fdog1.jpg?alt=media&token=d1b67bc8-a206-4706-8779-1f8d3bd8a7b5',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `VIDEO` varchar(255) DEFAULT '',
  `SHELTER` varchar(255) DEFAULT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `AGE` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'shelters'
CREATE TABLE `shelters` (
  `ID` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `NAME` mediumint(9) DEFAULT NULL,
  `ZIPCODE` varchar(10) DEFAULT NULL,
  `CURRENT_TIMESTAMP` varchar(255) DEFAULT '',
  `PHONE` varchar(100) DEFAULT NULL,
  `GUID` varchar(36) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'Users'
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;