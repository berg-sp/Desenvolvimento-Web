class Musica {
    _nomeMusica
    _bandaArtista
    _anoLancamento
    _genero

    constructor(nomeMusica, bandaArtista, anoLancamento, genero) {
        this._nomeMusica = String(nomeMusica)
        this._bandaArtista = String(bandaArtista)
        this._anoLancamento = Number(anoLancamento)
        this._genero = String(genero)
        
    }
}

//var musica = new Musica("With or Without", "U2", 1987, "Rock")
//var musica = new Musica("Thriller", "Michael Jackson", 1982, "Pop")
var musica = new Musica("Get Up Off a That Thing", "James Brown", 1976, "Funk")

console.log(musica)


/*var musica = {
    nomeMusica: 'Fulano',
    bandaArtista: 30,
    anoLancamento: 30,
    genero: 'Rock',
}*/