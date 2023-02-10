package router

import (
	"github.com/gin-gonic/gin"
)

func Init() {
	r := gin.Default()

	// 部屋idから部屋の詳細情報を取得
	r.GET("/api/room/details/")

	// 部屋を建てるまたは、小部屋を作成する（childrenに部屋IDを追加していく）
	r.POST("/api/room/")

	// 部屋の概要を変更
	r.PUT("/api/room/:roomId/")

	// 部屋を削除
	r.DELETE("/api/room/:roomId/:roomKey/")

	// 参加者の追加
	r.POST("/api/room/:roomId/member/")

	// 参加者の変更（名前、または備考欄を変更する時）
	r.PUT("/api/room/:roomId/member/:userId/")

	// 部屋からの退室
	r.PUT("/api/room/:roomId/member/:userId/")

	r.Run()
}
