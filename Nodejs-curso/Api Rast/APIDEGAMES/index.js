const express = require("express");
const app = express();
const bodyParser  = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const jwtS = "asdasda.dpodad,ad123103o4masçaçda´da´da]]aa;d;a´psdap5/874481213";



var corsOptions = {
  origin: 'http://localhost:8081', // Apenas esse dominio pode fazer requisição para sua api
}

app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

function auth(req,res,next) {
        const authToken = req.headers['authorization']
        if(authToken != undefined){
            var bearer = authToken.split(' ');
            var token = bearer[1];
        
            jwt.verify(token,jwtS,(err,data)=>{
                if(err){
                   
                    res.status(401);
                    res.json({err:"token invalido"})
                }else{
                    req.token = token;
                    req.loggerUser = {id:data.id,email:data.email}
                   
                    
                    next();
                }
            });


        }else{
            res.status(401);
        }
        
}  

var db = {

    games:[
        {
            id:23,
            nome: "Battlefield",
            year:2013,
            price: 60
        },
           {
            id:60,
            nome: "Minecraft",
            year:2012,
            price: 50
        },
           {
            id:1,
            nome: "Call of duty",
            year:2014,
            price: 100
        }
    ],
    users:[
            {   id:1,
                nome:"luiz fernando",
                email:"luiz@gmail.com",
                password:"123"
                
            },
             {   id:20,
                nome:"antonio",
                email:"antonio@gmail.com",
                password:"java"
                
            }
    ]

}



app.get("/games",auth,(req,res)=>{
    res.status(200);
    res.json(db.games)
})

app.get("/game/:id",auth,(req,res)=>{

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var game = db.games.find( g => g.id ==id);

        if(game !=undefined){ 
            res.statusCode = 200;
            res.json(game)
        }else{
            res.sendStatus(404);
        }

    }


})


app.post("/game",(req,res)=>{
    
    var {nome,price,year} = req.body;

    if(nome == undefined)
        res.sendStatus(400)
    else if(isNaN(price))
        res.sendStatus(400)
    else if(isNaN(price))
        res.sendStatus(400)
    else{
        db.games.push({
            id: Date.now(),
            nome,
            price,
            year
        });

        res.sendStatus(200);
    }

})

app.delete("/game/:id",(req,res)=>{
     if (isNaN(req.params.id)) {
        res.sendStatus(400);
    }else{

        var id = parseInt(req.params.id);
        var index = db.games.findIndex( g => g.id ==id);

        if(index == -1){
            res.sendStatus(404);
        }{
            db.games.splice(index,1);
            res.sendStatus(200)
        }
    }
})

app.put("/game/:id",(req,res)=>{
    
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var game = db.games.find( g => g.id ==id);

        if(game !=undefined){ 

            var {nome,price,year} = req.body;
            console.log(nome)
            if(nome != undefined){
                game.nome = nome
            }

              if(price != undefined){
                game.price = price
            }

            if(year != undefined){
              game.year = year
             }

            res.sendStatus(200);
        }else{
            res.sendStatus(404);
        }

    }

})


app.post("/auth",(req,res)=>{
    var {email,password } = req.body;


    var user = db.users.find(u => u.email == email );
    if(user != undefined){
        if(user.password == password){

            jwt.sign({id:user.id, email:user.email},jwtS,{expiresIn:'48h'},(err,token)=>{
                if(err){
                    res.status(400);
                }else{
                    res.status(200);
                    res.json({token:token})
                }
            });

           
        }else{
            res.sendStatus(404)
        }
    }else{
        res.sendStatus(404)
    }
    
})
app.listen(8081,()=>{
    console.log("API rondando!");
})