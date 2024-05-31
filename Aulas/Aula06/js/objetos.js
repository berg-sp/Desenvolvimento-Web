/*class Pessoa {
    _nome
    _idade

    constructor(nome, idade) {
        this._nome = String(nome)
        this._idade = Number(idade)
    }
}

var pessoa = new Pessoa("Fulano", 10)

console.log(pessoa)*/

// Objetos literais em Javascript

//var pessoa1 = ['Fulano', 10, 'Rua XPTO', 30, 'Analista', 'Maria']
//var pessoa2 = ['Fulano2', 20, 'Rua ABC', 40, 'Chefe', 'Joao']


var pessoa = {
    nome: 'Fulano',
    idade: 30,
    endereco: 'Rua XPTO',
    numeroCasa: 30,
    cargo: 'Analista',
    conjuge: 'Maria',
    ehMaiorIdade: true,
    telefone: ["119243850947", "1133445686", "56484155878"],
    filhos: [
        {
            nome: "Joaozinho",
            idade: 10
        },
        {
            nome: "Luizinha",
            idade: 5
        }
    ]
}

// {
//     "Nome": "Fulano",
//     "Idade": 30,
//     "Endereco": "Rua XPTO",
//     "NumeroCasa": 10,
//     "Cargo": "Analista",
//     "Conjuge": "Maria",
//     "EhMaiorIdade": true,
//     "Telefone" : [
//         "1234567890",
//         "2345678901",
//         "3456789102"
//     ],
//     "Filhos": [
//         {
//             "Nome": "Joaozinho",
//             "Idade": 10
//         }
//     ]
// }


console.log(pessoa)