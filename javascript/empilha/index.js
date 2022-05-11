class Pilha{

    pilha = []


    empilha(valor){
        this.pilha.push(valor);
    }

    desempilha(){
        try{
            this.pilha = this.pilha.reverse()[0];
            if(this.pilha == undefined){
                throw new Error('Pilha vazia')
            } else {
                console.log(`A pilha foi desfeita e o único valor resgatado foi: ${valor}`)
            }
        } catch(erro) {
            console.log(erro)
        }
    }
}