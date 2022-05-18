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


function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes('dependentes')) { //verifica sem tem esse valor
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(cliente);

console.log(Object.values(cliente));  // mostra os valores

console.log(Object.entries(cliente)); // traz array com varias arrays dentro dele, e cada um sendo um conjunto de chaves e valores, em outra estrutura, array, indice 0 se refere a chave e indice 1 se refere ao valor