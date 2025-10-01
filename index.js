const {query} = require("./infra/database");

query("SELECT 1 + 1;")
.then(function(volue) {
  console.log(volue);
})
.catch(function(err) {
  console.log("deu ruim",err);
});