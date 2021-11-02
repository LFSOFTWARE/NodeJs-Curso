const Sequelize = require("sequelize");
const database = require("../database.js");
const Produto = require("./produto.js")
const Fabricante = database.define('fabricante',{
    nome:{
        type:Sequelize.STRING,
        allowNull: false
    }
})



 Fabricante.sync({force:false});



module.exports = Fabricante;