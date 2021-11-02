const express = require("express");
const app = express();
const Connection = require("./database.js");


Connection.authenticate().then(()=>{
  console.log("Conected in MYSQL");
}).catch((err)=>{
    console.log(err);
})
const Produto = require("./models/produto");

const Fabricante = require("./models/Fabricante");



//   Fabricante.create({nome:'NVDIA'}).then((resulte)=>{
//          Produto.create({
//           nome:'GTX 9600',
//           preco: 550,
//           descricao: "APU DE GAMES",
//          idFabricante: resulte.id
//       })
//   })
//  Produto.create({
//         nome:'Mac',
//           preco: 550,
//          descricao: "APU DE GAMES",
//         idFabricante:    2
//            })

  Produto.findByPk(1,{include:Fabricante}).then((resolve)=>{
     console.log(resolve.fabricante.nome);
  }).catch((err)=>{
      
  })


Fabricante.findByPk(1,{include:Produto}).then((result)=>{
    console.log(result)
})

app.get("/",(req,res)=>{
    res.send("ola");
})

app.listen(8081,()=>{
    console.log("rodando")
})
