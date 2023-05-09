class animal{
    constructor(especie,peso,porte,ano){
        this.especie=especie;
        this.peso=peso;
        this.porte=porte
        this.ano=ano
    }
    fazbarulho(){
        console.log("Fazendo barulho...")
    }
    mostraridade(){
        return "A sua idade é de " +(2023-this.ano)+" anos"
    }
    mostrarpeso(){
        return this.peso + "kg"
    }
}

class Gato extends animal(){
    constructor(especie,cor, raca){
        super(especie);
        this.cor = cor;
        this.raca = raca;
    }
    miar(){
        console.log("Miaauu")
    }
}


// -------------------------------------------------------------- //
let bichano1 = new animal("Dinossauro",800,"G", -2000)
console.log(bichano1.especie)
console.log(bichano1.mostraridade())
let bichano2 = new animal("Tigre",250, "M", 1984)
console.log(bichano2.fazbarulho())
let bichano3 = new animal("Galinha", 3, "P", 2017)
console.log(bichano3.mostrarpeso())

let bichano4 = new Gato("Felino","preto","Persa")
console.log(bichano4.miar())