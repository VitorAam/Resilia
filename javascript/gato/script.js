class Gato {
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    miar(){
        console.log(`${this.nome} está miando! Miaaaau`)
    }

    comer(){
        console.log(`Deu fome! ${this.nome} está comendo`)
    }
}

const amelie = new Gato('Amelie', 5, 'F');

const gabriel = new Gato('Gabriel', 27, 'M');

const vitor = new Gato('Vitor', 23, 'M')

const carme = new Gato('Carme', 35, 'F');
