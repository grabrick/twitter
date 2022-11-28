package main

import "fmt"

type Users struct {
	Name     string `json:"name"`
	Bio      string `json:"bio"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func main() {
	fmt.Println("ananan")
}
