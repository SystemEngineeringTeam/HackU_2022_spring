package models

import (
	"log"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/db"
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/utils"
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

func CreateRoom(r Room) Room {
	db := db.GetDB()
	ptrue := &[]bool{true}[0]
	ptag := &[]string{""}[0]

	r.MemberAmount = 0
	r.IsOpen = ptrue
	r.LastUpdate = utils.GetCurrentTime()
	r.Tags = ptag

	if err := db.Create(&r).Error; err != nil {
		panic(err.Error())
	}
	return r
}

func ChangeRoom(req, r Room) Room {
	db := db.GetDB()
	req.LastUpdate = utils.GetCurrentTime()
	if err := db.Model(&r).Updates(req).Error; err != nil {
		panic(err.Error())
	}
	return (r)
}

func DeleteRoom(r Room) Room {
	db := db.GetDB()
	var members []Member
	if db.Where("room_id = ?", r.ID).First(&members).Error == nil {
		db.Where("room_id = ?", r.ID).Find(&members)
		db.Delete(&members)
	}
	if err := db.Delete(&r).Error; err != nil {
		panic(err.Error())
	}
	return r
}
