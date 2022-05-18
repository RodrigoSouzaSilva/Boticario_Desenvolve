const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '34565436789',
    email: 'andre@email.com',
    fones: ['20202020', '30303030'],
    dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataNascimento: '20/03/2011'
    }]
}

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'filha',
    dataNascimento: '04/01/2014'
})

// console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento === '04/01/2014')

console.log(filhaMaisNova);
// Samia Maria
