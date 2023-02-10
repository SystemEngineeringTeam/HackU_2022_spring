package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/structs"
)

func GetRooms(c *gin.Context) {

	c.JSON(http.StatusOK, result)
}
