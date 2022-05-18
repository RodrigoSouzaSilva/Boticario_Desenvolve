const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '34565436789',
    email: 'andre@email.com',
    fones: ['20202020', '30303030']
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNascimento: '20/03/2011'
}

// console.log(cliente);

cliente.dependentes.nome = 'Sara Silva';

console.log(cliente);