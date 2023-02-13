CREATE TABLE IF NOT EXISTS data_sets.members( /* ユーザデータ */
    id INT NOT NULL AUTO_INCREMENT, /* ユーザID */
    room_id BIGINT(20) UNSIGNED NOT NULL,
    user_name VARCHAR(15), /* ユーザ名 */
    registration_date VARCHAR(15), /* 登録した日時 */
    comment VARCHAR(30), /* 備考欄 */
    
) ENGINE = InnoDB;
