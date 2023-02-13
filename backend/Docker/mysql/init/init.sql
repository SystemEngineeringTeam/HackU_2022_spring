/* CREATE DATABASE */
CREATE DATABASE data_sets;

/* CREATE TABLE */
CREATE TABLE data_sets.rooms( /* 部屋データ */
    room_id int NOT NULL AUTO_INCREMENT, /* 部屋ID */
    room_name varchar(20), /* 部屋の名前 */
    member_amount int, /* 参加者の総数 */
    summary varchar(50), /* 部屋の概要 */
    is_open boolean, /* 参加者の受付状況 */
    last_update varchar(15), /* 最終更新日時 */
    room_parent int, /* 親部屋のID（この部屋が親の場合はnull) */
    room_maker varchar(15), /* 部屋作成者の名前 */
    primary key (roomId)
) ENGINE = InnoDB;

CREATE TABLE data_sets.users( /* ユーザデータ */
    user_id int NOT NULL AUTO_INCREMENT, /* ユーザID */
    user_name varchar(15), /* ユーザ名 */
    registration_date varchar(15), /* 登録した日時 */
    comment varchar(30), /* 備考欄 */
    primary key (userId)
) ENGINE = InnoDB;

CREATE TABLE data_sets.room_user_relations( /* 部屋と参加しているユーザの関係性 */
    room_id int NOT NULL,
    user_id int NOT NULL,
    primary key (roomId, userId)
) ENGINE = InnoDB;
