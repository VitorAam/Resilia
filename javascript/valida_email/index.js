var email = prompt('Qual o seu email?')

function validaEmail(){
    if (email.indexOf('@') > 0){
        return true
    } else {
        return false
    }
}

function exibeResultadoValidacao(valida){
    if(valida == true){
        document.write('Email validado')
    } else {
        document.write('Email fornecido inválido')
    }
}

exibeResultadoValidacao(validaEmail())