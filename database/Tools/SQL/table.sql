CREATE TABLE IF NOT EXISTS `api-keys` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `api-key` varchar(32) COLLATE utf8_swedish_ci NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `api-key` (`api-key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;