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
	defer ErrorResponse(c)
	req := models.Room{}
	err := c.ShouldBindJSON(&req)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	res, err := models.CreateRoom(req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"Error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, res)
}

func GetRoom(c *gin.Context) {
	defer ErrorResponse(c)
	req := c.Query("roomId")
	id := strings.Split(req, ",")

	res, err := models.GetRooms(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, res)
}

func UpdateRoom(c *gin.Context) {
	defer ErrorResponse(c)
	req := models.Room{}
	err := c.ShouldBindJSON(&req)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	id := c.Param("roomId")

	r, err := models.FindByRoomID(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, r)
}

func DeleteRoom(c *gin.Context) {
	defer ErrorResponse(c)
	id := c.Param("roomId")
	r, err := models.FindByRoomID(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, r)
}
