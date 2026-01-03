const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Template Empire is live 🚀");
});

server.listen(process.env.PORT || 8080);
