#!/bin/bash

root_folder=$(cd $(dirname $0); cd ..; pwd)

NAME_POJECT="author-microservice"
DOCKER_IMAGE=author-quarkus:1
ROOT_PROJECT_FOLDER=${root_folder}/author-microservice
K8S_SERVICE_EXPOSE=author-quarkus

ROOT_DEPLOYMENT_FOLDER=src/main/deployment
ROOT_DOCKER_FOLDER=src/main/docker
KUBERNETES_CONFIG_FILE=kubernetes-quarkus.yaml
ISTIO_CONFIG_FILE=istio-quarkus.yaml
DOCKER_NATIVE_FILE=Dockerfile.native

exec 3>&1

function log() {
    echo -e "$(date +'%F %H:%M:%S') $@"
}

function setup() {
    clear
    
    log [In progress] Deploying ${NAME_POJECT}
    
    log [K8S and Istio] Deleting the old configuration.
    cd ${ROOT_PROJECT_FOLDER}
    kubectl delete -f ${ROOT_DEPLOYMENT_FOLDER}/${KUBERNETES_CONFIG_FILE} --ignore-not-found
    kubectl delete -f ${ROOT_DEPLOYMENT_FOLDER}/${ISTIO_CONFIG_FILE} --ignore-not-found
    
    log [Maven] Production a native executable.
    # ./mvnw package -Pnative -Dnative-image.container-runtime=docker
    mvn package -Dmaven.test.skip=true -Pnative -Dnative-image.container-runtime=docker
    # mvn package -Dmaven.test.skip=true -Pnative -Dnative-image.docker-build=true
    
    # You need to push the Docker image to the image registry of your Kubernetes cluster.
    eval $(minikube docker-env)
    
    log [Docker] Building the image.
    docker build -f ${ROOT_DOCKER_FOLDER}/${DOCKER_NATIVE_FILE} -t ${DOCKER_IMAGE} .
    
    log [K8S and Istio] Applying the configuration.
    kubectl apply -f ${ROOT_DEPLOYMENT_FOLDER}/${KUBERNETES_CONFIG_FILE}
    kubectl apply -f ${ROOT_DEPLOYMENT_FOLDER}/${ISTIO_CONFIG_FILE}
    
    minikubeip=$(minikube ip)
    nodeport=$(kubectl get svc ${K8S_SERVICE_EXPOSE} --output 'jsonpath={.spec.ports[*].nodePort}')
    log Minikube IP: ${minikubeip}
    log NodePort: ${nodeport}
    
    log [Done] deploying ${NAME_POJECT}
    log Sample API: curl http://${minikubeip}:${nodeport}/author/12000747777
    log Wait until the pod has been started: "kubectl get pod --watch | grep author-quarkus"
}

setup