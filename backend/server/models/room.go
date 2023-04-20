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

func GetRooms(id []string) ([]Room, error) {
	db := db.GetDB()
	rs := []Room{}
	var err error

	for i, v := range id {
		r := Room{}
		ms := []Member{}
		err = db.Where("id = ?", v).First(&r).Error
		if err != nil {
			log.Fatal(err)
			return rs, err
		}

		rs = append(rs, r)
		db.Where("room_id = ?", v).Find(&ms)
		rs[i].Members = ms
	}

	return rs, err
}

func FindByRoomID(id string) (Room, error) {
	db := db.GetDB()
	r := Room{}
	ms := []Member{}
	err := db.Where("id = ?", id).First(&r).Error
	if err != nil {
		log.Fatal(err)
		return r, err
	}

	db.Where("room_id = ?", id).Find(&ms)
	r.Members = ms
	return r, err
}

func FindIsOpenByRoomID(id string) bool {
	db := db.GetDB()
	r := Room{}
	err := db.Where("id = ?", id).First(&r).Error
	if err != nil {
		log.Fatal(err)
		return false
	}

	res := *r.IsOpen

	return res
}

func CreateRoom(r Room) (Room, error) {
	db := db.GetDB()
	ptrue := &[]bool{true}[0]
	ptag := &[]string{""}[0]

	r.MemberAmount = 0
	r.IsOpen = ptrue
	r.LastUpdate = utils.GetCurrentTime()
	r.Tags = ptag

	err := db.Create(&r).Error
	if err != nil {
		log.Fatal(err)
		return r, err
	}

	return r, err
}

func UpdateRoom(reqR, r Room) (Room, error) {
	db := db.GetDB()
	reqR.LastUpdate = utils.GetCurrentTime()
	err := db.Model(&r).Updates(reqR).Error
	if err != nil {
		log.Fatal(err)
		return r, err
	}

	return r, err
}

func DeleteRoom(r Room) (Room, error) {
	db := db.GetDB()
	ms := []Member{}

	err := db.Where("room_id = ?", r.ID).First(&ms).Error
	if err != nil {
		log.Fatal(err)
		return r, err
	}
	db.Where("room_id = ?", r.ID).Find(&ms)
	db.Delete(&ms)

	err = db.Delete(&r).Error
	if err != nil {
		log.Fatal(err)
		return r, err
	}

	return r, err
}
