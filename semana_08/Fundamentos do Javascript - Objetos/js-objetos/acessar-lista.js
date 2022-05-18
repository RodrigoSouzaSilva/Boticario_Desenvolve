const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '34565436789',
    email: 'andre@email.com'
}

// const chave = 'nome';
// console.log(cliente[chave]);

const chaves = ['nome', 'idade', 'cpf', 'email'];
console.log(cliente[chaves[0]]);

chaves.forEach(chave => {
    console.log(cliente[chave]);
})

console.log(cliente['conta']);