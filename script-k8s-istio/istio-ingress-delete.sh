#!/bin/bash

root_folder=$(cd $(dirname $0); cd ..; pwd)

ISTIO_FOLDER=${root_folder}/script-k8s-istio/istio

function log() {
    L_GREEN_COLOR='\033[1;32m'
    NC_COLOR='\033[0m'
    echo -e "${L_GREEN_COLOR}$(date +'%F %H:%M:%S') >>  $@${NC_COLOR}"
}

function setup() {
    clear
    
    log [Script] Deleting Istio Ingress definitions
    
    log [Istio] Applying the configuration
    cd ${ISTIO_FOLDER}
    kubectl delete -f istio-ingress-gateway.yaml --ignore-not-found
    kubectl delete -f istio-ingress-service.yaml --ignore-not-found
    
    log [Done] Deleting Istio Ingress definitions
}

setup