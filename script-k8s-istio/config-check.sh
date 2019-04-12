#!/bin/bash

root_folder=$(cd $(dirname $0); cd ..; pwd)

function log() { 
  echo "$(date +'%F %H:%M:%S') $@" 
}

function checkConfig() {
  # Check environment variables.
  MISSING_ENV=""
  if [ -z $JAVA_HOME ]; then 
    MISSING_ENV="${MISSING_ENV} JAVA_HOME" 
  fi
  if [ -z $GRAALVM_HOME ]; then 
    MISSING_ENV="${MISSING_ENV} GRAALVM_HOME"
  fi
  if [[ -n "$MISSING_ENV" ]]; then
    log "Some environment variables (${MISSING_ENV}) is required, please set them first."
    exit 1
  fi

  # Check tools.
  MISSING_TOOLS=""
  git --version &> /dev/null || MISSING_TOOLS="${MISSING_TOOLS} git"
  curl --version &> /dev/null || MISSING_TOOLS="${MISSING_TOOLS} curl"
  which sed &> /dev/null || MISSING_TOOLS="${MISSING_TOOLS} sed"
  docker -v &> /dev/null || MISSING_TOOLS="${MISSING_TOOLS} docker"
  kubectl version &> /dev/null || MISSING_TOOLS="${MISSING_TOOLS} kubectl"
  minikube version &> /dev/null || MISSING_TOOLS="${MISSING_TOOLS} minikube"
  if [[ -n "$MISSING_TOOLS" ]]; then
    log "Some tools (${MISSING_TOOLS# }) are missing, please install them first."
     exit 1
  else
    log You have all necessary prerequisites installed
  fi
  if ! kubectl describe namespace default | grep istio-injection=enabled > /dev/null ; then
    log "Istio automatic sidecar injection needs to be enabled. See LocalEnvironment.md"
  fi   
}

checkConfig

