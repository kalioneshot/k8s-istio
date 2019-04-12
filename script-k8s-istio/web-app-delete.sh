#!/bin/bash

root_folder=$(cd $(dirname $0); cd ..; pwd)

NAME_POJECT="Angular - WebbApp Books"
ROOT_PROJECT_FOLDER=${root_folder}/angular-ngrx
ROOT_DEPLOYMENT_FOLDER=deployment
KUBERNETES_CONFIG_FILE=kubernetes.yaml
ISTIO_CONFIG_FILE=istio.yaml

function log() {
    L_GREEN_COLOR='\033[1;32m'
    NC_COLOR='\033[0m'
    echo -e "${L_GREEN_COLOR}$(date +'%F %H:%M:%S') >>  $@${NC_COLOR}"
}

function setup() {
    clear
    
    log [Script] Deploying ${NAME_POJECT}
    
    log [K8S and Istio] Deleting the old configuration
    cd ${ROOT_PROJECT_FOLDER}
    kubectl delete -f ${ROOT_DEPLOYMENT_FOLDER}/${KUBERNETES_CONFIG_FILE} --ignore-not-found
    kubectl delete -f ${ROOT_DEPLOYMENT_FOLDER}/${ISTIO_CONFIG_FILE} --ignore-not-found
    
    log [Done] deploying ${NAME_POJECT}
}

setup