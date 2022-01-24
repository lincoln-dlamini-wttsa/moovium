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
mvnw compile quarkus:dev
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
mvnw package -Dquarkus.package.type=uber-jar
```

The application, packaged as an _über-jar_, is now runnable using `java -jar target/*-runner.jar`.

## Creating a native executable

You can create a native executable using:
```shell script
mvnw package -Pnative
```

Or, if you don't have GraalVM installed, you can run the native executable build in a container using:
```shell script
mvnw package -Pnative -Dquarkus.native.container-build=true
```

You can then execute your native executable with: `./target/movium-1.0.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult https://quarkus.io/guides/maven-tooling.