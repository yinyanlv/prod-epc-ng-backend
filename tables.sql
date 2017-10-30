SET FOREIGN_KEY_CHECKS = 0;
SET SQL_MODE = "";

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS catalog_grade_1;
DROP TABLE IF EXISTS catalog_grade_2;
DROP TABLE IF EXISTS catalog_grade_3;
DROP TABLE IF EXISTS catalog_grade_4;
DROP TABLE IF EXISTS catalog_grade_5;

CREATE TABLE user (
    id int(16) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    account varchar(16) NOT NULL,
    username_zh varchar(16) NOT NULL,
    username_en varchar(16) NOT NULL,
    password varchar(16) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO user (account, username_zh, username_en, password) VALUES ("admin", "管理员", "admin", "111111");

# 目录表，一级
CREATE TABLE catalog_grade_1 (
    id int(8) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    code varchar(16) NOT NULL,
    name_zh varchar(64) NOT NULL,
    name_en varchar(64) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO catalog_grade_1 (code, name_zh, name_en) VALUES
("maxus", "上汽大通", "maxus"),
("nio", "蔚来汽车", "nio");

# 目录表，二级
CREATE TABLE catalog_grade_2 (
    id int(8) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    code varchar(16) NOT NULL,
    name_zh varchar(64) NOT NULL,
    name_en varchar(64) NOT NULL,
    img_url varchar(250) NOT NULL,
    parent_code varchar(16) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO catalog_grade_2 (code, name_zh, name_en, img_url, parent_code) VALUES
("D90", "D90", "D90", "http://res2.dev.servision.com.cn/epc/mapping/SV91.png", "maxus");

# 目录表，三级
CREATE TABLE catalog_grade_3 (
    id int(8) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    code varchar(16) NOT NULL,
    name_zh varchar(64) NOT NULL,
    name_en varchar(64) NOT NULL,
    parent_code varchar(16) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO catalog_grade_3 (code, name_zh, name_en, parent_code) VALUES
("A101", "右舵+4X2（两驱）", "Right-Hand Drive+4X2", "D90"),
("A102", "右舵+4X4（四驱）", "Right-Hand Drive+4X4", "D90"),
("A103", "左舵+4X2（两驱）", "Left-Hand Drive+4X2", "D90"),
("A104", "左舵+4X4（四驱）", "Left-Hand Drive+4X4", "D90");

# 目录表，四级
CREATE TABLE catalog_grade_4 (
    id int(8) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    code varchar(16) NOT NULL,
    name_zh varchar(64) NOT NULL,
    name_en varchar(64) NOT NULL,
    parent_code varchar(16) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO catalog_grade_4 (code, name_zh, name_en, parent_code) VALUES
("B201", "旗舰版", "Delux Version", "A101"),
("B202", "精英版", "Flagship Version", "A101"),
("B203", "豪华版", "Leading Version", "A101"),
("B204", "领先版", "Luxury Version", "A101"),
("B205", "旗舰版", "Delux Version", "A102"),
("B206", "精英版", "Flagship Version", "A102"),
("B207", "豪华版", "Leading Version", "A102"),
("B208", "领先版", "Luxury Version", "A102"),
("B209", "旗舰版", "Delux Version", "A103"),
("B210", "精英版", "Flagship Version", "A103"),
("B211", "豪华版", "Leading Version", "A103"),
("B212", "领先版", "Luxury Version", "A103"),
("B213", "旗舰版", "Delux Version", "A104"),
("B214", "精英版", "Flagship Version", "A104"),
("B215", "豪华版", "Leading Version", "A104"),
("B216", "领先版", "Luxury Version", "A104");

# 目录表，五级
CREATE TABLE catalog_grade_5 (
    id int(8) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    code varchar(16) NOT NULL,
    name_zh varchar(64) NOT NULL,
    name_en varchar(64) NOT NULL,
    parent_code varchar(16) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO catalog_grade_5 (code, name_zh, name_en, parent_code) VALUES
("C301", "6AT 邦奇", "6AT PUNCH", "B201"),
("C302", "6MT 上汽齿", "6MT SAGW", "B201"),
("C303", "6MT 戴莫斯", "6MT Demos", "B201");