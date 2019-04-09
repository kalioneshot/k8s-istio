# Book API

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and.
See deployment for notes on how to deploy the project on a live system, either classically either docker or etither docker with Istio and Kubernetes.

### Prerequisites

```
IDE
JDK 11+ installed with JAVA_HOME configured appropriately
Apache Maven 3.6.0
Docker
kubernetes (see minikube)
Istio
```


### Running the application 

## In local 
* Through Maven Wrapper plugin :

```
mvn -N io.takari:maven:wrapper
./mvnw compile quarkus:dev -Ddebug=true
```

* Through your IDE - Maven build task :

```
quarkus:dev -Ddebug=5005
```

* Testing :

```
curl http://localhost:8080/book/all
```

### OpenAPI
Quarkus proposes a smallrye-openapi extension compliant with the Eclipse MicroProfile OpenAPI specification in order to generate your API OpenAPI v3 specification.

## Exposition OpenAPI Specifications

* Through Maven Wrapper plugin :

```
./mvnw quarkus:add-extension -Dextensions="smallrye-openapi"
```
* Or adding Maven dependency :

```
<dependency>
   <groupId>io.quarkus</groupId>
   <artifactId>quarkus-smallrye-openapi-parent</artifactId>
   <version>0.13.0</version>
</dependency>
```

* Testing  :

```
http://localhost:8080/openapi
```

## Swagger UI for development
Swagger UI is a great tool permitting to visualize and interact with your APIs. The UI is automatically generated from your OpenAPI specification.
The Quarkus smallrye-openapi extension comes with a swagger-ui extension embedding a properly configured Swagger UI page.

* Swagger UI is accessible at /swagger-ui.
* Update the Swagger UI path :

```
quarkus.swagger-ui.path property in your application.properties
```

### Reminder
Bootstrapping the project

```
mvn io.quarkus:quarkus-maven-plugin:0.12.0:create \
    -DprojectGroupId=com.kali.sample \
    -DprojectArtifactId=book-microservice \
    -DprojectVersion=my-1.0 \
    -DclassName="com.kali.sample.MyResource"
```

### TODO

Exception
circuit breaker
Metric
