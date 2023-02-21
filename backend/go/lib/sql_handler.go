package lib

import (
	"fmt"
	"os"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func SqlConnect() (database *gorm.DB) {
	USER := os.Getenv("MYSQL_USER")
	PASS := os.Getenv("MYSQL_PASSWORD")
	PROTOCOL := os.Getenv("MYSQL_PROTOCOL")
	DBNAME := os.Getenv("MYSQL_DBNAME")

	dsn := USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME + "?charset=utf8&parseTime=true&loc=Asia%2FTokyo"
	dialector := mysql.Open(dsn)

	var db *gorm.DB
	var err error

	if db, err = gorm.Open(dialector); err != nil {
		db = connect(dialector, 10)
	}
	fmt.Println("db connected!!")

	return db
}

func connect(dialector gorm.Dialector, count uint) *gorm.DB {
	var err error
	var db *gorm.DB
	if db, err = gorm.Open(dialector); err != nil {
		if count > 1 {
			time.Sleep(time.Second * 2)
			count--
			fmt.Printf("retry... count:%v\n", count)
			connect(dialector, count)
		}
		panic(err.Error())
	}
	return (db)
}
