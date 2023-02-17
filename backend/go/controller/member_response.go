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
	fmt.Println("AddMember")

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
	c.JSON(http.StatusOK, AddMemberData(reqjson))
}

// メンバーの削除 r.DELETE("/api/room/:roomId/member/:memberId/", controller.DeleteMember)
func DeletExitMemberData(c *gin.Context) {
	fmt.Println("DeleteMember")

	// URLパスからmemberIdを取得
	memberId, _ := strconv.Atoi(c.Param("memberId"))

	// メンバーデータを削除する関数に値を渡して、その処理結果を知らせる
	if ExitMemberData(memberId) == "Success" {
		c.String(http.StatusOK, "MemberData could be deleted.")
	} else {
		c.String(http.StatusBadRequest, "MemberData could not be deleted because there is no corresponding MemberData.")
	}

}

// メンバーの概要変更 r.PUT("/api/room/:roomId/member/:memberId/", controller.ChangeMemberData)
func PutChangeMemberData(c *gin.Context) {
	fmt.Println("ChangeMemberData")

	// 送られてきたjsonを取得
	var reqjson models.Member
	if err := c.BindJSON(&reqjson); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// URLパスからmemberIdを取得して送られてきたjsonに追加
	memberId, _ := strconv.Atoi(c.Param("memberId"))
	reqjson.ID = memberId

	// 変更後のメンバーデータを返す
	c.JSON(http.StatusOK, ChangeMemberData(reqjson))
}

// テスト
func ResTest(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "ChangeMemberData"})
}
