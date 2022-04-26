var paragrafo = document.createElement('p')

function abrir() {
    paragrafo.innerText = 'Estamos abertos!'
    document.querySelector('#resultado').append(paragrafo)
}

function fechar() {
    paragrafo.innerText = 'Estamos fechados!'
}