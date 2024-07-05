let produtos = []

let buscar = () => {
    return produtos
}

let criar = (nome, valor, descicao) => {
    produtos.push(
        {        
            nome: nome,
            valor: valor,
            descicao: descicao
        }
    )
}

module.exports = {
    buscar,
    criar
}