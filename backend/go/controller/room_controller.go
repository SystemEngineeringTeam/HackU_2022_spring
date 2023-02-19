package controller

import (
	"fmt"
	"strings"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/lib"
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
)

func RoomCreate(room models.Room) models.Room {
	db := lib.SqlConnect()

	room.MemberAmount = 1
	room.IsOpen = true
	room.LastUpdate = GetTime()

	if err := db.Create(&room).Error; err != nil {
		text := strings.Split(err.Error(), ": ")
		panic(text[1])
	}

	fmt.Println("Creating Room Is Success!!")
	return (room)
}

func RoomGet(id []string) []models.Room {
	var rooms []models.Room
	db := lib.SqlConnect()
	for i, v := range id {
		var room models.Room
		var members []models.Member
		if err := db.Where("id = ?", v).First(&room).Error; err != nil {
			panic(err.Error())
		}
		rooms = append(rooms, room)
		db.Where("room_id = ?", v).Find(&members)
		rooms[i].Members = members
	}
	fmt.Println("Getting Room Is Success!!")
	return (rooms)
}
