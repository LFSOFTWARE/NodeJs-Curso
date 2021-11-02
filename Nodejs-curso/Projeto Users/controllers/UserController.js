var User = require("../models/User.js")

class UserController{

    async create(req,res){
        var {email,name,password} = req.body;
        if(email   == undefined ){
            req.status(400);
            res.json({err:"o  email é invalido!"})
        }
       await User.new(email,password,name);
        res.status(200);
        res.send("Pegando BODY");
    }


}


module.exports = new UserController();