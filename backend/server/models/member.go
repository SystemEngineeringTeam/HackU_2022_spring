package models

type Member struct {
	ID         int     `json:"memberId"`
	RoomId     int     `json:"roomId"`
	MemberName string  `json:"name"`
	Comment    *string `json:"comment"`
	Tag        *string `json:"tag"`
}