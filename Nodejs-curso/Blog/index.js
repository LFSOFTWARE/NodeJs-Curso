const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const Connection = require("./database/database")
const userController = require("./user/userController.js")
const categoriesController = require("./categories/CategoriesController")
const articleController = require("./articles/ArticlesController.js")
const session = require("express-session")

const Article = require("./articles/Article")
const Category = require("./categories/Category")
const User = require("./user/User")

//View Engine
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


//Database
Connection.authenticate().then(()=>{
    console.log("Conected in MYSQL")
}).catch((err)=>{
    console.log(err)
})


app.use("/",categoriesController)
app.use("/",articleController)
app.use("/",userController)


app.get("/",(req,res)=>{
    Article.findAll({
        include:[{model:Category}],
        limit : 4
    }).then((articles)=>{


        Category.findAll().then((categories)=>{
             res.render("index",{articles:articles,categories:categories})
        })

       
    })
    
})


app.get("/:slug",(req,res)=>{
    var slug = req.params.slug

    Article.findOne({
        where: {slug:slug}
    }).then((article)=>{
        if(article != undefined){
             Category.findAll().then((categories)=>{
             res.render("article",{article:article,categories:categories})
        })

        }else{
            res.redirect("/")
        }
    }).catch((err)=>{
         res.redirect("/")
    })



})



app.get("/category/:slug",(req,res)=>{
    let slug  = req.params.slug
    Category.findOne({
        where: 
        { 
            slug:slug
        }

        
    }).then((categorie)=>{
        if(categorie != undefined){
            Category.findAll().then((categories)=>{

                Article.findAll({where:{categoryId:categorie.id}}).then((articles)=>{
                     res.render("index",{articles:articles,categories:categories})
                })

               
            })
        }else{
            res.redirect("/")
        }
    }).catch((err)=>{
        res.redirect("/")
    }) 



})
  

app.listen(8081,()=>{
    console.log("Server escutando")
})