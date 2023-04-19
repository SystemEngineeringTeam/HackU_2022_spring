package models

import (
	"log"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/db"
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/utils"
	"github.com/gin-gonic/gin"
)

type Member struct {
	ID         int     `json:"memberId"`
	RoomId     string  `json:"roomId"`
	MemberName string  `json:"name"`
	Comment    *string `json:"comment"`
	Tag        *string `json:"tag"`
}

func AddMember(m Member) Member {
	db := db.GetDB()
	reqR := Room{}
	r := FindByRoomID(m.RoomId)
	isOpen := FindIsOpenByRoomID(m.RoomId)

	if !isOpen {
		log.Fatal("This Room Is No Longer Wanted")
	}
	if err := db.Create(&m).Error; err != nil {
		log.Fatal(err)
	}

	reqR.MemberAmount = r.MemberAmount + 1
	UpdateRoom(reqR, r)

	return m
}

// 指定された部屋のメンバー取得
func FindMemberByRoomId(rId int) []*Member {
	db := db.GetDB()
	ms := []*Member{}

	db.Where("room_id = ?", rId).Find(&ms)

	return ms
}

// メンバーの削除 r.DELETE("/api/room/member/:userId/", controller.DeletExitMemberData)
func DeleteMember(mId int) gin.H {
	db := db.GetDB()
	m := Member{}

	db.Where("id = ?", mId).Find(&m)
	if err := db.Unscoped().Delete(&m).Error; err != nil {
		log.Fatal(err)
	}

	room := Room{}
	r := FindByRoomID(m.RoomId)
	room.MemberAmount = r.MemberAmount - 1
	UpdateRoom(room, r)

	return gin.H{"message": "MemberData could be deleted."}
}

// メンバーの概要変更 r.PUT("/api/room/member/:userId/", controller.PutChangeMemberData)
func UpdateMember(memberId int, m Member) Member {
	db := db.GetDB()
	resM := Member{}

	db.Where("id = ?", memberId).Find(&resM)

	if err := db.Model(&resM).Updates(m).Error; err != nil {
		log.Fatal(err)
	}

	// 最終更新時間を今の時間に変更
	reqR := Room{}
	r := FindByRoomID(resM.RoomId)
	reqR.LastUpdate = utils.GetCurrentTime()
	UpdateRoom(reqR, r)

	return resM
}
