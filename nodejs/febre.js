import chalk from "chalk";

function temperaturaPaciente(temperatura){
    return new Promise ((resolvido, rejeitado)=> {
        setTimeout(() => {
            if(temperatura<=37.5){
                resolvido(chalk.green("Paciente não-febrio"))
            } else {
                rejeitado(chalk.red("Paciente febrio"))
            }
        }, 3000);
    })
};

let temp = 36;

temperaturaPaciente(temp)
.then((msg)=>{
    console.log(msg)
})
.catch((error)=>{
    console.log(error)
})