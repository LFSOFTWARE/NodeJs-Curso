const express = require("express")

const MercadoPago = require("mercadopago")

const app = express()

var func = require("./Functions.js")

MercadoPago.configure({
    sandbox: true,
    access_token: "TEST-7648723658090627-082915-8dfc494a6546d77c2d75196366d07bd1-815379202"
})


app.get("/",(req,res)=>{
    res.send("OLa mundo"+Date.now())
})

app.get("/pagar",async (req,res)=>{
        var cart = [
            {nome:'play',price:10,quantity:1},
             {nome:'play2',price:10,quantity:10}
        ]


        var id = "" + Date.now()
        var cartInfo = func.gerarProdutos(cart)
       
        var dados = {

            items :[
                item = {
                    id: id ,
                    title:  cartInfo.desc,
                    quantity:1,
                    currency_id:"BRL",
                    unit_price: parseFloat(cartInfo.price)
                }
            ],
            payer:{
                email:"Luiz@hotmail.com"
            },
            external_reference: id


        }

        try {
        var pagamento = await MercadoPago.preferences.create(dados);


        return res.redirect(pagamento.body.init_point)
        } catch (error) {
                return  res.send(error)
        }
        

})



app.listen(8081,(req,res)=>{
    console.log("Servidor rodando!")
})