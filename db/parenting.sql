/*
 Navicat Premium Data Transfer

 Source Server         : 111
 Source Server Type    : MySQL
 Source Server Version : 100316
 Source Host           : 127.0.0.1:3306
 Source Schema         : parenting

 Target Server Type    : MySQL
 Target Server Version : 100316
 File Encoding         : 65001

 Date: 31/12/2019 19:00:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for answer
-- ----------------------------
DROP TABLE IF EXISTS `answer`;
CREATE TABLE `answer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `topic_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `create_time` timestamp(0) NULL DEFAULT current_timestamp(0),
  `praise` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0',
  `collect` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of answer
-- ----------------------------
INSERT INTO `answer` VALUES (1, '9', '1', '<p>11月去澳门，宝宝不到半岁，因为没有吃辅食带的东西很简单：ergobaby背带，尿不湿，安抚奶嘴，小玩具，包巾，棉柔巾，凡士林。</p>', '2019-11-09 17:20:19', '2', '1');
INSERT INTO `answer` VALUES (2, '9', '2', '<p>虽然天气很热，但是绝对不能让宝宝光着睡觉的。可以给宝宝晚上穿一件爬服或者包屁衣，可以保护肚子，不会让宝宝受凉，最好再给宝宝肚子上搭条毛巾。</p>', '2019-11-09 17:23:16', '0', '0');
INSERT INTO `answer` VALUES (3, '9', '1', '<p>如果要带婴儿出去旅游的话，一定要带好相关的证件，尤其是在出国旅游的时候，一定要将这些准备好，然后就是准备好婴儿日常所需要的奶瓶或者是纸尿裤以及换洗的衣服等等。而且一般的人在带婴儿旅游的时候都会选择温暖的时候去旅游，所以一定要记着带雨伞以及厚的衣服。</p>', '2019-11-09 17:24:12', '0', '0');
INSERT INTO `answer` VALUES (4, '9', '6', '<p>很多男人平时不光抽烟，也会喝酒，尤其是应酬的时候，男人对烟酒的需求量比女人要大很多，但是当自己的另一半怀孕了之后，丈夫们这个时候就应该远离这两样东西了，烟酒当中都含有不利于胎儿发育的成分，男人坐在一边抽烟，老婆坐在一边会吸入二手烟，对肚子里的娃非常不好，时间长了，胎儿会出现一些问题，所以告诫那些即将成为爸爸的男人们，为了娃的健康暂时告别烟酒吧。</p>', '2019-11-09 17:24:45', '1', '0');
INSERT INTO `answer` VALUES (5, '9', '6', '<p>女人在怀孕之后，身体会发生一些变化，而且挺着个大肚子，非常容易累，行动也不是很方便，这个时候有些家务活可能就没办法做了，如果丈夫在这个时候还不主动帮妻子分担一部分家务活，而是做在一边当甩手掌柜的，所有的活儿都让孕妈一个人去完成，那么对肚子里的娃也不太好，时间长了不仅会让孕妈腰酸背痛，严重的还会导致胎儿出问题。</p><p><br></p><p>　　所以建议各位准爸爸们，要有一个清晰的意识，意识到女人怀孕很辛苦，能帮忙的时候一定要主动帮忙，这样孕妈才能多休息一会儿，才更有利于胎儿发育。</p>', '2019-11-09 17:24:58', '0', '0');
INSERT INTO `answer` VALUES (6, '9', '6', '<p>怀孕后女人的情绪非常不稳定，一会高兴，一会悲伤的，那么作为另一半来说就要适时去安慰一下了，不要去指责妻子，应该给妻子更多的理解和包容，况且孕妈的心情好坏会直接影响到肚子里的娃，吵架只会让夫妻感情越来越不好，孕妇心情也受到影响，孕妇心情一不好，胎儿就会受影响。</p>', '2019-11-09 17:25:08', '1', '0');
INSERT INTO `answer` VALUES (9, '9', '9', '<p><img src=\"http://q3d5zbn7j.bkt.clouddn.com/parenting/9_1574240525235\"></p><p>家长们可以更多关注玩具的品质。真正能促进孩童成长的玩具不一定是所谓的智能高端，一个好的玩具其实是10%的玩具本身加上90%的玩耍力。玩具本身不是最重要的，在玩耍中所锻炼的能力和学习才是关键。低结构玩具推荐：乐高、积木、磁力片、雪花片等……</p>', '2019-11-20 17:02:10', '1', '0');
INSERT INTO `answer` VALUES (10, '9', '7', '<p wx:nodeid=\"32\">大多数家长在生孩子之前和之后都会担心自己的孩子性格不好，其实这可以从宝宝睡觉的姿势窥见一斑。有一些宝宝可以翻身之后就很不老实了。他们有的喜欢趴着睡，有的喜欢侧着睡，有的则是睡得千奇百怪。母亲们可能只会给孩子盖好被子，而从未想到可以从这些睡姿中了解宝宝的性格。孩子睡着了，对父母来讲也许是一件省心的事情，因为孩子不在闹腾了，但是如果把孩子放在床上不再管他，就会错过很多了解孩子的机会。</p>', '2019-12-31 15:11:52', '0', '0');
INSERT INTO `answer` VALUES (11, '12', '1', '<p>准备好你的娃娃</p>', '2019-12-31 15:35:44', '0', '0');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (4, '<p><img src=\"http://q3d5zbn7j.bkt.clouddn.com/parenting/banner/1573834464865_recruit-content.png\"></p>', '育儿达人招募');
INSERT INTO `article` VALUES (5, '<p><img src=\"http://q3d5zbn7j.bkt.clouddn.com/parenting/banner/1573834580770_strategy-content.png\"></p>', '新手攻略');

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `pages` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES (1, 'http://q3d5zbn7j.bkt.clouddn.com/parenting/banner/1573315995903_recruit.png', NULL, '4');
INSERT INTO `banner` VALUES (2, 'http://q3d5zbn7j.bkt.clouddn.com/parenting/banner/1573316152067_strategy.png', NULL, '5');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, '喂奶百科');
INSERT INTO `category` VALUES (2, '养育攻略');
INSERT INTO `category` VALUES (9, '疾病护理');
INSERT INTO `category` VALUES (11, '养娃趣事');
INSERT INTO `category` VALUES (12, '日常护理');
INSERT INTO `category` VALUES (13, '好物推荐');

-- ----------------------------
-- Table structure for column
-- ----------------------------
DROP TABLE IF EXISTS `column`;
CREATE TABLE `column`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of column
-- ----------------------------
INSERT INTO `column` VALUES (1, '本周热议话题', '看看社区的妈妈都在聊什么', 'http://q3d5zbn7j.bkt.clouddn.com/parenting/column/1572936885322_ocean.jpeg');
INSERT INTO `column` VALUES (2, '孕期必看话题', '孕期最精华的话题，都在这里啦', 'http://q3d5zbn7j.bkt.clouddn.com/parenting/column/1572942607968_yellow.jpeg');
INSERT INTO `column` VALUES (3, '0~6月精华帖', '0-6月最精华的话题，都在这里啦', 'http://q3d5zbn7j.bkt.clouddn.com/parenting/column/1573011098107_red.jpeg');

-- ----------------------------
-- Table structure for column_topic
-- ----------------------------
DROP TABLE IF EXISTS `column_topic`;
CREATE TABLE `column_topic`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `column_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `topic_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of column_topic
-- ----------------------------
INSERT INTO `column_topic` VALUES (1, '1', '1');
INSERT INTO `column_topic` VALUES (2, '1', '2');
INSERT INTO `column_topic` VALUES (3, '1', '3');
INSERT INTO `column_topic` VALUES (4, '1', '4');
INSERT INTO `column_topic` VALUES (5, '1', '6');
INSERT INTO `column_topic` VALUES (6, '1', '7');
INSERT INTO `column_topic` VALUES (8, '2', '2');
INSERT INTO `column_topic` VALUES (9, '2', '3');
INSERT INTO `column_topic` VALUES (10, '2', '4');
INSERT INTO `column_topic` VALUES (11, '2', '6');
INSERT INTO `column_topic` VALUES (12, '2', '7');
INSERT INTO `column_topic` VALUES (13, '2', '11');
INSERT INTO `column_topic` VALUES (14, '3', '13');
INSERT INTO `column_topic` VALUES (15, '3', '8');
INSERT INTO `column_topic` VALUES (16, '3', '6');
INSERT INTO `column_topic` VALUES (17, '3', '4');

-- ----------------------------
-- Table structure for manager
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of manager
-- ----------------------------
INSERT INTO `manager` VALUES (1, '13112808045', '112233', '周华健');
INSERT INTO `manager` VALUES (4, '14111111111', '123456', '李怀瑾');

-- ----------------------------
-- Table structure for recommend
-- ----------------------------
DROP TABLE IF EXISTS `recommend`;
CREATE TABLE `recommend`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `table_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '1为推荐，2为答题',
  `topic_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of recommend
-- ----------------------------
INSERT INTO `recommend` VALUES (1, '1', '1');
INSERT INTO `recommend` VALUES (2, '1', '2');
INSERT INTO `recommend` VALUES (3, '1', '6');
INSERT INTO `recommend` VALUES (4, '1', '7');
INSERT INTO `recommend` VALUES (5, '1', '8');
INSERT INTO `recommend` VALUES (6, '1', '9');
INSERT INTO `recommend` VALUES (8, '2', '8');
INSERT INTO `recommend` VALUES (9, '2', '9');
INSERT INTO `recommend` VALUES (10, '2', '11');
INSERT INTO `recommend` VALUES (11, '2', '6');
INSERT INTO `recommend` VALUES (12, '2', '12');

-- ----------------------------
-- Table structure for reply
-- ----------------------------
DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `answer_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `create_time` timestamp(0) NULL DEFAULT current_timestamp(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reply
-- ----------------------------
INSERT INTO `reply` VALUES (1, '2', '9', '写的不错,very good', '2019-10-31 22:15:32');
INSERT INTO `reply` VALUES (2, '2', '9', '写的很棒', '2019-10-31 22:28:09');
INSERT INTO `reply` VALUES (3, '2', '9', '很好', '2019-11-03 22:12:49');
INSERT INTO `reply` VALUES (4, '1', '9', '写的真棒', '2019-11-03 23:05:03');
INSERT INTO `reply` VALUES (6, '1', '9', '很有帮助', '2019-11-09 17:20:43');
INSERT INTO `reply` VALUES (7, '1', '9', '太厉害了', '2019-11-09 17:20:50');
INSERT INTO `reply` VALUES (8, '3', '11', '给力', '2019-12-31 15:31:30');

-- ----------------------------
-- Table structure for topic
-- ----------------------------
DROP TABLE IF EXISTS `topic`;
CREATE TABLE `topic`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `pv` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0',
  `follow` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0',
  `answer_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0',
  `show_answer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of topic
-- ----------------------------
INSERT INTO `topic` VALUES (1, '11', '暑假带宝宝出游得准备哪写东西？', '从怀孕到生产，再到养娃，再渡过初为人母的这一年多时间后,很多妈妈蠢蠢欲动，想要带娃出去走走。现在娃还小，可以出去吗。如果要出去，需要准备哪些东西呢？有出行经验的妈妈可以在下方回复，和新手妈妈们聊一聊夏天带娃的那些事儿...', '66', '2', '3', '1');
INSERT INTO `topic` VALUES (2, '12', '天气越来越热了，你都是怎么给宝宝穿搭衣服的呢？', '夏天应该怎么给宝宝穿衣服，才能让宝宝不热还舒适呢？', '191', '1', '1', '2');
INSERT INTO `topic` VALUES (3, '11', '你们给宝宝买了哪种餐椅？你觉得哪种餐椅更好用？', '你们给宝宝买了哪种餐椅？你觉得哪种餐椅更好用？你们给宝宝买了哪种餐椅？你觉得哪种餐椅更好用？\n', '6', '0', '0', NULL);
INSERT INTO `topic` VALUES (4, '13', '在不知道宝宝性别的时候，给宝宝准备哪写东西以后不会浪费？', '在不知道宝宝性别的时候，给宝宝准备哪写东西以后不会浪费？在不知道宝宝性别的时候，给宝宝准备哪写东西以后不会浪费？', '9', '0', '0', NULL);
INSERT INTO `topic` VALUES (6, '1', '孕期为了娃健康 这些事准爸爸别做', '怀孕期间的禁忌有很多，不光是孕妇本身要注意，准爸爸需要注意的地方也有很多，以下就是孕期准爸爸不宜做的几件事。', '22', '1', '3', '6');
INSERT INTO `topic` VALUES (7, '11', '你家娃啥性格 看睡姿就知道了', '很多家长都好奇自己家的娃长大了是啥性格，其实性格跟很多因素有关，跟宝宝的睡姿也是有关系的，所以想知道自己娃什么性格，看宝宝睡姿就行了。', '8', '0', '1', NULL);
INSERT INTO `topic` VALUES (8, '11', '清明节孕妇可以出门吗 这些禁忌要知道', '马上就要到清明节了，清明节是我国的传统节日，有很多的习俗和禁忌，那么清明节孕妇可以出门吗？', '8', '1', '0', NULL);
INSERT INTO `topic` VALUES (9, '2', '六一儿童节给孩子选玩具 要注意安全第一', '今天是一年一度的六一儿童节，爸爸妈妈有没有想好送孩子什么呢？很多家长都想要送学龄前儿童玩具，不过要选择什么样的玩具却成了一个难题。', '9', '1', '1', '9');
INSERT INTO `topic` VALUES (10, '9', '陕西某幼儿园给孩子长期服用病毒灵', '孩子身体好好的，幼儿园老师却给他们分发处方药“病毒灵”，所有孩子集体吃。陕西西安一家幼儿园未告知家长便私自给全园孩子服药，引起家长的强烈不满，家长们更担心吃药会对孩子产生副作用。', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (11, '9', '专家回应疑似疫苗致婴儿死亡6大质疑', '根据中国疾控中心提供的最新数据，从2000年到今年12月份，接种乙肝疫苗后死亡的疑似异常反应病例已上报188例。其中，最终确定为疫苗异常反应的18例，近年每年有四五例。', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (12, '2', '单独二胎最新消息 浙江舟山启动单独二孩政策', '单独二胎最新消息，浙江舟山特批启动单独二孩政策。特批政策从2013年11月 19日起实施。', '1', '0', '0', NULL);
INSERT INTO `topic` VALUES (13, '9', '恒天然毒奶粉乌龙 污染细菌并非肉毒杆菌', '恒天然奶粉最新事件，恒天然毒奶粉乌龙。8月初发生的恒天然奶清蛋白粉中检测出的并非肉毒杆菌，不会产生致命毒素。', '1', '0', '0', NULL);
INSERT INTO `topic` VALUES (14, '13', '多1家品牌童装纤维量指标不合格 涉及丽婴房等品牌', '近日，儿童服装屡屡被曝出质量问题，涉及丽婴房等多个知名品牌。据了解，相关部门根据服装的pH值、耐摩擦色牢度、耐洗色牢度、纤维含量及产品标识标志等项目查出，部分品牌童装存在有害物质含量超标、 值和pH纤维含量不合格等问题。', '1', '0', '0', NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nick_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '1' COMMENT '1为男，2为女',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0' COMMENT '1为未孕，2为怀孕，3为有宝贝',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (9, '亚提密斯', 'o7em15MDf4I3iizGHTMtaaccDOD4', '1', 'http://q3d5zbn7j.bkt.clouddn.com/parenting/9_1573205047949', '1');
INSERT INTO `user` VALUES (10, '尘', 'o7em15OqogBN5gdxEHvte8pcy3Ks', '1', 'https://wx.qlogo.cn/mmopen/vi_32/wcTPf9ibxEVXl9o1Ugj7UxHNGaibYHdgXd3O2pian6oVt3SibPdvHoXFxloSjqbVsh5fibBMPbuJxXId3fZoRczOmtw/132', '3');
INSERT INTO `user` VALUES (11, 'え', 'o7em15EwSilxYQzyouKI_8dzEWeo', '1', 'https://wx.qlogo.cn/mmopen/vi_32/fH5ialbibyrWiaW4k9rbIIcgianLyORetddrsjfAre9ialhaJ5rv3YYI4SkHaeW2PQryKZibkMAoEsWZwKB72cpc4eEQ/132', '0');
INSERT INTO `user` VALUES (12, '无名有我~阿涛', 'o7em15DrVbEsFBRiAEkT__7fOVxI', '0', 'https://wx.qlogo.cn/mmopen/vi_32/BYLMwpKY3VrycxWtoVTdD8Hb7DJ2o0pfPdNDMiafEZstqoiazXseaKhHcM25PICUicgv6qGPYJ4DZVMF7icAMTDibnQ/132', '2');

-- ----------------------------
-- Table structure for user_answer
-- ----------------------------
DROP TABLE IF EXISTS `user_answer`;
CREATE TABLE `user_answer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `answer_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL COMMENT '1为点赞，2为收藏',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_answer
-- ----------------------------
INSERT INTO `user_answer` VALUES (1, '9', '1', 1);
INSERT INTO `user_answer` VALUES (2, '9', '4', 1);
INSERT INTO `user_answer` VALUES (3, '9', '6', 1);
INSERT INTO `user_answer` VALUES (5, '10', '1', 1);
INSERT INTO `user_answer` VALUES (6, '10', '1', 2);
INSERT INTO `user_answer` VALUES (7, '9', '1', 2);
INSERT INTO `user_answer` VALUES (9, '9', '9', 1);

-- ----------------------------
-- Table structure for user_topic
-- ----------------------------
DROP TABLE IF EXISTS `user_topic`;
CREATE TABLE `user_topic`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `topic_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_topic
-- ----------------------------
INSERT INTO `user_topic` VALUES (1, '9', '2');
INSERT INTO `user_topic` VALUES (2, '9', '1');
INSERT INTO `user_topic` VALUES (3, '9', '6');
INSERT INTO `user_topic` VALUES (4, '9', '8');
INSERT INTO `user_topic` VALUES (5, '10', '1');
INSERT INTO `user_topic` VALUES (6, '9', '9');

SET FOREIGN_KEY_CHECKS = 1;
