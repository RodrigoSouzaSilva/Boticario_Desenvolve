const nomes = ['Ana', 'Marcos', 'Maria', 'Marcos'];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter( (aluno, indice) => notas[indice] < 5)
// reprovados so receberá valor caso o notas[indice], seja menor que 5

console.log(`Reprovados: ${reprovados}`);