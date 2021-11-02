const express = require("express");
const router = express.Router();
const Category = require("./category");
const slugify = require("slugify");

router.get("/admin/categories/new", (req, res) => {
  res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
  let title = req.body.title;
  console.log(title);
  console.log(typeof title);
  if (title != undefined && title.length > 0) {
    Category.create({
      title: title,
      slug: slugify(title),
    }).then(() => {
      res.redirect("/admin/categories/new");
    });
  } else {
    res.redirect("/admin/categories/new");
  }
});

router.get("/admin/categories", (req, res) => {
  Category.findAll()
    .then((categories) => {
      res.render("admin/categories/index", { categories: categories });
    })
    .catch((err) => {
      res.redirect("/");
    });
});

router.post("/admin/categories/delete", (req, res) => {

  let id = req.body.id;
    id = parseInt(id)

  if (id != undefined) {
      if(!isNaN(id)){
              Category.destroy({where: { id:id}}).then(()=>{ res.redirect("/admin/categories")})
      }else{
      res.redirect("/admin/categories")
  }
    

  }else{
      res.redirect("/admin/categories")
  }
    


});


router.get("/admin/categories/edit/:id",(req, res)=>{
    let id = req.params.id

    if(isNaN(id)){
        res.redirect("/admin/categories")
    }
    Category.findByPk(id).then((category)=>{
        if (category != undefined) {
              res.render("admin/categories/edit", { categories: category });
        }else{
            res.redirect("/admin/categories")
        }
    }).catch((err)=>{
        res.redirect("/admin/categories")
    })


    
})


router.post("/categories/update",(req, res)=>{
    
    var id = req.body.id
    var title = req.body.title
    var slug = slugify(title)

    Category.update({title: title,slug: slug},{
        where: { id:id}
    }).then(()=>{
        res.redirect("/admin/categories")
    })







})
module.exports = router;
