package main

import (
	// "github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/router"
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/lib"
	"gorm.io/gorm"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
)

func main() {
	// router.Init()
	db := lib.SqlConnect()
	print(db)
}


func GetBuildingName(building_name string, db *gorm.DB) []*models.Room {
	room := []*models.Room{}
	// building_nameが空文字だった時

	db.Where("room_name LIKE ?", "%"+"test"+"%").Find(&room)

	return room
}
