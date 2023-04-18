package db

import (
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/config"
)

var db *gorm.DB

func init() {
	var err error
	c := config.GetMysqlConfig()
	dsn := c.GetString("mysql.user") + ":" + c.GetString("mysql.password") + "@" + c.GetString("mysql.protocol") + "/" + c.GetString("mysql.dbname") + "?charset=utf8&parseTime=true&loc=Asia%2FTokyo"
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
}

func GetDB() *gorm.DB {
	return db
}
