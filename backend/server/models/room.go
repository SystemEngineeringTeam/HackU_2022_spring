package models

import "github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/db"

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

func RoomsGet(id []string) []Room {
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
		panic(err.Error())
	}
	db.Where("room_id = ?", id).Find(&m)
	r.Members = m
	// fmt.Println("Getting Room Is Success!!")
	return r
}
