package controller

import (
	"fmt"
	"log"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/lib"
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
)

// メンバーの追加 r.POST("/api/room/:roomId/member/", controller.PostAddMemberData)
func AddMemberData(reqjson models.Member) models.Member {

	// データベースに接続
	db := lib.SqlConnect()

	// タグ情報を追加（最初なのでなし）
	reqjson.Tag = ""

	// レコードを追加
	if err := db.Create(&reqjson).Error; err != nil {
		log.Fatal(err)
	}

	// 追加できたことを知らせる
	fmt.Println("Created MemberData.")

	// 追加したユーザーデータを返す
	return (reqjson)
}

// メンバーの削除 r.DELETE("/api/room/:roomId/member/:userId/", controller.DeletExitMemberData)
func ExitMemberData(roomId int, memberId int) string {

	// データベースに接続
	// db := lib.SqlConnect()

	// レコードを削除

	// 削除できたことを知らせる
	fmt.Println("Deleted MemberData.")

	// レスポンスに書き込むメッセージを返す
	return ("SuccessMessage: Deleted MemberData")
}

// メンバーの概要変更 r.PUT("/api/room/:roomId/member/:userId/", controller.PutChangeMemberData)
// メンバーの概要変更 r.PUT("/api/room/member/:userId/", controller.PutChangeMemberData)
func ChangeMemberData(reqjson models.Member) models.Member {

	// データベースに接続
	// db := lib.SqlConnect()

	// レコードを変更

	// 変更できたことを知らせる
	fmt.Println("Changed MemberData.")

	// 変更したユーザーデータを返す
	return (reqjson)
}
