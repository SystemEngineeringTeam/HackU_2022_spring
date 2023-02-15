package controller

import (
	"fmt"
	"log"
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
	var reqjson models.Member
	if err := c.BindJSON(&reqjson); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// URLパスからroomIdを取得
	roomId, _ := strconv.Atoi(c.Param("roomId"))

	// データベースに接続
	db := lib.SqlConnect()

	// ユーザデータを追加
	reqjson.RoomId = roomId
	reqjson.Tag = ""

	// レコードを追加
	if err := db.Create(&reqjson).Error; err != nil {
		log.Fatal(err)
	}

	// 追加できたことを知らせる
	fmt.Println("created User")

	// 追加後のメンバーデータを返す
	c.JSON(http.StatusOK, reqjson)
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
