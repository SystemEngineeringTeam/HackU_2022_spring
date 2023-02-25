package controller

import (
	"fmt"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/lib"
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
)

func RoomCreate(room models.Room) models.Room {
	db := lib.SqlConnect()
	ptrue := &[]bool{true}[0]
	ptag := &[]string{""}[0]

	room.MemberAmount = 0
	room.IsOpen = ptrue
	room.LastUpdate = GetTime()
	room.Tags = ptag

	if err := db.Create(&room).Error; err != nil {
		panic(err.Error())
	}

	fmt.Println("Creating Room Is Success!!")
	return (room)
}

func RoomsGet(id []string) []models.Room {
	var rooms []models.Room
	db := lib.SqlConnect()
	i := 0
	for _, v := range id {
		var room models.Room
		var members []models.Member
		if err := db.Where("id = ?", v).First(&room).Error; err == nil {
			rooms = append(rooms, room)
			db.Where("room_id = ?", v).Find(&members)
			fmt.Println(rooms[i])
			rooms[i].Members = members
			i++
		}
	}
	if rooms == nil {
		panic("This Room Does Not Exist")
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
	if db.Where("room_id = ?", room.ID).First(&members).Error == nil {
		db.Where("room_id = ?", room.ID).Find(&members)
		db.Delete(&members)
	}
	if err := db.Delete(&room).Error; err != nil {
		panic(err.Error())
	}
	fmt.Println("Deleting Room Is Success!!")
	return (room)
}
