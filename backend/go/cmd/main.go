package main

import (
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/router"
	"gorm.io/gorm"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
)

func main() {
	//本番はrouter.Init()のみでいい
	router.Init()

	// データベース接続確認
	//db connected!!　とコンソールに表示されたら接続成功
	// db := lib.SqlConnect()

	// データベースの値をとれているか確認
	// &{2 test 10 3000円以内がいい true 2022-01-03 1 田中 []} と表示されれば成功
	// 一番最後のから配列は member テーブルの情報が入るようにしたい
	// struct.go に for文をまわして格納する用の関数を作るのが良さそう
	// res := GetRooms(db)
	// fmt.Println(res[0])

	// &{1, 2, 山田太郎, 2022-01-03, 23時まで} と表示されれば成功
	// res2 := GetMembers(db)
	// fmt.Println(res2[0])
}

// テスト用の関数
func GetRooms(db *gorm.DB) []*models.Room {
	room := []*models.Room{}
	db.Find(&room)
	return room
}

func GetMembers(db *gorm.DB) []*models.Member {
	member := []*models.Member{}
	db.Find(&member)
	return member
}
