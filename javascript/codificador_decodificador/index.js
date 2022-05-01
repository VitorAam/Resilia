var codifica = document.querySelector('#codificar')
var decodifica = document.querySelector('#decodificar')
var botao = document.querySelector('#button_container')
var cesar = document.querySelector('#cifraDeCesar')
var base64  = document.querySelector('#base64')
var incremento = document.querySelector('#incremento')

cesar.addEventListener("click", function(){
    incremento.innerHTML = `<label for="incre">Adicione o incremento:</label>
    <input type="number" id="incre">`
})

base64.addEventListener("click", function(){
    incremento.innerHTML = ``
})

codifica.addEventListener("click", function (){
    botao.innerHTML = '<button id="action1">Codifique: </button>'
    var agirC = document.querySelector('#action1')
    agirC.addEventListener("click", function(){
        console.log('teste')
    })
})

decodifica.addEventListener("click", function(){
    botao.innerHTML = '<button id="action2">Decodifique: </button>'
    var agirD = document.querySelector('#action2')
    agirD.addEventListener("click", function(){
        console.log(cesar.checked)
    })
})


function teste(){
    var areaTexto = document.querySelector('textarea')
}