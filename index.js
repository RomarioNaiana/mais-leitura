require("dotenv").config();
const http = require("node:http");
const livroRepository = require("./infra/repository/livro");

const server = http.createServer(function (red, res) {
  //res.writeHead(200, {"content-type" "text/plain"})
  res.end("Ok vem vindo");
});

const port = process.env.PORT || 3000;

server.listen(port, function () {
   console.log("Inicializando servidor HTTP na porta " + port);
});