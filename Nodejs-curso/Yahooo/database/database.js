const Sequelize = require("sequelize")


const connection = new Sequelize('yahoo','root','Fernandinho123',{
    host: 'localhost',
    dialect:'mysql'
})



module.exports = connection