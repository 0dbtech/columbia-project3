-- Create syntax for 'Shelters'

CREATE TABLE `Shelters` (
  `id` int(8) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` mediumint(11) DEFAULT NULL,
  `phone` mediumint(11) DEFAULT NULL,
  `CURRENT_TIMESTAMP` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
