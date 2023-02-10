package structs

type Member struct {
	UserId          string `json:"userId"`
	Name            string `json:"name"`
	ResistationDate string `json:"resistationDate"`
	Comments        string `json:"comments"`
}

type Room struct {
	RoomId       string   `json:"roomId"`
	RoomName     string   `json:"roomName"`
	RoomMaker    string   `json:"roomMaker"`
	Comment      string   `json:"comment"`
	LastUpdated  string   `json:"lastUpdated"`
	MemberAmount int      `json:"memberAmount"`
	Summary      string   `json:"summary"`
	RoomChildren []string `json:"roomChildren"`
	RoomParent   string   `json:"roomParent"`
	Members      []Member `json:"members"`
	IsOpen       bool     `json:"isOpen"`
}
