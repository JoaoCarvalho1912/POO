// classe, atributos e métodos
class retangulo {
    constructor(altura, base) {
        this.altura = altura;
        this.base = base;
    }
    MostrarArea() {
        console.log("area do retangulo é", this.altura * this.base)
    }
} //progama principal 
const leia = require('prompt-sync')()
 let b1 = leia("Insira a base 1: ") 
 let h1 = leia("Digite a altura 1: ") 
 let b2 = leia("Insira a base 2: ") 
 let h2 = leia("Digite a altura 2 : ") 

 let objeto1 = new retangulo(b1,h1) 
 let objeto2 = new retangulo(b2, h2) 

 objeto1.MostrarArea() // economizamos tempo ao utilizar a POO
 objeto2.MostrarArea()