package models

import (
	"errors"
	"log"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/db"
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/utils"
)

type Member struct {
	ID         int     `json:"memberId"`
	RoomId     string  `json:"roomId"`
	MemberName string  `json:"name"`
	Comment    *string `json:"comment"`
	Tag        *string `json:"tag"`
}

func AddMember(m Member) (Member, error) {
	db := db.GetDB()
	reqR := Room{}
	isOpen := FindIsOpenByRoomID(m.RoomId)
	r, err := FindByRoomID(m.RoomId)
	if err != nil {
		log.Fatal(err)
		return m, err
	}

	if !isOpen {
		log.Fatal("This Room Is No Longer Wanted")
		return m, errors.New("This Room Is No Longer Wanted")

	}
	err = db.Create(&m).Error
	if err != nil {
		log.Fatal(err)
		return m, err
	}

	reqR.MemberAmount = r.MemberAmount + 1
	UpdateRoom(reqR, r)

	return m, err
}

// 指定された部屋のメンバー取得
func FindMemberByRoomId(rId int) []*Member {
	db := db.GetDB()
	ms := []*Member{}

	db.Where("room_id = ?", rId).Find(&ms)

	return ms
}

// メンバーの概要変更 r.PUT("/api/room/member/:userId/", controller.PutChangeMemberData)
func UpdateMember(memberId int, m Member) (Member, error) {
	db := db.GetDB()
	resM := Member{}

	db.Where("id = ?", memberId).Find(&resM)

	err := db.Model(&resM).Updates(m).Error
	if err != nil {
		log.Fatal(err)
		return resM, err
	}

	// 最終更新時間を今の時間に変更
	reqR := Room{}
	r, err := FindByRoomID(resM.RoomId)
	if err != nil {
		log.Fatal(err)
		return resM, err
	}

	reqR.LastUpdate = utils.GetCurrentTime()
	UpdateRoom(reqR, r)

	return resM, err
}

// メンバーの削除 r.DELETE("/api/room/member/:userId/", controller.DeletExitMemberData)
func DeleteMember(mId int) (string, error) {
	db := db.GetDB()
	m := Member{}

	db.Where("id = ?", mId).Find(&m)
	err := db.Unscoped().Delete(&m).Error
	if err != nil {
		log.Fatal(err)
		return "Member could not be deleted.", err
	}

	room := Room{}
	r, err := FindByRoomID(m.RoomId)
	if err != nil {
		log.Fatal(err)
		return "Member could not be deleted.", err
	}

	room.MemberAmount = r.MemberAmount - 1
	UpdateRoom(room, r)

	return "Member could be deleted.", err
}
