package router

import (
	"github.com/gin-gonic/gin"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/server/controllers"
)

func Init() {
	r := gin.Default()

	// 部屋idから部屋の詳細情報を取得
	r.GET("/api/room", controllers.GetRoom)

	// 取得したJSONを元に部屋を建てる
	r.POST("/api/room", controllers.CreateRoom)

	// 参加者の追加
	r.POST("/api/room/:roomId/member", controllers.AddMember)

	// 部屋の概要を変更
	r.PUT("/api/room/:roomId", controllers.UpdateRoom)

	// 参加者の変更（名前、または備考欄を変更する時）
	r.PUT("/api/room/member/:memberId", controllers.UpdateMember)

	// 部屋を削除
	r.DELETE("/api/room/:roomId", controllers.DeleteRoom)

	// 部屋からの退室
	r.DELETE("/api/room/member/:memberId", controllers.DeleteMember)

	r.Run()
}
