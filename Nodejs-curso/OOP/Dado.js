class Dado{
    constructor(faces){
        this.faces = faces
    }



    Girar(){
        console.log(Math.floor(Math.random() * (this.faces - 1 + 1)) + 1)
    }

}


var dado6 = new Dado(100);


dado6.Girar();