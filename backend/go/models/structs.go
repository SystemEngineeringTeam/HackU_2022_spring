package models

type Room struct {
	ID           int      `json:"roomId"`
	RoomName     string   `json:"roomName"`
	MemberAmount int      `json:"memberAmount"`
	Summary      string   `json:"summary"`
	IsOpen       bool     `json:"isOpen"`
	LastUpdate   string   `json:"lastUpdated"`
	RoomParent   int      `json:"roomParent"`
	RoomMaker    string   `json:"roomMaker"`
	Members      []Member `gorm:"foreignKey:RoomId"`
}

type Member struct {
	ID               int    `json:"memberId"`
	RoomId           int    `json:"roomId"`
	UserName         string `json:"name"`
	RegistrationDate string `json:"registrationDate"`
	Comment          string `json:"comment"`
}
