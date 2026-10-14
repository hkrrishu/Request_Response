const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server running");
  res.end("Hello from server");
});

let port = 3000;
server.listen(port, () => {
  console.log("server running on");
});
