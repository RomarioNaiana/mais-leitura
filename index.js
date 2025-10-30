require("dotenv").config();
const livroRepository = require("./infra/repository/livro");

livroRepository
.consultarTodos()
.then(function (resultados) {
  console.log(resultados)
})
.catch(function (error) {
  console.log("Deu ruim", error)
})