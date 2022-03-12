const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '34565436789',
    email: 'andre@email.com'
}

cliente.telefone = 30302020;

console.log(cliente);

cliente.telefone = 898989898;

delete cliente.telefone
console.log(cliente);