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

- express, mongoose, dotenv, cors, date picker
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
11. createUser - and getAllUser postController logics
    - use mongoose queries - new User(req.body)_.save()_ to post the newly created user to database
    - User._find_ to all all the documents from "user" collection
12. postController logics
    - createPost - new Post(req.body)_.save()_
    - getAllPost - Post._find()_
    - getSinglePost - Post._findById(id)_
    - updatePost - Post._findByIdAndUpdate(id,{})_
    - deletePost - Post._deleteOne(id)_
13. Test the logics using Postman

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
5. createPost: username, description, duration, date
   - form - select box - input box (String) - input box (number) - date picker
6. create a state variable object to get data from input fields and usernames from user collection
7. using axios fetch usernames from user collection inside useEffect and map it users variable inside state variable
8. handleChange function should update values inside state variable
9. handleSubmit submits the date to "post" collection and creates a new user.
