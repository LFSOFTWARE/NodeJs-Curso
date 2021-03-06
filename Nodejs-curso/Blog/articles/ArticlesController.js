const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const Article = require("./Article");
const slugify = require("slugify");
const adminAuth = require("../middlewars/adminAuth")

router.get("/admin/articles" ,adminAuth,(req, res) => {
  console.log(req.session.user)
  Article.findAll({
    include: [{ model: Category }],
  }).then((articles) => {

    res.render("admin/articles/index", { articles: articles});
  });
});

router.get("/admin/articles/new", adminAuth,(req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/articles/new", { categories: categories });
  });
});

router.post("/admin/articles/save",adminAuth, (req, res) => {
  let title = req.body.title;
  let body = req.body.body;
  let category = req.body.category;
  let slug = slugify(title);

  if (
    title != undefined &&
    body != undefined &&
    title.length > 0 &&
    body.length > 0
  ) {
    Article.create({
      title: title,
      body: body,
      slug: slug,
      categoryId: category,
    }).then(() => {
      res.redirect("/admin/articles");
    });
  } else {
    console.console.log("asds");
    res.redirect("/admin/articles/new");
  }
});

router.post("/admin/article/delete",adminAuth, (req, res) => {
  let id = req.body.id;
  id = parseInt(id);

  if (id != undefined) {
    if (!isNaN(id)) {
      Article.destroy({ where: { id: id } }).then(() => {
        res.redirect("/admin/articles");
      });
    } else {
      res.redirect("/admin/articles");
    }
  } else {
    res.redirect("/admin/articles");
  }
});

router.get("/admin/article/edit/:id",adminAuth, (req, res) => {
  var id = req.params.id;
  console.log(id);
  Article.findOne({ where: { id: id } }).then((article) => {
    Category.findAll().then((categories) => {
      res.render("admin/articles/edit", {
        article: article,
        categories: categories,
      });
    });
  });
});


router.post("/admin/article/update",adminAuth,(req,res)=>{
  var id = req.body.id

  Article.update({title:req.body.title,body:req.body.body,categoryId:req.body.category},{where:{categoryId:id}}).then(()=>{
    res.redirect("/admin/articles")
  })

})



router.get("/articles/pagina/:num",adminAuth,(req,res)=>{
  var page = req.params.num ;
  var offset = 0
  if(isNaN(page) || page == 1){
  offset = 0 



  }else{
    offset = (parseInt(page) - 1) * 4 
  }



  Article.findAndCountAll({
    limit:4,
    offset:offset,
    order:[['id','DESC']]
  }).then((articles)=>{

    let next 

    if(offset + 4 >= articles.count ){
      next = false;
    }else{
      next = true;
    }


    let result = {
      next: next,
      page:parseInt(page),
      articles: articles
    }
    

    Category.findAll().then((categories)=>{
      res.render("admin/articles/page",{results:result, categories:categories})
    })

    
  })

})

module.exports = router;
