SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `la1tv` DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci;
USE `la1tv`;

CREATE TABLE IF NOT EXISTS `api_keys` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `api_key` varchar(32) COLLATE utf8_swedish_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `view_vod_uri` tinyint(1) NOT NULL,
  `view_stream_uri` tinyint(1) NOT NULL,
  `use_webhook` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_request_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `api_key` (`api_key`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;
COMMIT;