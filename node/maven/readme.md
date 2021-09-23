- 全栈 node + ts
  BATJTMD GO
- 数据库
  端口通信 3306 -> 3000 
  node fs http 比较 复杂 慢

- MVC
  数据库 -> Model -> Control => Router(API)
  post
  someone -> http -> req(url) -> router -> controller -> Model -> mysql2(翻译)

- posts add 
  controller -> restful 路径
  mysql post POST /posts 
  - router 在哪里
  - controller 


CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

- mysql 先建表 再操作 SQL
  mongodb 可以先存数据再建表 NOSQL