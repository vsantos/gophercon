package main

import (
	"github.com/google/uuid"
	"github.com/pismo/istiops/pkg/client"
	"github.com/pismo/istiops/pkg/operator"
	"github.com/pismo/istiops/pkg/router"
	"k8s.io/client-go/util/homedir"
)

func main() {
	// generate random uuid
	uuid, err := uuid.NewUUID()
	if err != nil {
		panic(err.Error())
	}

	// get istio client based on ~/.kube/config
	kubeConfigPath := homedir.HomeDir() + "/.kube/config"
	clients, err := client.New(kubeConfigPath)
	if err != nil {
		panic(err.Error())
	}

	trackingID := uuid.NewUUID().String()
	metadataName := "api-xpto"
	metadataNamespace := "default"
	build := 27

	var drr operator.Router
	drr = &router.DestinationRule{
		TrackingId: trackingID,
		Name:       metadataName,
		Namespace:  metadataNamespace,
		Build:      build,
		Istio:      clients.Istio,
	}

	var vsr operator.Router
	vsr = &router.VirtualService{
		TrackingId: trackingID,
		Name:       metadataName,
		Namespace:  metadataNamespace,
		Build:      build,
		Istio:      clients.Istio,
	}

	shift := router.Shift{
		Port:     5000,
		Hostname: "api.domain.io",
		Selector: map[string]string{"environment": "pipeline-go"},
		Traffic: router.Traffic{
			PodSelector: map[string]string{
				"app":     "api",
				"version": "1.3.3",
				"build":   "24",
			},
			RequestHeaders: map[string]string{
				"x-version":    "PR-142",
				"x-account-id": "233",
			},
			Weight: 10,
		},
	}

	var op operator.Operator
	op = &operator.Istiops{
		DrRouter: drr,
		VsRouter: vsr,
	}

	op.Get(shift.Selector)
	op.Clear(shift)
	op.Update(shift)

}
