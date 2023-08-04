# BookSwap - Share. Swap. Explore

[BookSwap Project Documentation Repository](https://github.com/KrisztaT/bookswap
)

[BookSwap Client Repository](https://github.com/KrisztaT/bookswap-client)

[BookSwap Server Repository](https://github.com/KrisztaT/bookswap-server)

[BookSwap Deployed Client](https://bookswap-client.netlify.app/)

[BookSwap Deployed Server](https://bookswap-server-kt-2962369e5914.herokuapp.com/)

## Description

**Purpose:**

BookSwap is an online platform designed to connect book enthusiasts and facilitate the sharing of books within a community of readers. The primary purpose of the platform is to foster a sense of community, encourage book sharing, and provide a convenient way for users to explore and borrow books from fellow readers.

**Functionality/Features:**

- User Registration: Users can join and create an account to access the functionalities of the application.
- User Login: Users can log in to access the functionalities of the application.
- User Logout: Users can log out to ensure the protection and privacy of their information and prevent unauthorised access.
- Add and Edit Books: Lenders can add books to the database of BookSwap and have the option to edit the details of the books they have contributed to the database.
- Book Listing Management for Lenders: Lenders can create, list, update their status, and delete their book listings.
- Book Search for Borrowers: Borrowers can search for books based on the title and in the result list view basic book information and lender's name and email.
- Borrowers can contact lenders externally via email for communicating about lending details.
- Additional Information for Listed Books: Lenders can provide additional details such as location and condition for their listed books.
- Enhance Additional Information: Lenders can update the extra provided data as needed.
- Advanced Book Search: Borrowers can search for books using various search criteria.
- Search result is updated with to display the additional data.

**Tech Stack:**

| Category          | Tools                                                                                   |
|-------------------|-----------------------------------------------------------------------------------------|
| Front-end         | HTML5, CSS3, JavaScript, [React.js](https://reactjs.org/), [Bootstrap](https://getbootstrap.com/), [React-Bootstrap](https://react-bootstrap.github.io/) |
| Back-end          | [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/), [Mongoose](https://mongoosejs.com/)   |
| Database          | [MongoDB](https://www.mongodb.com/)                                                     |
| Hosting           | [Netlify](https://www.netlify.com/), [Heroku](https://www.heroku.com/), [MongoAtlas](https://www.mongodb.com/atlas/database)                 |
| Testing           | [Jest](https://jestjs.io/)                                                               |

## B - Installation Guide

Follow the steps outlined below to perform a local installation of both the server and client components on your computer.

### System Requirements

- NodeJS version v19.8.1

### Server Installation

1. Create a directory named `bookswap` and navigate into it:
   ```bash
   $ mkdir bookswap && cd bookswap
   ```
2. Clone the server repository from GitHub or unzip the provided file.
    ```bash
    $ git clone git@github.com:KrisztaT/bookswap-server.git
    or
    $ unzip KrisztinaTesenyi_T3A2-B.zip
   ```
3. Go to the server folder. (In case file was provided use the second line.)
   ```bash
   $ cd bookwap-server
   or
   $ cd KrisztinaTesenyi_T3A2-B.zip/src/bookswap-server
   ```
4. Install the required npm packages:
   ```bash
   $ npm install
   ```
5. Create your `.env` file, if it was not provided, with appropriate DATABASE_URL(s) and JWT_SECRET values.
6. You can seed your local database using the following command:
    ```bash
   $ npm run seed-dev
   ```
7. Launch the server using the following command:
   ```bash
   $ npm run dev
   ```
   You now have access to the API through Postman or by navigating to localhost:3001/ in your web browser. In case a different port is used, please adjust the frontend settings to ensure communication between frontend and backend.

8. To run tests, first make sure that DATABASE_URL_TEST is defined in your `.env` file. Then to seed the test database use the command:
   ```bash
   $ npm run seed-test
   ```
9. After seeding the test database, you can execute tests as well and view the results along with test coverage using:
   ```bash
   $ npm run test-cc
   ```

## Client Installation

1. Open your terminal and navigate to the `bookswap` folder:
   ```bash
   $ cd bookswap
   ```
2. Clone the client repository from GitHub:
   ```bash
   $ git clone git@github.com:KrisztaT/bookswap-client.git
   ```
3. Go to the client folder. (In case file was provided use the second line.)
   ```bash
   $ cd bookswap-client
   or
   $ cd KrisztinaTesenyi_T3A2-B.zip/src/bookswap-client
   ```
4. Install the required npm packages:
   ```bash
   $ npm install
   ```
5. Create your `.env` file, if it was not provided, with appropriate BACKEND
_URL(s).
6. Start the client server with the following command:
   ```bash
   $ npm start
    ```
      The client server will automatically run on http://localhost:3000/ by default, and this URL is configured in the CORS settings. Therefore, if a different port is used, both the backend and frontend components will require modification to ensure the communication between them.

6. To run tests use the command:
   ```bash
   $ npm test
   ```
## Libraries used in the project

### Server Libraries

`bcrypt (^5.1.0)`: Bcrypt is used for hashing passwords and it provides a secure way to hash and compare passwords, making it difficult for attackers to reverse-engineer the original passwords from the hashes.

`cors (^2.8.5)`: CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts web resources (such as APIs) to be requested from different domains. The cors library helps in handling CORS headers and settings, making it easier to control and secure the communication between the app's frontend and backend. It's important to note that the application is configured to operate within the local context of "http://localhost:3000" in case of local run. For the application to function correctly from alternative hosts, configuration adjustments are required in the backend.

`dotenv (^16.3.1)`: Dotenv allows the load of environment variables from a .env file into the app's process environment. It is used to keep sensitive configuration details (like database URLs, API keys, etc.) separate from the codebase and safely stored.

`express (^4.18.2)`: Express.js is a framework designed for Node.js that streamlines the development of powerful and scalable web applications and APIs. It offers a comprehensive set of tools for managing routes, handling requests and responses, implementing middleware, and other essential functionalities required for building this application.

`express-validator (^7.0.1)`: The express-validator library is utilised to validate and sanitise incoming request data in applications. It plays a crucial role in mitigating common security vulnerabilities such as cross-site scripting (XSS) and SQL injection by sanitising user inputs. This library was used to validate data from frontend forms related to login, join, book, and listing functionalities.

`helmet (^7.0.0)`: Helmet is a security middleware that enhances the security of an application by configuring various HTTP headers. These headers help guard against prevalent security threats, including Cross-Site Scripting (XSS) attacks, clickjacking, and others.

`jsonwebtoken (^9.0.1)`: The jsonwebtoken library enables the generation and verification of JSON Web Tokens (JWTs), which serve as a secure and efficient method for exchanging claims between two parties. JWTs are commonly used in web applications to implement authentication and authorisation mechanisms.

`mongoose (^7.3.2)`: Mongoose is a library that serves as an Object Data Modeling (ODM) tool for MongoDB and Node.js. It offers a schema-based interface for interacting with MongoDB databases, simplifying the process of defining models, querying data, and executing Create, Read, Update, and Delete (CRUD) operations.

`Jest (^29.6.1)`: Jest is a testing framework for JavaScript applications and offers a set of testing tools, to help ensuring the quality and accuracy of the code.

`Nodemon (^3.0.1)`: Nodemon is a utility tool used in development that watches for modifications in the source code and automatically restarts the server when changes are detected.

`Supertest (^6.3.3)`: Supertest is a library for testing HTTP endpoints, it enables sending HTTP requests to apps's API routes and assert the responses, simplifying the process of writing automated tests for the API endpoints.

### Client Libraries

`bootstrap (^5.3.0)`: Bootstrap is a CSS framework that offers a collection of pre-designed and responsive UI components. It streamlines the process of designing visually appealing and consistent user interfaces for web applications.

`framer-motion (^10.12.18)`: Framer Motion is a library for adding smooth and interactive animations to React components. It provides an intuitive API for creating animations and transitions, enhancing the visual appeal and user experience of the apps.

`react (^18.2.0)`: React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the dynamic rendering of data.

`react-bootstrap (^2.8.0)`: React Bootstrap is an adaptation of the Bootstrap framework for use with React applications. It provides a set of pre-styled components that are integrated with React's component architecture, enabling efficient UI development.

`react-bootstrap-icons (^1.10.3)`: This library offers a collection of Bootstrap icons as individual React components. It allows easy integration of icons into React components and UI elements.

`react-dom (^18.2.0)`: React DOM is a package that provides the methods and components necessary for rendering React applications in the browser. It facilitates the interaction between React components and the actual HTML DOM.

`react-router-dom (^6.14.1)`: React Router DOM is a library for adding routing and navigation capabilities to React applications. It allows the creation of multi-page apps by defining routes and managing the rendering of different components based on the URL.

`@testing-library/jest-dom (^5.16.5)`: The Jest DOM library extends the capabilities of Jest for asserting DOM-related expectations in tests.

`@testing-library/react (^13.4.0)`: Testing Library for React is a testing framework that emphasises testing user interactions and behavior rather than implementation details. It provides utilities for simulating user actions and asserting the resulting state and rendered output of React components.

`@testing-library/user-event (^13.5.0)`: This library complements Testing Library by simulating user interactions, such as clicks, typing, and focusing, in a way that closely resembles how a real user interacts with a web application.