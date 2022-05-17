function operacoesArit(nOp) {
    const numbers = Array(nOp);
    const results = numbers.map( () => { Math.floor(Math.random() * 10000000) } );
}

$('#submit').click(function(){
    event.preventDefault()
    let antes = Date.now();
    operacoesArit(Number($('#pk-name').val()));
    let duracao = Date.now() - antes;
    console.log(duracao)
})