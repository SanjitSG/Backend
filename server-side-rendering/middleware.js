import express from "express";

const app = express();
const PORT = 5000;

const middleware = (req, res, next) => {
  console.log("Middleware-one");
  next();
};

const middlewareTwo = (req, res, next) => {
  console.log("Middleware-two");
  next();
};

// multiple middlewares
app.use(middleware, middlewareTwo);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page..</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page..</h1>");
});

app.get("/contact", (req, res) => {
  res.status(200).send("<h1>Contact Page..</h1>");
});

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));
