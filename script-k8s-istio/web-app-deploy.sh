#!/bin/bash

root_folder=$(cd $(dirname $0); cd ..; pwd)

NAME_POJECT="Angular - WebbApp Books"
DOCKER_IMAGE=web-app:1
ROOT_PROJECT_FOLDER=${root_folder}/angular-ngrx
K8S_SERVICE_EXPOSE=web-app

ROOT_DEPLOYMENT_FOLDER=deployment
KUBERNETES_CONFIG_FILE=kubernetes.yaml
ISTIO_CONFIG_FILE=istio.yaml
DOCKER_NATIVE_FILE=Dockerfile

function log() {
    L_GREEN_COLOR='\033[1;32m'
    NC_COLOR='\033[0m'
    echo -e "${L_GREEN_COLOR}$(date +'%F %H:%M:%S') >>  $@${NC_COLOR}"
}

function setup() {
    clear
    
    log [Script] Deploying ${NAME_POJECT}
    
    log [K8S and Istio] Deleting the old configuration.
    cd ${ROOT_PROJECT_FOLDER}
    kubectl delete -f ${ROOT_DEPLOYMENT_FOLDER}/${KUBERNETES_CONFIG_FILE} --ignore-not-found
    kubectl delete -f ${ROOT_DEPLOYMENT_FOLDER}/${ISTIO_CONFIG_FILE} --ignore-not-found
    
    # Use Docker registry of the Docker daemon running inside Minikube’s VM instance.
    eval $(minikube docker-env)
    
    log [Docker] Building the image.
    # Check your image is in Minikube’s Docker registry : minikube ssh docker images
    docker build -f ${DOCKER_NATIVE_FILE} -t ${DOCKER_IMAGE} .
    
    log [K8S and Istio] Applying the configuration
    kubectl apply -f ${ROOT_DEPLOYMENT_FOLDER}/${KUBERNETES_CONFIG_FILE}
    kubectl apply -f ${ROOT_DEPLOYMENT_FOLDER}/${ISTIO_CONFIG_FILE}
    
    minikubeip=$(minikube ip)
    nodeport=$(kubectl get svc ${K8S_SERVICE_EXPOSE} --output 'jsonpath={.spec.ports[*].nodePort}')
    
    log [Done] deploying ${NAME_POJECT} - Open the webApp : http://${minikubeip}:${nodeport}/
    #log Wait until the pod has been started: "kubectl get pod --watch | grep web-app"
    # kubectl exec -it [podID] -c web-app -- wget http://web-app:80
}

setup