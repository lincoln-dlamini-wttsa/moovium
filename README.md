<div id="top"></div>

<h3 align="center">Movium</h3>

  <p align="center">
    A fun movie bookmarking and scheduling app
    <br />
  </p>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-the-project">Running the solution</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

This project is meant to be a high level introduction to building a fully fledged Java web application, whilst introducing you to some basic Java EE design patterns,

The main focus is on the following:
* Developing a Rest endpoint using JAX-RS
* Developing a proxy for your API to consume API's as a client
* Implementing the basic CRUD ( CREATE,READ,UPDATE,DELETE ) operations common to Rest APIs
* Persist data to a data store.

These are just a few concepts to get you started on building APIs using Java.


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

These are the frameworks/libraries we will use to implement this solution.

* [Quarkus](https://quarkus.io/)
* [MySQL](https://www.mysql.com/)
* [MicroProfile](https://microprofile.io/)
* [Panache ORM](https://quarkus.io/guides/hibernate-orm-panache)

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

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Spin up a Mysql instance using docker :
    ```
    docker run --name movium-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_PASSWORD=password -e MYSQL_DATABASE=my-db-movie -e MYSQL_USER=username -p 3306:3306 -d mysql:5
    ```
2. Run maven install on project root
   ```sh
   mvn clean install
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