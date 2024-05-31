// Arrays/Listas/Vetores.
// Arrays se assemelham com bancos de dados.
// Um array deve ser capaz de: Adicionar, Remover, Buscar/Listar Atualizar.

// var nome = 'Fulano' // variavel simples
var nomes = ['Miguel', 'Mateus', 'Monica'] //variavel composta (array)
// var idades = new Array(1, 2, 3)
// var idades = [10, 11, 12]

console.log(nomes)
// console.log(idades)
// console.log(nomes[0]) // Acessa posição 0 - Miguel
// console.log(nomes[1]) // Acessa posição 1 - Mateus
// console.log(nomes[2]) // Acessa posição 2 - Monica
// console.log(idades)

nomes.push('Davi', 'Fulano', 'Ciclano') // Adiciona elemento no Array
console.log(nomes)

console.log(nomes.length) // tamanho do array

nomes.pop() // por padrão remove o último elemento da array
console.log(nomes)

nomes.reverse() // inverte meu array
console.log(nomes)

nomes.shift() // por padrão remove o primeiro elemento do array
console.log(nomes)

nomes.sort() // ordena o array
console.log(nomes)

nomes.push('Fulano')
console.log(nomes)

nomes.reverse()
var posicaoFulano = nomes.indexOf('Fulano') // Busca por indice o elemento do parametro
//nomes.indexOf('') // Busca por indice o elemento do parametro.
nomes.splice(posicaoFulano, 1) // primeiro parametro é a posicao do item a ser removido, o segundo parametro é a quantidade de elementos excluidos.
console.log(nomes)

var array = [true, 'teste', 10, NaN, undefined, , , , , 'teste2']
console.log(array)
console.log(array[0, 2])

