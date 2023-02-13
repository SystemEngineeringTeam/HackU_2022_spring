package models

type Member struct {
	UserId          string `gorm:"primaryKey"`
	Name            string `json:"name"`
	ResistationDate string `json:"resistationDate"`
	Comment         string `json:"comment"`
}

type Room struct {
	RoomId       string   `json:"roomId"`
	RoomName     string   `json:"roomName"`
	RoomMaker    string   `json:"roomMaker"`
	LastUpdated  string   `json:"lastUpdated"`
	MemberAmount int      `json:"memberAmount"`
	Summary      string   `json:"summary"`
	RoomChildren []string `json:"roomChildren"`
	RoomParent   string   `json:"roomParent"`
	Members      []Member `gorm:"foreignKey:UserId"`
	IsOpen       bool     `json:"isOpen"`
}