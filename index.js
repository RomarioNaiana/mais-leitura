require("dotenv").config();
const { port } = require("pg/lib/defaults");
const livroRepository = require("./infra/repository/livro");

cont serve = http.creatServer(function (red, res) {
  //res.writeHead(200, {"content-type" "text/plain"})
  res.end("Ok vem vindo");
});

cont por = process.env.PORT || 3000;

ServiceWorkerRegistration.listen(port, function () {
   console.log("Inicializando servidor HTTP na porta " + port);
});