package models

import (
	"fmt"
	"log"
	"strconv"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/db"
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
	r := FindByRoomID(m.RoomId)
	isOpen := FindIsOpenByRoomID(m.RoomId)
	if !isOpen {
		log.Fatal("This Room Is No Longer Wanted")
	}
	if err := db.Create(&m).Error; err != nil {
		log.Fatal(err)
	}
	
	var room Room

	room.MemberAmount = r.MemberAmount + 1
	UpdateRoom(room, r)

	// 追加できたことを知らせる
	fmt.Println("Created MemberData.")

	// 追加したメンバーデータを返す
	return m
}

// 指定された部屋のメンバー取得
func FindMemberByRoomId(roomId int) []*Member {
	// 返り値を代入する変数宣言
	members := []*Member{}

	// データベースに接続
	db := lib.SqlConnect()

	// 渡されたroomIdに所属するメンバーを全員取得
	db.Where("room_id = ?", roomId).Find(&members)

	return members
}

// メンバーの削除 r.DELETE("/api/room/member/:userId/", controller.DeletExitMemberData)
func ExitMemberData(memberId int) gin.H {
	// データベースに接続
	db := lib.SqlConnect()

	// 削除するメンバーデータを取得
	var member *models.Member
	db.Where("id = ?", memberId).Find(&member)

	// レコードを削除
	if err := db.Unscoped().Delete(&member).Error; err != nil {
		// 削除できなかったことを示す
		log.Fatal(err)
	}

	// 最終更新時間を今の時間に変更、memberAmountを増やす
	var room models.Room
	r := RoomGet(strconv.Itoa(member.RoomId))
	room.MemberAmount = r.MemberAmount - 1
	RoomChange(room, r)

	// 削除できたことを示すメッセージを返り値として渡す
	return gin.H{"message": "MemberData could be deleted."}
}

// メンバーの概要変更 r.PUT("/api/room/member/:userId/", controller.PutChangeMemberData)
func UpdateMember(memberId int, m Member) *Member {

	// データベースに接続
	db := lib.SqlConnect()

	// 変更するメンバーデータを取得
	var member *models.Member
	db.Where("id = ?", memberId).Find(&member)

	// レコードを変更
	if err := db.Model(&member).Updates(m).Error; err != nil {
		log.Fatal(err)
	}

	// 最終更新時間を今の時間に変更
	var room models.Room
	r := RoomGet(strconv.Itoa(member.RoomId))
	RoomChange(room, r)

	// 成功:メンバーデータを返す（変更しなかった部分も含め、全てのメンバーデータが返される）
	return member
}
