package utils

import "time"

func GetCurrentTime() string {
	jst, err := time.LoadLocation(("Asia/Tokyo"))
	if err != nil {
		panic(err)
	}
	t := time.Now().In(jst)
	time := t.Format("2006-01-02T15:04:05+09:00")
	return (time)
}
