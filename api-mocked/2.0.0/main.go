package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func mainHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Gophercon 2019")
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	hc := map[string]string{
		"status": "healthy",
	}

	json.NewEncoder(w).Encode(hc)
}

func versionHandler(w http.ResponseWriter, r *http.Request) {
	version := map[string]string{
		"event":   "Gophercon 2019",
		"version": "2.0.0",
	}

	json.NewEncoder(w).Encode(version)
}

func main() {
	http.HandleFunc("/", mainHandler)
	http.HandleFunc("/version", versionHandler)
	http.HandleFunc("/health", versionHandler)

	fmt.Println("Running mock-server...")
	log.Fatal(http.ListenAndServe(":5000", nil))
}
