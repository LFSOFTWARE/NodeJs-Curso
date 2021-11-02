const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")

const app = express()

app.set("view engine","ejs")


//Sessions 

app.use(session({
    secret: "asdadasdasdcfASDFajdASD~5asd56asd1a251asdasd",
    cookie:{maxAge: (1000 * 60) * 60 *24 * 7},
    resave: true,
    saveUninitialized: true
}))
//Static
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(8081,()=>{
    console.log("Servidor rodando")
})