DROP TABLE IF EXISTS user;

CREATE TABLE user (
    id int(16) PRIMARY KEY AUTO_INCREMENT NOT NULL
    username varchar(16) NOT NULL,
    password varchar(16) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;