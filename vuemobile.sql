/*
 Navicat Premium Data Transfer

 Source Server         : local-mysql
 Source Server Type    : MySQL
 Source Server Version : 50635
 Source Host           : 127.0.0.1
 Source Database       : vuemobile

 Target Server Type    : MySQL
 Target Server Version : 50635
 File Encoding         : utf-8

 Date: 07/04/2018 09:54:40 AM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `article`
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '文章作者用户ID',
  `content` text NOT NULL COMMENT '文章内容',
  `publish_time` varchar(32) NOT NULL COMMENT '文章发布时间',
  `place` varchar(255) DEFAULT NULL COMMENT '地点',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `collect`
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect` (
  `id` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '收藏用户ID',
  `article_id` int(11) NOT NULL COMMENT '收藏作品ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `like`
-- ----------------------------
DROP TABLE IF EXISTS `like`;
CREATE TABLE `like` (
  `id` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '点赞用户ID',
  `article_id` int(11) NOT NULL COMMENT '点赞作品ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `message`
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `send_id` int(11) NOT NULL COMMENT '留言用户ID',
  `get_id` int(11) NOT NULL COMMENT 'get_id：接收留言用户ID',
  `content` varchar(128) NOT NULL COMMENT '留言内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `notify`
-- ----------------------------
DROP TABLE IF EXISTS `notify`;
CREATE TABLE `notify` (
  `id` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `send_id` int(11) NOT NULL COMMENT '发消息用户ID',
  `get_id` int(11) NOT NULL COMMENT '接收消息ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `sessions`
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `sessions`
-- ----------------------------
BEGIN;
INSERT INTO `sessions` VALUES ('6iHTTbCkE7FieqpqOLoYeMTHE6k0fACE', '1530697202', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('8mfg_6k-U-BvA8ULioXQBHkST7wNbXjJ', '1530695879', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('Bivvnt3DeXRyw_Qc2cDzcRDIXbMIladl', '1530694938', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('DzODokVTZc1n3GeKX4Q8l9jnH2CyoDu8', '1530697352', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('IZBN61ed1auvxzfZHat4PT4YSyZ0fxBB', '1530696835', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('KJgKFwPZA3JFZIIJJfKpJBfitlr2BhQr', '1530697332', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('Mx8Fi9hFLOUx5_40WpWQNtWeoUgfWjKT', '1530697076', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('Q0p7UCkqwGWacQiVKWmTIZEtFrW6qCly', '1530697295', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('RPWHf4jWEiMfYBa_VFXdFlU_It3lSkDH', '1530697359', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('TIXq4QEBqkrYjDEGzTi-O1VnFwoHf0_t', '1530696602', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('TNc0id3aafwBdopH2I0TPUG0lDEwod4G', '1530697307', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('_RtRA-3Fe1o6ZKR4yliu7mZUtk6jZ6S8', '1530697368', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('aqec-RkQrq7GU_bW6K4mMItZTxAN1rAP', '1530696928', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('bBrA28K6FYPCGxNQGc4k4rMSlwAFVEm9', '1530697089', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('cdPsp7A3dRd9Qbwnm_jjc5dvB4EvRywH', '1530697226', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('nHaX7SHipazHL-lE7Pq95ESR__q0mX93', '1530697099', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('nWXekEktyzlJSWwpqTlXbNY07Oh2Lh3Q', '1530696580', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('tvSy50ht8BmT-scTeEdLV7PlF9tiGriz', '1530696992', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'), ('uxYTUoeULb9x31LJBQYckIEgAWgBcKvO', '1530696641', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}');
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `mobile` varchar(32) NOT NULL,
  `password` varchar(256) NOT NULL,
  `avatar` varchar(256) DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL,
  `signature` varchar(128) DEFAULT NULL,
  `hobby` varchar(128) DEFAULT NULL COMMENT '爱好',
  `occupation` varchar(128) DEFAULT NULL COMMENT '职业',
  `constellation` varchar(32) DEFAULT NULL COMMENT '星座',
  `sex` tinyint(2) DEFAULT '0' COMMENT '性别  0男 1女',
  `fans` int(11) DEFAULT '0' COMMENT '粉丝',
  `attention` int(11) DEFAULT '0' COMMENT '关注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('24', '13119580000', '123', null, '王小丫', '路上...', '旅游', '导游', '金牛座', '1', '0', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
