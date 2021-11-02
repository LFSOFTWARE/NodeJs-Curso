const Sequelize = require("sequelize");
const database = require("../database.js");
const Fabricante = require("./fabricante.js")


const Produto = database.define("produto",{
    nome:{
        type:Sequelize.STRING,
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING
})

Fabricante.hasMany(Produto)

Produto.belongsTo(Fabricante,{
    constraint:true,
    foreignKey:'idFabricante'
});


 Produto.sync({force:false});


module.exports = Produto;
