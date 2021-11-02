/* Modulos usados no app */
const express = require("express") //FrameWork express gerencia todo http
const app = express() // Estancia o express
const bodyParser = require("body-parser")

const connection = require("./database/database")
const Pergunta = require('./database/Pergunta')
const Resposta = require("./database/Resposta")
//Database

    
connection.authenticate().then(()=>{
  
    console.log("conectado no mysql")
}).catch((err)=>{
     console.log(err)
})

//Usando o ejs como engine 
app.set('view engine','ejs')

//Arquivos estativos
app.use(express.static('public'))

//Pegar dados form via bodyparser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//routers
app.get("/",(req,res)=>{
     var order = "ASC"
    if(req.query["o"] == 't'){
             order = "DESC" 
    }
  
    Pergunta.findAll({raw:true,order:[
        ['id',order]
    ]}).then((perguntas)=>{
        res.render("index",{perguntas:perguntas})
    })
    
})

app.get("/perguntar",(req,res)=>{
    res.render("perguntar")
})



app.post("/Salvarpergunta",(req,res)=>{
    var titulo = req.body.titulo;
   
    var desc = req.body.desc

    
    
    Pergunta.create({
        titulo: req.body.titulo,
        descricao: desc
        
     }).then(()=>{
         res.redirect("/")
     })



   
})


app.get("/pergunta/:id",(req,res)=>{
    Pergunta.findOne({
        where:{id:req.params.id}
    }).then((pergunta)=>{
        if(pergunta != undefined){

            Resposta.findAll({
                where:{perguntaID:req.params.id},
                raw:true,
                order: [['id','DESC']]
            }).then((respostas)=>{
                res.render("pergunta",{pergunta:pergunta,respostas:respostas})
            })
           
        }else{
            res.redirect("/")
        }
    })
})



app.post("/responder",(req,res)=>{
    let corpo = req.body.corpo
    let perguntaID = req.body.perguntaID
    Resposta.create({
        corpo:corpo,
        perguntaID : perguntaID
    }).then(()=>{
        res.redirect("/pergunta/"+perguntaID)
    })

})

app.listen(8081,()=>{
    console.log("Servidor escutando!")
})
