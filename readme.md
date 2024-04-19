# FluidMech Installation Guide

Welcome to the FluidMech application! This guide will walk you through the steps needed to install and run the FluidMech application, which consists of a Spring Boot backend and an Angular frontend.

## Prerequisites

Before starting, make sure you have the following installed:
- Java JDK 17
- MySQL (Latest version preferred)
- Node.js 18.16.0
- npm 9.5.1

## Database Setup

1. Log into your MySQL instance and create a new database named `api_wiki`.


## Backend Setup: Spring Boot

1. Navigate to the `backendApp/Api_Wiki` directory.
2. Open `src/main/resources/application.properties` and configure your MySQL database settings:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/api_wiki?useSSL=false&serverTimezone=UTC
    spring.datasource.username=<your_mysql_username>
    spring.datasource.password=<your_mysql_password>
    ```

    Replace `<your_mysql_username>` and `<your_mysql_password>` with your MySQL credentials.

3. Install dependencies and build the project using Maven Wrapper:

    ```bash
    ./mvnw clean install
    ```

4. Run the Spring Boot application:

    ```bash
    ./mvnw spring-boot:run
    ```

The backend should now be running on `http://localhost:8080`.

## Frontend Setup: Angular

1. Navigate to the `frontAppUsnp` directory.
2. Install npm dependencies:

    ```bash
    npm install
    ```

3. Navigate to the CKEditor directory and install its dependencies:

    ```bash
    cd ckeditor5-41.0.0-hx9ric8903g3
    npm install
    cd ../..
    ```

4. Update the Angular environment files to point to your backend server by editing `src/environments/environment.ts`:

    ```typescript
    export const environment = {
      domain: "http://localhost:8080/"
    };
    ```

    Do the same for `src/environments/environment.development.ts` if needed.

5. Start the Angular application:

    ```bash
    ng serve
    ```

Visit `http://localhost:4200` to access the user interface.


## Support

For additional help, please contact the development team at hannechichiheb@gmail.com.

## License

This project is released under the MIT License. Please see the `LICENSE` file for more information.
