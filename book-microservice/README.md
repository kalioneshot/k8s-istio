# Book Service

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and.
See deployment for notes on how to deploy the project on a live system, either classically either docker or etither docker with Istio and Kubernetes.

### Prerequisites

```
IDE
JDK 11+ installed with JAVA_HOME configured appropriately
Apache Maven 3.6.0
```

Only if you want to deploy on Kubernetes with Istio: 

```
Docker
kubernetes (see minikube)
Istio
```
### Running the application
```
Dev Mode : ./mvnw compile quarkus:dev -Ddebug=true
curl http://localhost:8080/hello
```

If you want used the Maven Wrapper plugin:

```
mvn -N io.takari:maven:wrapper
./mvnw compile quarkus:dev -Ddebug=true
```

### Bootstrapping the project
```
mvn io.quarkus:quarkus-maven-plugin:0.12.0:create \
    -DprojectGroupId=com.kali.sample \
    -DprojectArtifactId=book-microservice \
    -DprojectVersion=my-1.0 \
    -DclassName="com.kali.sample.MyResource"
```

### Reminder

```
quarkus:dev Dquarkus.http.port=8081
```

### TODO

Exception
circuit breaker
