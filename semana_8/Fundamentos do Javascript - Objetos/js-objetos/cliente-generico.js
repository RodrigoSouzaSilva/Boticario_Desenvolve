function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    this.depositar = function(valor) {
        saldo += valor
    }
}

const andre = new Cliente('Andre', '12345678909', 'andre@email.com', 100);

console.log(andre);