

let btn = document.querySelector('#enviar');
//criando local storage


let cart = JSON.parse(localStorage.getItem("cart"))


//criar lista

function listarItemns(){

    //lista 

    let lista = document.querySelector("#lista")

    //elemento lista


    
    lista.innerHTML = ''

    for(item of cart){
        let elementList = document.createElement("li")
        var text = document.createTextNode(item)


        elementList.appendChild(text)

        lista.appendChild(elementList)


    }


    var carrinho = document.querySelector("#carrinho")

    carrinho.innerHTML = cart.length;
    console.log(carrinho)


}



function add(){
    let texto = document.querySelector("#msg").value;

    if (texto != '') {
        console.log(texto)
    cart.push(texto)

    console.log(cart)

    salvarB()
    listarItemns()
    }
    
}


btn.onclick = function(){
    add();
}




function salvarB(){
    localStorage.setItem("cart",JSON.stringify(cart))
}
listarItemns()