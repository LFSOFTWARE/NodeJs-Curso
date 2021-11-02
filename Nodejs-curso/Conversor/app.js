var Reader = require("./Reader")
var Processor = require("./Processor")
var Table = require("./Table")
var leitor = new Reader();




async function main(){
    var dados = await leitor.Read("./prods.csv")
    var dadosProcessados = Processor.Process(dados);
    console.log(dadosProcessados[0]);
    var produtos = new Table(dadosProcessados);

    console.log(produtos.ColunCount);
}


main();