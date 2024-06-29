// creating own node module

const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./landing-page/index.html", "utf-8");
const styles = readFileSync("./landing-page/css/styles.css", "utf-8");
const img = readFileSync("./landing-page/images/barcelona.jpg");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { contentType: "text/html" });
    res.write(homePage);
    res.end();
  } else if (req.url === "/css/styles.css") {
    res.writeHead(200, { contentType: "text/css" });
    res.write(styles);
    res.end();
  } else if (req.url === "/images/barcelona.jpg") {
    res.writeHead(200, { contentType: "image/jpg" });
    res.write(img);
    res.end();
  }
});

server.listen(5000, () => console.log("server: http://localhost:5000"));
