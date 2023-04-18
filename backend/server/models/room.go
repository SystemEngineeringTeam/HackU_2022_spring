package models

import (
	"log"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/db"
)

type Room struct {
	ID           int      `json:"roomId"`
	RoomName     string   `json:"roomName"`
	MemberAmount int      `json:"memberAmount"`
	Summary      *string  `json:"summary"`
	IsOpen       *bool    `json:"isOpen"`
	LastUpdate   string   `json:"lastUpdate"`
	Members      []Member `json:"members"`
	Tags         *string  `json:"tags"`
	RoomMaker    string   `json:"roomMaker"`
}

func GetRooms(id []string) []Room {
	var rooms []Room
	db := db.GetDB()
	for i, v := range id {
		var room Room
		var members []Member
		if err := db.Where("id = ?", v).First(&room).Error; err != nil {
			panic(err.Error())
		}
		rooms = append(rooms, room)
		db.Where("room_id = ?", v).Find(&members)
		rooms[i].Members = members
	}
	// fmt.Println("Getting Room Is Success!!")
	return (rooms)
}

func FindByRoomID(id string) Room {
	db := db.GetDB()
	var r Room
	var m []Member
	if err := db.Where("id = ?", id).First(&r).Error; err != nil {
		log.Fatal(err)
	}
	db.Where("room_id = ?", id).Find(&m)
	r.Members = m
	// fmt.Println("Getting Room Is Success!!")
	return r
}

func CreateRoom(room models.Room) models.Room {
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

func ChangeRoom(req, room models.Room) models.Room {
	db := lib.SqlConnect()
	req.LastUpdate = GetTime()
	if err := db.Model(&room).Updates(req).Error; err != nil {
		panic(err.Error())
	}
	fmt.Println("Changing Room Is Success!!")
	return (room)
}

func DeleteRoom(room models.Room) models.Room {
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
