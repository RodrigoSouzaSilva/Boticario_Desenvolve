function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    this.depositar = function(valor) {
        saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo) // chamando as propriedade de Cliente
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca('Ju', '33344556677', 'ju@email.com', 100, 200);

console.log(ju);

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

console.log(ju.saldoPoup); // 200
ju.depositarPoup(30)       // deposita 30
console.log(ju.saldoPoup); // 230