package controller

import (
	"net/http"
	"strings"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
	"github.com/gin-gonic/gin"
)

func ResponseCreateRoom(c *gin.Context) {
	var req models.Room
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, RoomCreate(req))
}

func ResponseGetRoom(c *gin.Context) {
	req := c.Query("roomId")
	id := strings.Split(req, ",")
	room := RoomGet(id)
	c.JSON(http.StatusOK, room)
}
