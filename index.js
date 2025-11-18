import * as k8s from "@pulumi/kubernetes";

const appName = "nginx";

// Deployment
const dep = new k8s.apps.v1.Deployment(appName, {
    spec: {
        selector: { matchLabels: { app: appName } },
        replicas: 1,
        template: {
            metadata: { labels: { app: appName } },
            spec: {
                containers: [
                    {
                        name: appName,
                        image: "nginx:latest",
                        ports: [{ containerPort: 80 }],
                    },
                ],
            },
        },
    },
});

// NodePort Service
const svc = new k8s.core.v1.Service(appName, {
    spec: {
        type: "NodePort",
        selector: { app: appName },
        ports: [
            {
                port: 80,          // inside cluster
                targetPort: 80,    // container port
                nodePort: 30036,   // your external access port
            },
        ],
    },
});

export const url = `http://$(minikube ip):30036`;
