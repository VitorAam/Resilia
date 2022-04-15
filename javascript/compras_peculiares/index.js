function confereAlimentos(){
    var numeroAlimento = window.prompt('Quantas comidas você quer colocar?')
    var alimentos = []
    var contador = 0
    while(contador != numeroAlimento){
        var alimento = window.prompt('Qual o alimento você quer adicionar?')
        if (alimento.length % 2 == 1){
            alimentos.push(alimento)
            contador++
        } else {
            window.alert('Comida inválida, insira outra!')
        }
    }
    return alimentos
}
    
function mostraTela(itens){
    var cont = 0
    while(cont < itens.length){
        document.write(`<li>${itens[cont]}</li>`)
        cont++
    }
}

mostraTela(confereAlimentos())