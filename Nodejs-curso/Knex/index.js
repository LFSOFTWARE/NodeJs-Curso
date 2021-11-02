var database = require("./database.js");
//INSERT
var dados = {
    nome: "GTA 1",
    preco: 5.6
}

async function  teste(){

try {
var id_game   =  await  database.insert(dados).into("games")
var id_game2   =  await  database.insert(dados).into("games")

console.log(id_game);
console.log(id_game2);

    
} catch (error) {
    console.log(error);
}

}


teste()
// ***********************

// SELECT
// database.select(["id","nome"]).table("games").then((data)=>{
// console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// MULTIPLAS QUERYS
//  database.insert({nome:"GTA 5 ",preco:150}).into("games").then((data)=>{

//     database.select(["id","nome"]).table("games").then((data)=>{
//         console.log(data);
//         }).catch((err)=>{
//             console.log(err);
//         })


// }).catch((err)=>{
//     console.log(err);
// })


// WHERE
// database.select(["id"]).where({nome:"GTA 5 "}).table("games").then(data=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// database.select(["id"]).whereRaw("nome = "Luiz" OR id = "10" ").table("games").then(data=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// RAW

// database.raw("SELECT * from games").then((data)=>{
//     console.log("data")
// }).catch((err)=>{

// })

// DELETE
// database.where({id:2}).delete().table("games").then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

//UPDATE
// database.where({id:3}).update({preco : 60}).table("games").then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });


// ORDER



