

class Filme{


    constructor(titulo,ano,genero,diretor,duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = [];
        this.duracao = duracao;
    }


    Reproduzir(){
        console.log("Reproduzindo!")
    }
    


    Pausar(){
          console.log("Pausado ||")
    }



    Avancar(){
        console.log("Avançar >>")
    }


    fechar(){
          console.log("Fechar X")
    }

    ficha(){
        console.log(`
            Titulo: ${this.titulo}
            Ano: ${this.ano}
            Genero: ${this.genero}
            Diretor: ${this.diretor}
            
        
        `)
    }
}


let rambo = new Filme("Programado para matar",1988,"Ação","Sylvestre",1.805);

rambo.ficha();