var cliente = 'Alcides Garcia'
var conta = 67768734
var saldo = 322.95

console.log('Cliente: ' + cliente)
console.log('Conta: ' + conta)
console.log('Saldo: ' + saldo)

var depósito = 50.00
saldo += depósito
console.log('Novo depósito na conta ' + conta + '. Saldo atualizado: ' + saldo)

/*
console.log(typeof(cliente))
console.log(typeof(conta))
console.log(typeof(saldo))
console.log(typeof(depósito))
*/

//é concatenado, como se fossem duas strings, não há como ter soma de number com string de outra forma
