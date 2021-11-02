const Sequelize = require("sequelize")


const Connection = new Sequelize('loja','root','Fernandinho123',{

    host:'localhost',
    dialect: 'mysql',
    timezone:"-03:00"

})


module.exports = Connection