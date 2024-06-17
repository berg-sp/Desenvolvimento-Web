var bancoDeDados = [
    {
        nome: "Bola de Futsal",
        descricao: "Melhor bola para jogo em quadra de futsal.",
        preco: 299, 
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bola de Campo",
        descricao: "Bola os grandes campos da copa.",
        preco: 109, 
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bola de Volei",
        descricao: "Para os melhores saques.",
        preco: 109, 
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bola de Basquete",
        descricao: "Sua melhores cestas e enterradas.",
        preco: 117, 
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bola de Futvôlei",
        descricao: "Para um bom jogo nas areias.",
        preco: 350, 
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bola de Tennis",
        descricao: "Ideal para atividade ao Ar livre.",
        preco: 15, 
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bola Society",
        descricao: "Para piso de taco polido.",
        preco: 65, 
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bola de Handebol",
        descricao: "A bola que define uma boa partida.",
        preco: 179, 
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bola de Gude",
        descricao: "Para quem não perdeu lembranças da infância.",
        preco: 1, 
        imagem: "https://via.placeholder.com/150"
    }
]

var conteudoPrincipal = document.getElementById('conteudo-principal')

for (var produto of bancoDeDados) {

    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)

    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao
    conteudoProduto.appendChild(descricaoProduto)

    var precoProduto = document.createElement('p')
    precoProduto.textContent = `R$ ${produto.preco}`
    conteudoProduto.appendChild(precoProduto)

    var botoes = document.createElement('div')
    botoes.className = "btn"
    conteudoProduto.appendChild(botoes)

    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "Comprar"
    botoes.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement('button')
    botaoDetalhes.textContent = "Detalhes"
    botoes.appendChild(botaoDetalhes)

    conteudoProduto.appendChild(botoes)
    conteudoPrincipal.appendChild(conteudoProduto)
}