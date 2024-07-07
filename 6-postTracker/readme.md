# Post Tracker Full Stack Application

This application is build to demonstrate the how to connect MongoDB using mongoose to backend.

### Views

- Navbar
- Create user
- Create Post
- Display All Posts
  - Edit Single Post
  - Delete Single Post

## Basic setup

- Create folder structure
  - client
  - server
    - index.js
    - routes
    - controllers
      - userController (to create user)
      - postsController (to manage posts)
    - models

## Packages

- express, mongoose, dotenv, cors, date picker, react toast notification
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
10. using useNavigate() hook from react-router-dom to navigate to "PostList Page" upon successfully create an user, creating/editing a post.
11. _Bonus:_ Added toast notification
    - Creating an user
    - Create a post
    - Deleting a post

### Hosting

**Cyclic** to host backend.

1. Host backend first
2. Make 2 changes before hosting the app
   1. Update package.json Start script to "node index.js"
   2. Set-up a base url in backend, so that we can check if the backend is hosted properly or not.
3. Push the server to GitHub -> postTracker server
   - Create a empty repo on github - 'postTrackerServer'
   - On local machine go to server folder and open gitbash terminal
   - git add .
   - git commit -m "postTracker-server"
   - git branch -M main
   - git remote add origin <'url'>
   - git push -u origin main (-u means --set-upstream, it establishes the tracking connection between local and remote branch)
