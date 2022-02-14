package main

import (
	"encoding/json"
	"errors"
	"log"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type Number struct {
	FirstNumber  int `json:"firstNumber"`
	SecondNumber int `json:"secondNumber"`
}

func main() {

	// Create router instance
	router := fiber.New()
	router.Use(cors.New())

	registerRoute(router)

	// start server
	err := router.Listen(":8080")
	if err != nil {
		log.Fatal(err)
	}
}

func registerRoute(router *fiber.App) {
	router.Post("/add", addNumbers)
}

func addNumbers(c *fiber.Ctx) error {

	var number Number

	// unmarshall request body
	err := unmarshalJSON(c, &number)
	if err != nil {
		return err
	}

	sum := number.FirstNumber + number.SecondNumber

	return c.SendString(strconv.Itoa(sum))
}

// unmarshalJSON parses data from request and return otherwise error return.
func unmarshalJSON(c *fiber.Ctx, out interface{}) error {
	body := c.Body()

	if body == nil {
		return errors.New("empty body")
	}

	if len(body) == 0 {
		return errors.New("empty body")
	}

	err := json.Unmarshal(body, out)
	if err != nil {
		return errors.New(err.Error())
	}
	return nil
}
