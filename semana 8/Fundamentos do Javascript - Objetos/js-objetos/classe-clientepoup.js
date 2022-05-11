class Cliente {
    // Atributos - caracteristicas
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    // Metodos - comportamento
    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoup){
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor) {
        this.saldoPoup += valor
    }
}

const andre = new ClientePoupanca('Andre','andre@email.com','2255887744',100, 200);

// console.log(andre);
andre.depositar(50)
andre.depositarPoup(50)

console.log(andre);