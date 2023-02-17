package controller

import (
	"fmt"
	"log"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/lib"
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
)

func RoomCreate(room models.Room) models.Room {
	db := lib.SqlConnect()

	room.MemberAmount = 1
	room.IsOpen = true
	room.LastUpdate = lib.GetTime()

	if err := db.Create(&room).Error; err != nil {
		log.Fatal(err)
	}
	fmt.Println("Creating Room Is Success!!")
	return (room)
}

func RoomGet(id []string) []models.Room {

	var rooms []models.Room
	db := lib.SqlConnect()
	for _, v := range id {
		var room models.Room
		db.Where("id = ?", v).Find(&room)
		rooms = append(rooms, room)
	}
	fmt.Println("Getting Room Is Success!!")
	return (rooms)
}
