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

let relatorio = '';

for (let info in cliente) {
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue
    } else {
        relatorio += `${info} - ${cliente[info]}\n`
    }
}

console.log(relatorio);