package models

type Room struct {
	ID           int      `json:"roomId"`
	RoomName     string   `json:"roomName"`
	RoomMaker    string   `json:"roomMaker"`
	LastUpdated  string   `json:"lastUpdated"`
	MemberAmount int      `json:"memberAmount"`
	Summary      string   `json:"summary"`
	RoomChildren []string `json:"roomChildren"`
	RoomParent   string   `json:"roomParent"`
	Members      []Member `gorm:"foreignKey:RoomId"`
	IsOpen       bool     `json:"isOpen"`
}

type Member struct {
	ID              int    `json:"memberId"`
	RoomId          int    `json:"roomId"`
	UserId          int    `gorm:"primaryKey"`
	Name            string `json:"name"`
	ResistationDate string `json:"resistationDate"`
	Comment         string `json:"comment"`
}
