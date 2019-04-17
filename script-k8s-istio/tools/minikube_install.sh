#!/bin/bash

MISSING_TOOLS=""

function log() {
    L_GREEN_COLOR='\033[1;32m'
    NC_COLOR='\033[0m'
    echo -e "${L_GREEN_COLOR}$(date +'%F %H:%M:%S') >>  $@${NC_COLOR}"
}


# -----------------------  Install virtualbox   ----------------------- #
# ------
log [Setup] virtualbox ...
vboxmanage --version &> /dev/null || MISSING_TOOLS="${MISSING_TOOLS} vboxmanage"
if [ ! -n $MISSING_TOOLS ]; then
    sudo apt install virtualbox
    MISSING_TOOLS=""
else
    log "Virtualbox Exist"
fi
log [Done] virtualbox
# -----------------------
# ------

cd /tmp

# -----------------------  Install Kubectl   ----------------------- #
# ------
log [Setup] Kubectl ...
kubectl version &> /dev/null || MISSING_TOOLS="${MISSING_TOOLS} kubectl"
if [ ! -n $MISSING_TOOLS ]; then
    curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
    chmod +x kubectl clear
    sudo mv kubectl /usr/local/bin
    MISSING_TOOLS=""
else
    log "kubectl Exist"
fi
log [Done] Kubectl
# -----------------------
# ------

# -----------------------  Install Minikube   ----------------------- #
# ------
log [Setup] Minikube
minikube version &> /dev/null || MISSING_TOOLS="${MISSING_TOOLS} minikube"
if [ ! -n $MISSING_TOOLS ]; then
    curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/
    MISSING_TOOLS=""
else
    log "Minikube Exist"
fi
log [Done] Minikube

# Launch Minikube
log Start Minikube ...
minikube start --cpus 4 --memory 8192
#minikube addons enable ingress

# Veritfy minikube & kubernetes installation with following commands
log [Check] Minikube setup
kubectl get nodes
# NAME       STATUS    AGE
# minikube   Ready     24s

kubectl config current-context
# minikube

minikube ip
# 192.168.99.100

kubectl cluster-info
# Kubernetes master is running at https://192.168.99.100:8443
# KubeDNS is running at https://192.168.99.100:8443/api/v1/proxy/namespaces/kube-system/services/kube-dns
# kubernetes-dashboard is running at https://192.168.99.100:8443/api/v1/proxy/namespaces/kube-system/services/kubernetes-dashboard
# -----------------------
# ------


# -----------------------  Install Tiller   ----------------------- #
# ------
# log [Setup] Tiller
# tiller version &> /dev/null || MISSING_TOOLS="${MISSING_TOOLS} tiller"
# if [ ! -n $MISSING_TOOLS ]; then
#    kubectl describe deploy tiller-deploy --namespace=kube-system
# fi
# -----------------------
# ------


# -----------------------  Install Helm   ----------------------- #
# ------
log [Setup] Helm
helm version &> /dev/null || MISSING_TOOLS="${MISSING_TOOLS} helm"
if [ ! -n $MISSING_TOOLS ]; then
    curl https://raw.githubusercontent.com/kubernetes/helm/master/scripts/get > get_helm.sh && chmod 700 get_helm.sh && ./get_helm.sh
fi
# -----------------------
# ------


# Initialize helm, install Tiller(the helm server side component)
helm init

# Make sure we get the latest list of chart
helm repo update
log [Done] Helm

# * Happy Helming *
helm repo update

helm ls
# -----------------------
# ------



log [Setup] Istio
## Install Istio with Helm and Tiller via Helm install
curl -LO https://git.io/getLatestIstio | ISTIO_VERSION=1.1.3 sh -
cd istio-1.1.3
# Create a namespace for the istio-system components
kubectl create namespace istio-system
# Install all the Istio Custom Resource Definitions (CRDs) using kubectl apply, and wait a few seconds for the CRDs to be committed in the Kubernetes API-server
helm template install/kubernetes/helm/istio-init --name istio-init --namespace istio-system | kubectl apply -f -
# Verify that all 53 Istio CRDs were committed to the Kubernetes api-server
kubectl get crds | grep 'istio.io\|certmanager.k8s.io' | wc -l
# Select a configuration profile and then install the istio chart corresponding to your chosen profile
helm template install/kubernetes/helm/istio --name istio --namespace istio-system | kubectl apply -f -
kubectl get service -n istio-system
kubectl label namespace default istio-injection=enabled
log [Done] Istio


