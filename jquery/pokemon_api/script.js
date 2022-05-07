var botao = document.querySelector('#submit')

botao.addEventListener('click', function(){
    event.preventDefault()
    //Pegando o valor do input com o .value
    var texto = document.querySelector('#pk-name').value;
    var divResultado = document.querySelector('.poke-info');
    //O objeto do JQuery é o '$', e seu metódo é o ajax()
    $.ajax({
        //O valor do input de pesquisa é passado para a url que direciona
        url: `https://pokeapi.co/api/v2/pokemon/${texto}`,
        success: function (result){
            //O objeto que vem como retorno dessa function do success é o resultado da requisição
            var objString = JSON.stringify(result)
            //A transformação do objeto em string para que ele possa ser exibido
            divResultado.innerHTML = `<p>${objString}</p>`
            //Exibição do objeto na div por meio do innerHTML da divResultado
        }
    })
})
