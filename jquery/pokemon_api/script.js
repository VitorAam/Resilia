var botao = document.querySelector('#submit')

botao.addEventListener('click', function(){
    event.preventDefault()
    //Pegando o valor do input com o .value
    var texto = document.querySelector('#pk-name').value.toLowerCase();
    //O objeto do JQuery é o '$', e seu metódo é o ajax()
    $.ajax({
        //O valor do input de pesquisa é passado para a url que direciona
        url: `https://pokeapi.co/api/v2/pokemon/${texto}`,
        //O objeto que vem como retorno dessa function do success é o resultado da requisição
        success: function (result){
            //Exibição dos elementos do objeto se utilizando da função criada
            showToUser(result)
        }
    })
})

//Dei as atribuições de mostrar em tela para outra função, para facilitar manuntenção e entendimento
function showToUser(result){
    //No JQuery o objeto é referenciado com o uso de $
    let img = result.sprites.front_default;
    //Depois de selecionado o objeto pelo JQuery, o attr serve para atribuir algo a um dos seus valores
    $('#name').html(`A wild ${result.name.toUpperCase()} appears!`)
    $('#img').attr('src', img);
    $('#img').attr('alt', result.name)
    $('#height').html(`ALTURA: ${result.height}0 cm`);
    $('#weight').html(`PESO: ${result.weight}g`);
    $('#moves').html(`MOVIMENTO: ${result.moves[0].move.name}`);
    $('#abilities').html(`HABILIDADE: ${result.abilities[0].ability.name}`)
}
