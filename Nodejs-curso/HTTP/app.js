var http = require("http")

http.createServer(function(req,resposta){
    resposta.end("be vindo");
}).listen()
console.log("Server rodando")