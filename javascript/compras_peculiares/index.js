function validaAlimentos(){
    var nAlimentos = parseInt(prompt('Qual a quantidade de alimentos?'))
    var alimentosLista = []
    var contador = 0
    while (contador < nAlimentos){
        var alimento = prompt('Qual é o alimento?')
        if (alimento.length % 2 == 1){
            alimentosLista.push(alimento)
            contador++
        } else {
            alert('Esse alimento tem número de letras par, não foi adicionado!')
        } 
    }
    return alimentosLista
}

function mostraTela(lista){
    var i = 0
    while (i < lista.length){
        document.write(`<li>${lista[i]}</li>`)
        i++
    }
}

mostraTela(validaAlimentos())