<div id="top"></div>

<h3 align="center">Movium</h3>

  <p align="center">
    A fun movie bookmarking and scheduling app
    <br />
  </p>


<!-- ABOUT THE PROJECT -->
## About The Project

This project is meant to be a high level introduction to building a fully fledged Java web application, using Movium as a fictitious movie management application whilst introducing you to some basic Java EE design patterns,

The main focus is on the following:
* Developing a Rest endpoint using JAX-RS
* Developing a proxy/service for your API to third party APIs as a client
* Implementing the basic CRUD ( CREATE,READ,UPDATE,DELETE ) operations common across business applications
* Securing our Rest endpoints

These are just a few concepts to get you started on building APIs using Java.


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

These are the frameworks/libraries we will use to implement this solution.

* [Quarkus](https://quarkus.io/)
* [MySQL](https://www.mysql.com/)
* [MicroProfile](https://microprofile.io/)
* [Hibernate ORM with Panache](https://quarkus.io/guides/hibernate-orm-panache)
* [Keycloak](https://www.keycloak.org/)
* [OpenID Connect](https://openid.net/connect/)
* [Docker](https://docs.docker.com/get-started/overview/)
* [Postman](https://www.postman.com/downloads/)

## Quarkus

[Quarkus](https://quarkus.io/guides/) is a Open Source Kubernetes-native Java framework tailored for GraalVM and HotSpot, crafted from best-of-breed Java libraries and standards. The goal is to make Java the leading platform in Kubernetes and serverless environments while offering developers a framework to address a wider range of distributed application architectures.

## MySQL

MySQL is a relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL).

A database is a structured collection of data. It may be anything from a simple shopping list to a picture gallery or a place to hold the vast amounts of information in a corporate network. In particular, a relational database is a digital store collecting data and organizing it according to the relational model. In this model, tables consist of rows and columns, and relationships between data elements all follow a strict logical structure. An RDBMS is simply the set of software tools used to actually implement, manage, and query such a database.

## MicroProfile

MicroProfile is a baseline platform definition that optimizes Enterprise Java for a microservices architecture and delivers application portability across multiple MicroProfile runtimes

The primary purpose of MicroProfile is to create a Java Enterprise framework for implementing portable microservices across vendor solutions.  MicroProfile is concerned with a vendor agnostic programming model as well as configuration, and services such as tracing, fault tolerance, health, and metrics to name a few.

## Hibernate ORM

Hibernate ORM enables developers to more easily write applications whose data outlives the application process. As an Object/Relational Mapping (ORM) framework, Hibernate is concerned with data persistence as it applies to relational databases (via JDBC)

So what is persistence? Persistence simply means that we would like our application’s data to outlive the applications process. In Java terms, we would like the state of (some of) our objects to live beyond the scope of the JVM so that the same state is available later.


## Keycloak

Keycloak is a single sign on solution for web apps and RESTful web services. The goal of Keycloak is to make security simple so that it is easy for application developers to secure the apps and services they have deployed in their organization. Security features that developers normally have to write for themselves are provided out of the box and are easily tailorable to the individual requirements of your organization. Keycloak provides customizable user interfaces for login, registration, administration, and account management. You can also use Keycloak as an integration platform to hook it into existing LDAP and Active Directory servers. You can also delegate authentication to third party identity providers like Facebook and Google.

## OpenID Connect

OpenID Connect 1.0 is a simple identity layer on top of the [OAuth 2.0](https://oauth.net/2/) protocol. It allows Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner.

OpenID Connect allows clients of all types, including Web-based, mobile, and JavaScript clients, to request and receive information about authenticated sessions and end-users. The specification suite is extensible, allowing participants to use optional features such as encryption of identity data, discovery of OpenID Providers, and session management, when it makes sense for them.

## Docker

Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host. Containers are lightweight and contain everything needed to run the application, so you do not need to rely on what is currently installed on the host. You can easily share containers while you work, and be sure that everyone you share with gets the same container that works in the same way.


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Clone the project from this repo: [Movium GitHub Repo](https://github.com/the-linc/moovium)

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm ( version 8 or higher )
  ```sh
  npm install npm@latest -g
  ```
* SDKMAN ( Use [SDKMAN](https://sdkman.io/install) to install and switch between JDK versions )


* [Install](https://sdkman.io/usage) Java JDK 17
  ```sh
  sdk install java 17.0.2-open
  ```

* Install Maven
  ```sh
  sdk install maven
  ```

* Download and install [Docker](https://www.docker.com/get-started)

### Running the solution

Follow these stewps to get the project up and running on your local environment.

1. Spin up a MySQL instance using docker :
    ```
    docker run --name movium-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_PASSWORD=password -e MYSQL_DATABASE=my-db-movie -e MYSQL_USER=username -p 3306:3306 -d mysql:5
    ```
2. Run project in dev mode
   ```sh
   mvn compile quarkus:dev
   ```
## Running the application in dev mode

You can run your application in dev mode that enables live coding using:
```shell script
mvn compile quarkus:dev
```
> **_NOTE:_**  Quarkus now ships with a Dev UI, which is available in dev mode only at http://localhost:8080/q/dev/.


## Packaging and running the application

The application can be packaged using:
```shell script
mvn package
```
It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/quarkus-app/lib/` directory.

The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar`.

If you want to build an _über-jar_, execute the following command:
```shell script
mvn package -Dquarkus.package.type=uber-jar
```

The application, packaged as an _über-jar_, is now runnable using `java -jar target/*-runner.jar`.

## Creating a native executable

You can create a native executable using:
```shell script
mvn package -Pnative
```

Or, if you don't have GraalVM installed, you can run the native executable build in a container using:
```shell script
mvn package -Pnative -Dquarkus.native.container-build=true
```

You can then execute your native executable with: `./target/movium-1.0.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult https://quarkus.io/guides/maven-tooling.



## Security

As mentioned above, we will be using Keycloak as an authorization and authentication server. In the interest of time we will use docker to spin up a keycloak server on our local environments for development and testing purposes


### Starting and Configuring the Keycloak Server

Just run the following command:

```shell script
docker run --name keycloak -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -p 8180:8080 -p 8543:8443 quay.io/keycloak/keycloak:12.0.4
```
After its done You should be able to access your Keycloak Server at http://localhost:8180/auth/

Log in as the admin user to access the Keycloak Administration Console. Username should be admin and password admin.

Import the realm configuration file to create a new muvium realm. file located at `/config/muvium-realm.json`

### Testing the Application

## There's two security contraints

Roles
user and Admin
we have created two users 
username and password
---------------------
linc password assigned to Admin role
anelemzinyati password assigned to User and Admin role

first we need to install jq tool
```shell script
brew install jq 
```

if you dont have brew installed  run this cmd - ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null 2> /dev/null

These endpoints are protected and can only be accessed if a client is sending a bearer token along with the request,

/movies/trailer/{videoId}
/movies/boxoffice
/movies/search/{title}
/movies/favourite
/favourite/{id}

The application is using bearer token authorization and the first thing to do is obtain an access token from the Keycloak Server in order to access the application resources:

```shell script
export access_token=$(\
    curl --insecure -X POST https://localhost:8543/auth/realms/muvium/protocol/openid-connect/token \
    --user backend-service:832421a3-d8f2-439d-b0e1-7dbc68151087 \
    -H 'content-type: application/x-www-form-urlencoded' \
    -d 'username=anelemzinyati&password=password&grant_type=password' | jq --raw-output '.access_token' \
 )
 ```

The example above obtains an access token for user anelemzinyati.

Only users with role of user  is allowed to access the http://localhost:8080/movies/boxoffice endpoint which basically returns a JSON payload with a list of movies.

```shell script
curl -v -X GET \
http://localhost:8080/movies/boxoffice \
-H "Authorization: Bearer "$access_token
 ```


or use postman to test copy the token from environment vars 