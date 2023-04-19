package controllers

import (
	"net/http"
	"strconv"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/models"
	"github.com/gin-gonic/gin"
)

// メンバーの追加 r.POST("/api/room/:roomId/member/", controller.AddMember)
func AddMember(c *gin.Context) {
	r := models.Member{}
	if err := c.BindJSON(&r); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	rId := c.Param("roomId")
	r.RoomId = rId

	defer ErrorResponse(c)
	c.JSON(http.StatusOK, models.AddMember(r))
}

// メンバーの削除 r.DELETE("/api/room/member/:memberId/", controller.DeleteMember)
func DeleteMember(c *gin.Context) {
	mId, _ := strconv.Atoi(c.Param("memberId"))
	defer ErrorResponse(c)
	c.JSON(http.StatusOK, models.DeleteMember(mId))
}

// メンバーの概要変更 r.PUT("/api/room/member/:memberId/", controller.ChangeMemberData)
func UpdateMember(c *gin.Context) {
	r := models.Member{}
	if err := c.BindJSON(&r); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	mId, _ := strconv.Atoi(c.Param("memberId"))

	defer ErrorResponse(c)
	c.JSON(http.StatusOK, models.UpdateMember(mId, r))
}

// テスト
func ResTest(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "ChangeMemberData"})
}
