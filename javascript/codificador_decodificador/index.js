var codifica = document.querySelector('#codificar')
var decodifica = document.querySelector('#decodificar')
var botao = document.querySelector('#button_container')
var cesar = document.querySelector('#cifraDeCesar')
var base64  = document.querySelector('#base64')
var incremento = document.querySelector('#incremento')
var res = document.querySelector('#answer')


cesar.addEventListener("click", function (){
    incremento.innerHTML = `<label for="incre">Adicione o passo:</label>
    <input type="number" id="incre">`
})

base64.addEventListener("click", function (){
    incremento.innerHTML = ``
})

codifica.addEventListener("click", function (){
    //Criação do botão de codificação
    botao.innerHTML = '<button id="action">Codifique: </button>'
    var msg = document.querySelector('#msg').value
    var agir = document.querySelector('#action')
    //Ação do botão de codificação
    agir.addEventListener("click", function (){
        //O IF é no caso de ser base64, else para cifra de cesar
        if (cesar.checked == false){
        //Essa parte do código é para codificar base64
            res.innerHTML = `<span>Codificado:</span><p>${btoa(document.querySelector('#msg').value)}</p>`
        } else {
        //Essa parte do código é para codificar em Cifra de César
            var incre = Number(document.querySelector('#incre').value)
            var stringf = ''
            for (var i = 0; i<msg.length; i++){
            //Passagem por cada elemento da mensagem original
                if (msg.charCodeAt(i) > 96 && msg.charCodeAt(i) < 123){
                    //Elemento que está no alfabeto em minúscula
                    var r = msg.charCodeAt(i) + incre
                    //Reinicia o alfabeto quando o código passa do correspondente à última letra
                    while(r > 122){
                        r = (r-122)+96
                    }
                    //Adiciona o elemento com a codificação à string final
                    stringf += String.fromCharCode(r)
                } else if (msg.charCodeAt(i) > 64 && msg.charCodeAt(i) < 91){
                    //Elemento que está no alfabeto em maiúscula
                    var r = msg.charCodeAt(i) + incre
                    //Reinicia o alfabeto quando o código passa do correspondente à última letra
                    while(r > 90){
                        r = (r-90)+64
                    }
                    //Adiciona o elemento com a codificação à string final
                    stringf += String.fromCharCode(r)
                } else {
                    //Elemento que não está no alfabeto
                    stringf += msg[i]
                }
            }
            //Resposta final da codificação
            res.innerHTML = `<span>Codificado:</span> <p>${stringf}</p>`
        }
    })
})

//O evento a seguir é o de decodificação, ele segue a mesma base do evento de codificação, basta ler os comentários anteriores e realizar a comparação.

decodifica.addEventListener("click", function(){
    botao.innerHTML = '<button id="action">Decodifique: </button>'
    var msg = document.querySelector('#msg').value
    var agir = document.querySelector('#action')
    agir.addEventListener("click", function(){
        //O IF é no caso de ser base64, else para cifra de cesar
        if (cesar.checked == false){
            res.innerHTML = `<span>Decodificado:</span><p>${atob(document.querySelector('#msg').value)}</p>`
        } else {
            var incre = Number(document.querySelector('#incre').value)
            var stringf2 = ''
            for (var i = 0; i<msg.length; i++){
                if (msg.charCodeAt(i) > 96 && msg.charCodeAt(i) < 123){
                    var r = msg.charCodeAt(i) - incre
                    while(r < 97){
                        r = r+26
                    }
                    stringf2 += String.fromCharCode(r)
                } else if (msg.charCodeAt(i) > 64 && msg.charCodeAt(i) < 91){
                    var r = msg.charCodeAt(i) - incre
                    while(r<65){
                        r = r+26
                    }
                    stringf2 += String.fromCharCode(r)
                } else {
                    stringf2 += msg[i]
                }
            }
            res.innerHTML = `<span>Decodificado:</span><p>${stringf2}</p>`
        }
    })
})
