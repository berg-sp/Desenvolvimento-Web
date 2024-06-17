var numero1 = document.getElementById('n1')
var numero2 = document.getElementById('n2')

function comparaValores(n1, n2) {

    if (Number(numero1.value) === Number(numero2.value)) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// ----- //

function Somar() {
    var resultado = Number(numero1.value) + Number(numero2.value)

    var res = document.getElementById('resultado')
    res.textContent = 'O resultado é ' + resultado
    //res.innerText = 'O resultado é ' + resultado
    //res.innerHTML = 'O resultado é <br>' + resultado
}

/*class Pessoa {
    falar () {
        console.log('Falando')
        
    }
    andar() {
        console.log('andando')
    }
}

var pessoa = new Pessoa()
pessoa.andar()*/