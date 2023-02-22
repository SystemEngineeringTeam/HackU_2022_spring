package controller

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
	"github.com/gin-gonic/gin"
)

// メンバーの追加 r.POST("/api/room/:roomId/member/", controller.AddMember)
func PostAddMemberData(c *gin.Context) {

	// 送られてきたjsonを取得
	var reqjson models.Member
	if err := c.BindJSON(&reqjson); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// URLパスからroomIdを取得
	roomId, _ := strconv.Atoi(c.Param("roomId"))

	// roomIdを送られてきたjsonに追加
	reqjson.RoomId = roomId

	// 追加後のメンバーデータを返す
	defer ErrorResponse(c)
	c.JSON(http.StatusOK, AddMemberData(reqjson))
}

// メンバーの削除 r.DELETE("/api/room/member/:memberId/", controller.DeleteMember)
func DeletExitMemberData(c *gin.Context) {

	// URLパスからmemberIdを取得
	memberId, _ := strconv.Atoi(c.Param("memberId"))

	// メンバーデータを削除する関数に値を渡して、その処理結果を返す
	defer ErrorResponse(c)
	c.JSON(http.StatusOK, ExitMemberData(memberId))
}

// メンバーの概要変更 r.PUT("/api/room/member/:memberId/", controller.ChangeMemberData)
func PutChangeMemberData(c *gin.Context) {

	// 送られてきたjsonを取得
	var reqjson models.Member
	if err := c.BindJSON(&reqjson); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	fmt.Println(reqjson)

	// URLパスからmemberIdを取得して送られてきたjsonに追加
	memberId, _ := strconv.Atoi(c.Param("memberId"))

	// メンバーデータを変更する関数に値を渡して、その処理結果を返す
	defer ErrorResponse(c)
	c.JSON(http.StatusOK, ChangeMemberData(memberId, reqjson))
}

// テスト
func ResTest(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "ChangeMemberData"})
}
