//console.log(5);
//console.log(typeof 12.7);
//console.log(typeof 'Texto');
//console.log(typeof 7);
function funcao_soma(argumento_1, argumento_2){
    return argumento_1 + argumento_2;};

var soma = funcao_soma(Number(prompt('Digite um valor')), Number(prompt('Digite outro valor')));

document.getElementById("texto_1").textContent = soma;