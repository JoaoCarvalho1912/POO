class Conta{
    constructor(numero,saldo,ativa){
        this.numero=numero;
        this.saldo=saldo;
        this.ativa=ativa
    }
    credito(valor){
        this.saldo += valor
    }
    debito(valor){
        if (valor<=0 | valor>this.saldo) {
            console.log("Erro. tente novamente ")
        } else {
            (this.saldo -= valor)
        }
    }
}

let c1 = new Conta(1,2000,true)
c1.credito(22)
console.log(c1.saldo)
c1.debito(400)
console.log(c1.saldo)