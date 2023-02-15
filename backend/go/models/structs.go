package models

type Room struct {
	ID           int      `json:"roomId"`
	RoomName     string   `json:"roomName"`
	MemberAmount int      `json:"memberAmount"`
	Summary      string   `json:"summary"`
	IsOpen       bool     `json:"isOpen"`
	LastUpdate   string   `json:"lastUpdated"`
	Members      []Member `gorm:"foreignKey:RoomId"`
	RoomMaker    string   `json:"roomMaker"`
}

type Member struct {
	ID         int    `json:"memberId"`
	RoomId     int    `json:"roomId"`
	MemberName string `json:"name"`
	Comment    string `json:"comment"`
	tag        string `json:"tag"`
}
