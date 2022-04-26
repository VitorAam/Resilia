function validaCpf(){
    var cpf = prompt('Qual o seu CPF?')
    while(true){
        if(isNaN(cpf) == false && cpf.length == 11){
            alert('Valor fornecido para CPF validado com sucesso!')
            break;
        } else {
            alert('Valor fornecido para CPF inválido!')
            alert(typeof cpf)
            cpf = prompt('Qual seu CPF?')
        }
    }
}