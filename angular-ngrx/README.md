# AngularNgrx

## Description
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

## Building the container
` $ docker build -f Dockerfile -t $DOCKER_USER_ID/my-frontend:alpha .

## Pushing the container
` $ docker pull $DOCKER_USER_ID/my-frontend:alpha

## Running the container
` $ docker run -d -p 80:80 $DOCKER_USER_ID/my-frontend:alpha

## Inspect the container
` $ docker exec -ti <containerID> /bin/sh
Check the content html nginx folder. 

## Help 
#!/bin/bash
# Delete all stopped containers
docker rm $( docker ps -q -f status=exited)
# Delete all dangling (unused) images
docker rmi $( docker images -q -f dangling=true)
