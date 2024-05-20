const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>Welcome to Node</h1>
    <a href="/user">User</a>`);
  } else if (req.url === "/user") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h2>User, John</h2>
    <a href="/">Home</a>`);
  } else {
    res.end("404 Not Found");
  }
});
server.listen(5000, () => {
  console.log("Server is running on: http://localhost:5000");
});
