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
    
    log [Script] Deploying Istio Ingress definitions
    
    log [Istio] Applying the configuration
    cd ${ISTIO_FOLDER}
    kubectl apply -f istio-ingress-gateway.yaml
    kubectl apply -f istio-ingress-service.yaml
    
    # Istio variables
    ingress_port=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}')
    secure_ingress_port=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].nodePort}')
    ingress_host=$(minikube ip)

    log [Done] Deploying Istio Ingress definitions - Istio url : http://${ingress_host}:${ingress_port}/
    # http://${ingress_host}:${ingress_port}/web
}

setup