package main

import (
	"github.com/Danny-Dasilva/CycleTLS/cycletls"
	"log"
)

func main() {
	cycle := cycletls.Init()
	response, err := cycle.Do("https://tls.browserleaks.com/json", cycletls.Options{
		Body: "",
		// 指定ja3 fullstring
		Ja3: "771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,17513-65281-11-51-13-5-10-45-27-16-65037-18-0-23-35-43,29-23-24,0",
	}, "GET")
	if err != nil {
		log.Print(err)
	}
	log.Print(response)

}
