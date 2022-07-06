import chalk from "chalk";


function comunicacaoPerdida(){
    const randomizacao = Math.floor(Math.random() * 2) + 1
    setTimeout(()=>{
        const estação = new Promise((resolve, reject) => {
            if(randomizacao==1){
                resolve('Ok, todos vivos na estação')
            }else{
                reject('Comunicação perdida')
            }
        })
        .then((retorno) =>{
            console.log(chalk.blue(`Sucesso: ${retorno}`))
        })
        .catch((erro) => {
            console.log(chalk.red(`Falha: ${erro}`))
        });
    },
    2500)
};

comunicacaoPerdida()

