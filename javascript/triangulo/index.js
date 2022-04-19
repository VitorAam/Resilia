/*function linhaAsterisco (){
    var num = prompt('Escreva um número')
    var linhazinha = ''
    for(var contador = 0; contador < num; contador++){
        linhazinha += '*'
    }
    return linhazinha
}

document.write(linhaAsterisco())*/

function trianguloAsterisco(num2){
    num2 = prompt('Escreva um número')
    var linhazona = ''
    for(var contador = 0; contador < num2; contador++){
        linhazona += '*'
        document.write(`${linhazona} <br>`)
    }
}

trianguloAsterisco()