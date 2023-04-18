package controller

import (
	"net/http"
	"strings"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/models"
	"github.com/gin-gonic/gin"
)

func ErrorResponse(c *gin.Context) {
	if r := recover(); r != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": r})
		return
	}
}

func ResponseCreateRoom(c *gin.Context) {
	var req models.Room
	var err error
	if err = c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	defer ErrorResponse(c)
	c.JSON(http.StatusOK, RoomCreate(req))
}

func ResponseGetRoom(c *gin.Context) {
	req := c.Query("roomId")
	id := strings.Split(req, ",")
	defer ErrorResponse(c)
	c.JSON(http.StatusOK, RoomsGet(id))
}

func ResponseChangeRoom(c *gin.Context) {
	var req models.Room
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	id := c.Param("roomId")
	defer ErrorResponse(c)
	room := RoomGet(id)
	c.JSON(http.StatusOK, RoomChange(req, room))
}

func ResponseDeleteRoom(c *gin.Context) {
	id := c.Param("roomId")
	defer ErrorResponse(c)
	room := RoomGet(id)
	c.JSON(http.StatusOK, RoomDelete(room))
}
