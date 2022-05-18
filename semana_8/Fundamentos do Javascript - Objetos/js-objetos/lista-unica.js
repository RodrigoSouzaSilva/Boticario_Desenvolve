const clientes = [
    {
        nome: 'Andre',
        cpf: '12345678909',
        dependente: [
            {
                nome: 'Sara',
                parentesco: 'filha',
                dataNasc: '20/03/2011'
            },
            {
                nome: 'Samia',
                parentesco: 'filha',
                dataNasc: '04/01/2014'
            }
        ]
    },
    {
        nome: 'Juliana',
        cpf: '90987654321',
        dependente: [
            {
                nome: 'Sophia',
                parentesco: 'filha',
                dataNasc: '30/08/2020'
            }
        ]
    }
]

// const listaDependentes = [...clientes[0].dependente, ...clientes[1].dependente]

const listaDependentes = [...clientes]


console.table(listaDependentes);

<livro id="59">
 <titulo>ECMAScript 6</titulo>
 <autor>Diego Martins de Pinho</autor>
 <categoria>programação</categoria>
</livro>