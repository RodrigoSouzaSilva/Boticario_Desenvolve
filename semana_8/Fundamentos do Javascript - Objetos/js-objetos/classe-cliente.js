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

const andre = new Cliente('Andre','andre@email.com','12345678909',100);

// console.log(andre);
andre.depositar(50) // deposita 50
andre.exibirSaldo() // 150