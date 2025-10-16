.
console.log(process.env);
const {query} = require("./infra/database");

console.log(process.env.NAME);

query("SELECT 1 + 1;")
.then(function(volue) {
  console.log(volue);
})
.catch(function(err) {
  console.log("deu ruim",err);
});