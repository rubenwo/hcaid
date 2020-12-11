package main

import (
	"crypto/tls"
	"github.com/rs/cors"
	"github.com/rubenwo/home-automation/gateway-service/pkg/ingress"
	"log"
	"net/http"
	"time"
)

func main() {
	cfg, err := ingress.ParseConfig("./ingress.yaml")
	if err != nil {
		log.Fatal(err)
	}

	router, err := ingress.New(cfg)
	if err != nil {
		log.Fatal(err)
	}

	handler := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{
			http.MethodHead,
			http.MethodGet,
			http.MethodPost,
			http.MethodPut,
			http.MethodPatch,
			http.MethodDelete,
		},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: true,
	}).Handler(router)

	tlsCfg := &tls.Config{
		MinVersion: tls.VersionTLS12,
		//CurvePreferences:         []tls.CurveID{tls.CurveP521, tls.CurveP384, tls.CurveP256},
		//PreferServerCipherSuites: true,
		//CipherSuites: []uint16{
		//	tls.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,
		//	tls.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,
		//	tls.TLS_RSA_WITH_AES_256_GCM_SHA384,
		//	tls.TLS_RSA_WITH_AES_256_CBC_SHA,
		//},
	}

	server := &http.Server{
		Addr:         ":443",
		Handler:      handler,
		TLSConfig:    tlsCfg,
		ReadTimeout:  time.Second * 60,
		WriteTimeout: time.Second * 60,
		IdleTimeout:  time.Second * 120,
	}
	go func() {
		if err := http.ListenAndServe(":80", handler); err != nil {
			log.Fatal(err)
		}
	}()

	if err := server.ListenAndServeTLS("/certs/fullchain.pem", "/certs/privkey.pem"); err != nil {
		log.Fatal(err)
	}
}
