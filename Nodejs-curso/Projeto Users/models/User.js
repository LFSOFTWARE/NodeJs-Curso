var knex = require("../database/connection.js")
var bcrypt = require("bcrypt")

class User{

    async new(email,password,name){

        try{
            await  knex.insert({email,password,name,role:0}).table("users");
    
        }catch(err){
            console.log(wee);
        }
    }
}



module.exports = new User();