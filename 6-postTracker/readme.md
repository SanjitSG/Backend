# Post Tracker Full Stack Application

This application is build to demonstrate the how to connect MongoDB using mongoose to backend.

## Basic setup

- Create folder structure
  - client
  - server
    - index.js
    - routes
    - controller
    - models

## Packages

- express, mongoose, dotenv, cors
- nodemon [dev dependency]

### Procedure

### Server

1. install dependencies
2. create .env file to hide credentials and URIs
3. add middlewares
4. connect backend to database
5. create post and user routes
6. create post and user controller
7. import the routes into index.js and pass them into middleware. Also use express.json()
8. create post and user modals (schema)
9. import these models into respective controllers
10. use relevant mongoose function to make the database calls

### Client

1. install create-react-app .
2. create components
   - CreatePost
   - CreateUser
   - EditPost
   - Navbar
   - Post
   - PostList
3. create routes
4. createUser component
   - use axios to post data to backend controller
