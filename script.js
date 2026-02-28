//console.log(5);
//console.log(typeof 12.7);
//console.log(typeof 'Texto');
//console.log(typeof 7);

function funcao_soma(argumento_1, argumento_2){
    return argumento_1 + argumento_2};

function funcao_subtracao(argumento_1, argumento_2){
    return argumento_1 - argumento_2;};    

function funcao_multi(argumento_1, argumento_2){
    return argumento_1 * argumento_2};

function funcao_divisao(argumento_1, argumento_2){
    return argumento_1 / argumento_2;};

function funcao_resto_divisao(argumento_1, argumento_2){
    return argumento_1 % argumento_2;};
    
function funcao_potencia(argumento_1, argumento_2){
    return argumento_1 ** argumento_2;};

function funcao_maior_igual(argumento_1, argumento_2){
    return argumento_1 >= argumento_2;};    

function funcao_menor_igual(argumento_1, argumento_2){
    return argumento_1 <= argumento_2;};

function funcao_igual(argumento_1, argumento_2){
    return argumento_1 === argumento_2}

var  numero_1 = Number(prompt('Digite um valor'));
var  numero_2 = Number(prompt('Digite outro valor'));

document.getElementById("numero_1").textContent = 'O Primeiro numero digitado é ' + numero_1;
document.getElementById("numero_2").textContent = 'O Segundo numero digitado é ' + numero_2;
document.getElementById("soma").textContent = 'A Soma dos numeros digitados é igual a ' + funcao_soma(numero_1, numero_2);
document.getElementById("subtracao").textContent = 'A Subtração dos numeros digitados é igual a ' + funcao_subtracao(numero_1, numero_2);
document.getElementById("mult").textContent = 'A multiplicação dos números digitados é ' + funcao_multi(numero_1, numero_2);
document.getElementById("divisao").textContent = 'A divisão dos números digitados é igual a ' + funcao_divisao(numero_1, numero_2);
document.getElementById("resto_divisao").textContent = 'O resto da divisão dos números digitados é igual a ' + funcao_resto_divisao(numero_1, numero_2);
document.getElementById("potencia").textContent = 'A potência do primeiro numero elevado ao segundo é igual ' + funcao_potencia(numero_1, numero_2);
document.getElementById("maior_igual").textContent = 'O Primeiro numero digitado é MAIOR ou igual ao segundo numero digitado? ' + funcao_maior_igual(numero_1, numero_2); 
document.getElementById("menor_igual").textContent = 'O Primeiro numero digitado é MENOR ou igual ao segundo numero digitado? ' + funcao_menor_igual(numero_1, numero_2);
document.getElementById("igual").textContent = 'O Primeiro numero digitado é IGUAL ao segundo numero digitado? ' + funcao_igual(numero_1, numero_1);

document.write(true && true); // && verifica de as duas condições são verdadeiras.
document.write(false || false); // || verifica se mais nas condicões e verdadeira.
document.write(true != false); // comparação de diferenção
document.write(numero_1 === numero_2? 'Não é' : 'É Sim'); 
