package controller

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	// "github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/structs"
)

// メンバーの追加 r.POST("/api/room/:roomId/member/", controller.AddMember)
func AddMember(c *gin.Context) {
	// c.JSON(http.StatusOK, gin.H{
	// 	"message": "AddMember",
	// })
	fmt.Println("AddMember")
}

// メンバーの削除 r.DELETE("/api/room/:roomId/member/:userId/", controller.DeleteMember)
func DeleteMember(c *gin.Context) {
	// c.JSON(http.StatusOK, gin.H{
	// 	"message": "DeleteMember",
	// })
	fmt.Println("DeleteMember")
}

// メンバーの概要変更 r.PUT("/api/room/:roomId/member/:userId/", controller.ChangeMemberData)
func ChangeMemberData(c *gin.Context) {
	// c.JSON(http.StatusOK, gin.H{
	// 	"message": "ChangeMemberData",
	// })
	fmt.Println("ChangeMemberData")
}

// テスト
func Test(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "ChangeMemberData",
	})
	// fmt.Println("ChangeMemberData")
}
