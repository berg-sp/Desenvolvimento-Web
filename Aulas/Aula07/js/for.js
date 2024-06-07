//var nomes = ['Fulano', 'Ciclano', 'Teste', 'Maria', 'Joao']

/*for (var inicio = 0; inicio < 10; inicio++) {
    //for (var inicio = 0; inicio < 10; inicio+1) {
        console.log(inicio)
    }*/
    
var tarefas = ['Lavar roupa', ' Lavar louca', 'Lavar banheiro', 'Lavar quintal', 'dar banho no cachorro', 'Compras no  mercado' ]

for (var contador = 0; contador < 3; contador++) {
    console.log(tarefas[contador])
}

/*for (var indice = 0; tarefas.length < 10; indice++) {
     console.log(tarefas[indice])
}*/

for (var tarefa of tarefas) {
    console.log(tarefa)
}

// tarefas.forEach(tarefa => {
//     console.log(tarefa)
// })