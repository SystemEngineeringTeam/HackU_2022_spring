package controllers

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/models"
)

func ErrorResponse(c *gin.Context) {
	if r := recover(); r != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": r})
		return
	}
}

func CreateRoom(c *gin.Context) {
	req := models.Room{}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	defer ErrorResponse(c)
	c.JSON(http.StatusOK, models.CreateRoom(req))
}

func GetRoom(c *gin.Context) {
	req := c.Query("roomId")
	id := strings.Split(req, ",")
	defer ErrorResponse(c)
	c.JSON(http.StatusOK, models.GetRooms(id))
}

func UpdateRoom(c *gin.Context) {
	req := models.Room{}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	id := c.Param("roomId")
	defer ErrorResponse(c)
	room := models.FindByRoomID(id)
	c.JSON(http.StatusOK, models.UpdateRoom(req, room))
}

func DeleteRoom(c *gin.Context) {
	id := c.Param("roomId")
	defer ErrorResponse(c)
	r := models.FindByRoomID(id)
	c.JSON(http.StatusOK, models.DeleteRoom(r))
}
