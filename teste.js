function changeButton1() {
    let btn = document.getElementById('btn');
    btn.innerText="Codificar Mensagem!"
}

function changeButton2() {
    let btn = document.getElementById('btn');
    btn.innerText="Decodificar Mensagem!"
}
var final = document.querySelector('#txtsaida');
var entrada = document.querySelector('#txtentrada');

var codDecod = document.querySelector('#btn');
var codSelect = document.querySelector('#codificar');
var decodSelect = document.querySelector('#decodificar');

var cifraCesar = document.querySelector('#cifraCesar');
var base64 = document.querySelector('#base64');

var cifrasSelect = document.getElementById('cifras')

var txts = [entrada];
txts.forEach( input => {
  input.oninput = () => {
    input.value = input.value.toUpperCase();
  }
});

codDecod.addEventListener('click', function(){
    event.preventDefault()
    var cifrasIndex = cifrasSelect.selectedIndex;
    var chave = Number(document.getElementById('chave').value)
    var saida = '';
    entrada = document.querySelector('#txtentrada').value
    if (cifrasIndex == 1 && codSelect.checked == true){
        for (var i = 0; i < entrada.length; i++){
            if (entrada.charCodeAt(i) < 65 || entrada.charCodeAt(i) > 90){
                saida += entrada[i];
            } else {
                var r = entrada.charCodeAt(i) + chave;
                while (r > 90){
                    r = (r - 90) + 65; 
                }
                saida += String.fromCharCode(r);
            }
        }
        final.innerHTML= `${saida}`
    } else if (cifrasIndex == 2 && decodSelect.checked == true){
        alert("deu else if")
    } else {
        alert("deu else")
    }
});