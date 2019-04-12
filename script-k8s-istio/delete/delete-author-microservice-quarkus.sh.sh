#!/bin/bash

root_folder=$(cd $(dirname $0); cd ..; pwd)

NAME_POJECT="author-microservice"
ROOT_PROJECT_FOLDER=${root_folder}/author-microservice
ROOT_DEPLOYMENT_FOLDER=${ROOT_PROJECT_FOLDER}/src/main/deployment

exec 3>&1

function log() {
  echo "$(date +'%F %H:%M:%S') $@"
}

function setup() {
  log [In progress] Deleting ${NAME_POJECT}
  
  log [K8S and Istio] Deleting configuration.
  cd ${ROOT_PROJECT_FOLDER}
  kubectl delete -f ${ROOT_DEPLOYMENT_FOLDER}/${KUBERNETES_CONFIG_FILE} --ignore-not-found
  kubectl delete -f ${ROOT_DEPLOYMENT_FOLDER}/${ISTIO_CONFIG_FILE} --ignore-not-found
  
  log [Done] Deleting ${NAME_POJECT}
}

setup
