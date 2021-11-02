
function gerarProdutos(cart){
    var desc = [];
    var total = 0;
    var cartInfo ;

        cart.forEach(produto => {
            desc.push( produto.quantity + " " + produto.nome)
            total += (produto.quantity * produto.price)
        });
        
        cartInfo = {
            desc: desc.join(' '),
            price : total
        }

        return cartInfo
}

function teste(){
    console.log('luiz')
}
module.exports = {
     gerarProdutos,
    teste
}