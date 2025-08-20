const fs = require("node:fs");
function readFile(arquivo){
  const promessa = new Promissa(function(resolve,reject){
    fs.readFile(arquivo, function(err, resposta){
      if(err){
        reject(err)
        return
      }
      resolve(resposta.toString())
    })
  })

  return promessa;
}

readFile("./arq1.txt")
.then(function (valor){
}) .catch(function(erro){

}).finally(function(){

});

