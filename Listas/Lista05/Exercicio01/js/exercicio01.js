var nomeDigitado = prompt('Digite seu nome: ')
var idadeDigitada = Number(prompt('Digite sua idade: '))
var empregoAtual = prompt('Digite seu emprego atual: ')
var endereco = prompt('Digite seu endereço: ')

var pessoa = {
    nome: nomeDigitado,
    idade: idadeDigitada,
    emprego: empregoAtual,
    endereco: endereco
}

alert(`Seu nome é ${nomeDigitado} \nVocê tem ${idadeDigitada} anos \nseu emprego atual é: ${empregoAtual} \nE mora no endereco: ${endereco}`)