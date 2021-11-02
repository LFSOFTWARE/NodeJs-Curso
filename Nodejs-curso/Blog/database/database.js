const Sequelize = require("sequelize")


const Connection = new Sequelize('blog','root','Fernandinho123',{

    host:'localhost',
    dialect: 'mysql',
    timezone:"-03:00"

})


module.exports = Connection