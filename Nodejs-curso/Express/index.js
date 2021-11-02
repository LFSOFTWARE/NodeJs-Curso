const express = require("express")  //Importando    
const app = express()   //Iniciando o express


app.get("/",(req,res)=>{
    var canal = req.query["canal"] || " "
    res.send("Hello World!!"+canal)
})

app.get("/ola/:nome/:cargo",(req,res)=>{
    let nome =  req.params.nome
    let cargo = req.params.cargo
    res.send("Oi!! "+ nome + " Seu cargo: " + cargo)
})

app.get("/blog/:artigo?",(req,res)=>{

    let artigo = req.params.artigo || "Como programar!"
    res.send("Artigo " + artigo )
})


app.listen(8080,(erro)=>{
    if(erro){
        console.log("Erro!" + erro)
    }else{
        console.log("Server escutando em localhost:8081 !");
    }
})


