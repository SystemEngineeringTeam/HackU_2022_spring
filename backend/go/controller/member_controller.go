package controller

import (
	"fmt"
	"strconv"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/lib"
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
	"github.com/gin-gonic/gin"
)

// メンバーの追加 r.POST("/api/room/:roomId/member/", controller.PostAddMemberData)
func AddMemberData(reqjson models.Member, getroom models.Room) models.Member {

	// データベースに接続
	db := lib.SqlConnect()

	// 部屋がメンバーを募集しているかどうかの判定
	var isOpen bool
	db.Where("id = ?", reqjson.RoomId).Find(&isOpen)
	// getroomのIsOpenがfalseの場合、エラー
	if !isOpen {
		panic("This Room Is No Longer Wanted")
	}

	// タグ情報を追加（最初なのでなし）
	// reqjson.Tag = &[]string{"nil"}[0]

	// レコードを追加
	if err := db.Create(&reqjson).Error; err != nil {
		panic(err.Error())
	}

	// 最終更新時間を今の時間に変更、memberAmountを増やす
	var room models.Room

	room.MemberAmount = getroom.MemberAmount + 1
	RoomChange(room, getroom)

	// 追加できたことを知らせる
	fmt.Println("Created MemberData.")

	// 追加したメンバーデータを返す
	return reqjson
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
		panic(err.Error())
	}

	// 最終更新時間を今の時間に変更、memberAmountを増やす
	var room models.Room
	getroom := RoomGet(strconv.Itoa(member.RoomId))
	room.MemberAmount = getroom.MemberAmount - 1
	RoomChange(room, getroom)

	// 削除できたことを示すメッセージを返り値として渡す
	return gin.H{"message": "MemberData could be deleted."}
}

// メンバーの概要変更 r.PUT("/api/room/member/:userId/", controller.PutChangeMemberData)
func ChangeMemberData(memberId int, reqjson models.Member) *models.Member {

	// データベースに接続
	db := lib.SqlConnect()

	// 変更するメンバーデータを取得
	var member *models.Member
	db.Where("id = ?", memberId).Find(&member)

	// レコードを変更
	if err := db.Model(&member).Updates(reqjson).Error; err != nil {
		panic(err.Error())
	}

	// 最終更新時間を今の時間に変更
	var room models.Room
	getroom := RoomGet(strconv.Itoa(member.RoomId))
	RoomChange(room, getroom)

	// 成功:メンバーデータを返す（変更しなかった部分も含め、全てのメンバーデータが返される）
	return member
}

// 指定された部屋のメンバー取得
func FindMemberData(roomId int) []*models.Member {
	// 返り値を代入する変数宣言
	members := []*models.Member{}

	// データベースに接続
	db := lib.SqlConnect()

	// 渡されたroomIdに所属するメンバーを全員取得
	db.Where("room_id = ?", roomId).Find(&members)

	return members
}
