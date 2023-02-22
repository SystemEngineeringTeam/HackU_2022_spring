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

func RoomsGet(id []string) []models.Room {
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

func RoomGet(id string) models.Room {
	db := lib.SqlConnect()
	var room models.Room
	var members []models.Member
	if err := db.Where("id = ?", id).First(&room).Error; err != nil {
		panic(err.Error())
	}
	db.Where("room_id = ?", id).Find(&members)
	room.Members = members
	fmt.Println("Getting Room Is Success!!")
	return (room)
}

func RoomChange(req, room models.Room) models.Room {
	db := lib.SqlConnect()
	req.LastUpdate = GetTime()
	if err := db.Model(&room).Updates(req).Error; err != nil {
		panic(err.Error())
	}
	fmt.Println("Changing Room Is Success!!")
	return (room)
}

func RoomDelete(room models.Room) models.Room {
	db := lib.SqlConnect()
	var members []models.Member
	if err := db.Where("room_id = ?", room.ID).First((&members)).Error; err == nil {
		db.Delete(&members)
	}
	db.Delete(&room)
	fmt.Println("Deleting Room Is Success!!")
	return (room)
}
