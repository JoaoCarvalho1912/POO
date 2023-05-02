class pessoa{
    constructor(Nome, CPF, Ano){
        this.Nome=Nome
        this.CPF=CPF
        this.Ano=Ano
    }
    MostrarIdade(){
        console.log("A idade deste cidadão ou cidadã é: ", (2023-this.Ano))
    }
}
class clientes extends pessoa{
    constructor(cpf,id){
        super(cpf) // super puxa o CPF da classe maior, ou seja, da extendida 
        this.id=id;
    } 

    mostraNome(){
        console.log("Seu nome é: ",this.Nome)
    }
}

// programa principal 
let P1 = new pessoa('Jailson', '772.014.590-90', 1986)
let C1 = new pessoa("772.014.590-90", 1)
console.log("Nome: ",P1.Nome)
P1.MostrarIdade()
console.log(C1.cpf,C1.id)

/* let P2 = new pessoa('Raimunda', '280.018.500-70', 1984)
console.log("Nome: ",C1.Nome)
P2.MostrarIdade()
let P3 = new pessoa('Ramón', '820.107.200-50', 1990)
console.log("Nome: ",P3.Nome)
P3.MostrarIdade() */