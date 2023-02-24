package router

import (
	"github.com/gin-gonic/gin"

	"github.com/SystemEngineeringTeam/Hack-U_2022/backend/go/controller"
)

func Init() {
	r := gin.Default()

	// 部屋idから部屋の詳細情報を取得
	r.GET("/api/room", controller.ResponseGetRoom)

	// 取得したJSONを元に部屋を建てる
	r.POST("/api/room", controller.ResponseCreateRoom)

	// 参加者の追加
	r.POST("/api/room/:roomId/member", controller.PostAddMemberData)

	// 部屋の概要を変更
	r.PUT("/api/room/:roomId", controller.ResponseChangeRoom)

	// 参加者の変更（名前、または備考欄を変更する時）
	r.PUT("/api/room/member/:memberId", controller.PutChangeMemberData)

	// 部屋を削除
	r.DELETE("/api/room/:roomId", controller.ResponseDeleteRoom)

	// 部屋からの退室
	r.DELETE("/api/room/member/:memberId", controller.DeletExitMemberData)

	r.Run()
}
