let conteudoPrincipal = document.getElementById('conteudo-principal')
let cepInput = document.getElementById('cep')

console.log(conteudoPrincipal)
const buscarCEP = () => {
    fetch(`https://viacep.com.br/ws/${cep.value}/json`, {
        methods: 'GET',
    }).then(resposta => resposta.json())
    .then(dados => {
        conteudoPrincipal.innerHTML = `
            <h1>Endereco: </h1>
            <p>${dados.cep}</p>
            <p>${dados.logradouro}</p>
            <p>${dados.bairro}</p>
            <p>${dados.localidade} - ${dados.uf}</p>
            <p>${dados.cep}</p>
        `
    }).catch(erro => {
        console.log(erro)
    })
}