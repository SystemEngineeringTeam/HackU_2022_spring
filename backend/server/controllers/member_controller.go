package controllers

import (
	"net/http"
	"strconv"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/models"
	"github.com/gin-gonic/gin"
)

// メンバーの追加 r.POST("/api/room/:roomId/member/", controller.AddMember)
func AddMember(c *gin.Context) {
	defer ErrorResponse(c)
	r := models.Member{}
	if err := c.BindJSON(&r); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
		return
	}

	rId := c.Param("roomId")
	r.RoomId = rId

	res, err := models.AddMember(r)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, res)
}

// メンバーの削除 r.DELETE("/api/room/member/:memberId/", controller.DeleteMember)
func DeleteMember(c *gin.Context) {
	defer ErrorResponse(c)
	mId, _ := strconv.Atoi(c.Param("memberId"))

	mes, err := models.DeleteMember(mId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"Error": err.Error()})
	}

	c.JSON(http.StatusOK, gin.H{"Message": mes})
}

// メンバーの概要変更 r.PUT("/api/room/member/:memberId/", controller.ChangeMemberData)
func UpdateMember(c *gin.Context) {
	defer ErrorResponse(c)
	r := models.Member{}
	if err := c.BindJSON(&r); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
		return
	}

	mId, _ := strconv.Atoi(c.Param("memberId"))
	res, err := models.UpdateMember(mId, r)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"Error": err.Error()})
	}

	c.JSON(http.StatusOK, res)
}

// テスト
func ResTest(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "ChangeMemberData"})
}
