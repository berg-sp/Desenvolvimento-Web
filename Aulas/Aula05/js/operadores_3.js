var numero1 = 5
var numero2 = 10
var numero3 = "10"

var ehMaior = numero > numero2 // false
var ehMenor = numero < numero2 // true
var ehIgual = numero == numero2 // false
var ehMaiorOuIgual = numero >= numero2 // false
var ehMenorOuIgual = numero <= numero2 // true
var ehDiferente = numero != numero2 // true

//var saoIguais = numero == numero3 // true (verifica valor)
var saoIguais = 10 == "10" // true (verifica valor)
//var saoIdenticos = numero2 === numero3 // true (verifica tipo e valor)
var saoIdenticos = 10 === "10" // true (verifica tipo e valor)

alert(saoIguais)
alert(saoIdenticos)