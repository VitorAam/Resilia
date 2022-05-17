const date = new Date();
const today = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();

class Cliente {
    constructor(nome, data, ativo){
        this.nome = nome;
        this.cadastrado_em = data;
        this.ativo = ativo;
    }
};

const userList = {
    usuarios: [],
    criaTeste: function(){
        this.usuarios.push(new Cliente('Vitor', today, true))
        this.usuarios.push(new Cliente('Fernando', today, true))
        this.usuarios.push(new Cliente('Augusto', '23-04-2019', false))
    },
    novoUsuario: function(){
        this.usuarios.push(new Cliente(prompt, prompt, prompt))
    } ,
    ordemAlfabetica: function(){
        for(let i = 0; i<this.usuarios.length; i++){
            console.log(this.usuarios[i])
        }
    }
};
