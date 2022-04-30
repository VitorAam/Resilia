var codifica = document.querySelector('#codificar')
var decodifica = document.querySelector('#decodificar')
var botao = document.querySelector('#botaoCodifica')

codifica.addEventListener("click", function (){
    botao.innerText = "Codificar"
})

decodifica.addEventListener("click", function(){
    botao.innerText = "Decodificar"
})
