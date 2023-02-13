CREATE DATABASE data_sets;

/* CREATE TABLE */
CREATE TABLE IF NOT EXISTS data_sets.rooms( 
    id INT NOT NULL AUTO_INCREMENT, /* 部屋ID */
    room_name VARCHAR(20), /* 部屋の名前 */
    member_amount INT, /* 参加者の総数 */
    summary VARCHAR(50), /* 部屋の概要 */
    is_open boolean, /* 参加者の受付状況 */
    last_update VARCHAR(15), /* 最終更新日時 */
    room_parent int, /* 親部屋のID（この部屋が親の場合はnull) */
    room_maker VARCHAR(15), /* 部屋作成者の名前 */
) ENGINE = InnoDB;

/* INSERT QUERY */
-- INSERT INTO
--     data_sets.rooms(id, room_name, member_amount, summary, is_open, last_update, room_parent, room_maker)
-- VALUES
--     (2, "test", 10, "3000円以内がいい", true, "2022-01-03", 1, "田中");