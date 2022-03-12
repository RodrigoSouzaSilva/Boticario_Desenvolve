const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '34565436789',
    email: 'andre@email.com',
    fones: ['20202020', '30303030'],
    dependentes: [
        {
            nome: 'Sara',
            parentesco: 'filha',
            dataNascimento: '20/03/2011'
        },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNascimento: '04/01/2014'
        }
    ],
    saldo: 100,

    // METODOS
    depositar: function(valor) {
        this.saldo += valor
    }
}

console.log(cliente.saldo); // 100
cliente.depositar(30)       // depositou 30
console.log(cliente.saldo); // 130
