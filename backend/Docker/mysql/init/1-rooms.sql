CREATE DATABASE data_sets;

/* CREATE TABLE */
CREATE TABLE data_sets.rooms( 
    id INT NOT NULL AUTO_INCREMENT, /* 部屋ID */
    room_name VARCHAR(20), /* 部屋の名前 */
    member_amount INT, /* 参加者の総数 */
    summary VARCHAR(50), /* 部屋の概要 */
    is_open boolean, /* 参加者の受付状況 */
    last_update VARCHAR(25), /* 最終更新日時 */
    tags VARCHAR(1023),
    room_maker VARCHAR(15), /* 部屋作成者の名前 */
    PRIMARY KEY (id)
) ENGINE = InnoDB;