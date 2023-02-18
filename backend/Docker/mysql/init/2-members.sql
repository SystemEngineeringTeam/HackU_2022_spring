/* CREATE TABLE */
CREATE TABLE data_sets.members( /* ユーザデータ */
    id INT NOT NULL AUTO_INCREMENT, /* ユーザID */
    room_id INT NOT NULL, /* ユーザの所属している部屋ID */
    member_name VARCHAR(15), /* ユーザ名 */
    comment VARCHAR(30), /* 備考欄 */
    tag VARCHAR(15),
    PRIMARY KEY (id),
    FOREIGN KEY room (room_id) REFERENCES rooms (id) /* 外部キーの生成 */
) ENGINE = InnoDB; 