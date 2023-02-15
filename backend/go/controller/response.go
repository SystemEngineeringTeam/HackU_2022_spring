package controller

import (
	"fmt"
	"net/http"
	"time"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/models"
	"github.com/gin-gonic/gin"
)

type Room struct {
	RoomName   string `json:"roomName"`
	RoomParent int    `json:"parent"`
	RoomMaker  string `json:"roomMaker"`
}

func PostRoom(c *gin.Context) {
	var req models.Room
	fmt.Println("get")
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, RoomCreate(req))
}

func GetTime() string {
	jst, err := time.LoadLocation(("Asia/Tokyo"))
	if err != nil {
		panic(err)
	}
	t := time.Now().In(jst)
	time := t.Format("2006-01-02T15:04:05+09:00")
	return (time)
}
