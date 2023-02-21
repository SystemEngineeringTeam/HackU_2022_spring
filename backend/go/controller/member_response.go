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

	message, reqjson := AddMemberData(reqjson)

	// 追加後のメンバーデータを返す
	if message == "Success" {
		c.JSON(http.StatusOK, reqjson)
	} else {
		c.String(http.StatusBadRequest, "Could not add a member because a room with the specified room ID could not be found.")
	}

}

// メンバーの削除 r.DELETE("/api/room/member/:memberId/", controller.DeleteMember)
func DeletExitMemberData(c *gin.Context) {

	// URLパスからmemberIdを取得
	memberId, _ := strconv.Atoi(c.Param("memberId"))

	// メンバーデータを削除する関数に値を渡して、その処理結果を知らせる
	if ExitMemberData(memberId) == "Success" {
		c.String(http.StatusOK, "MemberData could be deleted.")
	} else {
		c.String(http.StatusBadRequest, "MemberData could not be deleted because there is no corresponding MemberData.")
	}

}

// メンバーの概要変更 r.PUT("/api/room/member/:memberId/", controller.ChangeMemberData)
func PutChangeMemberData(c *gin.Context) {

	// 送られてきたjsonを取得
	var reqjson models.Member
	if err := c.BindJSON(&reqjson); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// URLパスからmemberIdを取得して送られてきたjsonに追加
	memberId, _ := strconv.Atoi(c.Param("memberId"))
	// reqjson.ID = memberId

	// メンバーデータの変更
	memberData := ChangeMemberData(memberId, reqjson)

	fmt.Println(memberData)
	// 変更後のメンバーデータを返す
	// メンバーデータを変更する関数に値を渡して、その処理結果を知らせる
	if memberData.ID != 0 {
		c.JSON(http.StatusOK, memberData)
	} else {
		c.String(http.StatusBadRequest, "MemberData could not be changed because there is no corresponding MemberData.")
	}
}

// テスト
func ResTest(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "ChangeMemberData"})
}
