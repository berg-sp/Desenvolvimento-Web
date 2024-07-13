let inputsalarioBruto = document.getElementById('salario-bruto-mensal')
let inputSalarioLiquido = document.getElementById('salario-liquido')
let valorIR = document.getElementById('valor-ir')
let botao = document.getElementById('btn-calcular')

botao.addEventListener('click', () => {
    let salarioBruto = Number(inputsalarioBruto.value)
    let taxa = Number(valorIR.value)

    if(salarioBruto - taxa > 0)
    {
        inputSalarioLiquido.value = salarioBruto - (salarioBruto * 15 / 100)
    }
    else {
        alert('Salario liquido invalido')
    }
})