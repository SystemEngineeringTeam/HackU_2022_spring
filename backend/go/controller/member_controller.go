package controller

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/lib"
	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
	"github.com/gin-gonic/gin"
)

// メンバーの追加 r.POST("/api/room/:roomId/member/", controller.AddMember)
func AddMember(c *gin.Context) {
	fmt.Println("AddMember")

	// 送られてきたjsonを取得
	var json models.Member
	c.BindJSON(&json)

	// URLパスからroomIdを取得
	roomId, _ := strconv.Atoi(c.Param("roomId"))

	// データベースに接続
	db := lib.SqlConnect()

	// レコードの作成
	user := models.Member{ID: 1, RoomId: roomId, MemberName: json.MemberName, Comment: json.Comment, Tag: ""}

	// レコードを追加（IDはAUTO_INCREMENTなので除外）
	db.Omit("ID").Create(&user)

	// 追加できたことを知らせる
	fmt.Println("created User")

	// 追加後のメンバーデータを返す
	c.JSON(http.StatusOK, json)
}

// メンバーの削除 r.DELETE("/api/room/:roomId/member/:userId/", controller.DeleteMember)
func DeleteMember(c *gin.Context) {
	// c.JSON(http.StatusOK, gin.H{
	// 	"message": "DeleteMember",
	// })
	fmt.Println("DeleteMember")
}

// メンバーの概要変更 r.PUT("/api/room/:roomId/member/:userId/", controller.ChangeMemberData)
func ChangeMemberData(c *gin.Context) {
	// c.JSON(http.StatusOK, gin.H{
	// 	"message": "ChangeMemberData",
	// })
	fmt.Println("ChangeMemberData")
}

// テスト
func Test(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "ChangeMemberData",
	})
	// fmt.Println("ChangeMemberData")
}
