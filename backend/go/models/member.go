package models

type Member struct {
	UserId          string `gorm:"primaryKey"`
	Name            string `json:"name"`
	ResistationDate string `json:"resistationDate"`
	Comment         string `json:"comment"`
}
