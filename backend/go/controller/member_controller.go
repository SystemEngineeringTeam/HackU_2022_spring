package controller

import (
	"fmt"
	"strconv"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/lib"
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
)

// メンバーの追加 r.POST("/api/room/:roomId/member/", controller.PostAddMemberData)
func AddMemberData(reqjson models.Member) (string, models.Member) {

	// データベースに接続
	db := lib.SqlConnect()

	// タグ情報を追加（最初なのでなし）
	reqjson.Tag = ""

	// レコードを追加
	if err := db.Create(&reqjson).Error; err != nil {
		return "Error", reqjson
	}

	// 最終更新時間を今の時間に変更
	var room models.Room
	RoomChange(strconv.Itoa(reqjson.RoomId), room)

	// 追加できたことを知らせる
	fmt.Println("Created MemberData.")

	// 追加したメンバーデータを返す
	return "Success", reqjson
}

// メンバーの削除 r.DELETE("/api/room/member/:userId/", controller.DeletExitMemberData)
func ExitMemberData(memberId int) string {

	// データベースに接続
	db := lib.SqlConnect()

	// 削除するメンバーデータを取得
	var member *models.Member
	db.Where("id = ?", memberId).Find(&member)

	// レコードを削除
	if err := db.Unscoped().Delete(&member).Error; err != nil {
		// 削除できなかったことを示すメッセージを返り値として渡す
		return ("Erorr")
	}

	// 最終更新時間を今の時間に変更
	var room models.Room
	RoomChange(strconv.Itoa(member.RoomId), room)

	// 削除できたことを示すメッセージを返り値として渡す
	return ("Success")
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
		// 失敗:メンバーデータを返す（変更したかった部分のみのメンバーデータが返される）
		return member
	}

	// 最終更新時間を今の時間に変更
	var room models.Room
	RoomChange(strconv.Itoa(member.RoomId), room)

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
