const {query} = require("../database");

async function consultarTodos() {
  const sql = `SELECT * FROM livro  WHERE top_livro = true`;

  const resultados = await query(sql)

  return resultados;
}

async function consultaTops() {
  const sql = `SELECT * FROM livro  WHERE top_livro = true`;

  const resultados = await query(sql)

  return resultados;
}
module.exports = {consultarTodos, consultaTops};

async function consultaMaisAdquiridos() {
  const sql = `SELECT * FROM livro  WHERE livros_mais_adquiridos = true`;

  const resultados = await query(sql)

  return resultados;
}
module.exports = {consultarTodos, consultaTops,consultaMaisAdquiridos};
module.exports = {consultarTodos, consultaTops};

async function consultacurtidas() {
  const sql = `SELECT * FROM livro ORDER BY curtida DESC LIMIT 5`;

  const resultados = await query(sql)

  return resultados;
}
module.exports = {consultarTodos, consultaTops,consultaMaisAdquiridos,consultacurtidas};