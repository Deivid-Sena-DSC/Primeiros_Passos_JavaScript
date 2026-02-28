// Função para realizar operações matemáticas e comparações
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
    return argumento_1 == argumento_2}



/* Adiciona um ouvinte de evento para o formulário com id "meuForm"
que executa a função quando o formulário é submetido */

document.getElementById("meuForm").addEventListener("submit", function(event){
    event.preventDefault();
    let numero_1 = document.getElementById("numero_1").value;
    let numero_2 = document.getElementById("numero_2").value;
    
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
    document.getElementById("igual").textContent = 'O Primeiro numero digitado é IGUAL ao segundo numero digitado? ' + funcao_igual(numero_1, numero_2);});

    
document.getElementById("meuForm2").addEventListener("submit", function(event_2){
    event_2.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    document.getElementById("nome_result").textContent = 'O nome digitado é ' + nome;
    document.getElementById("email_result").textContent = 'O email digitado é ' + email;});

// document.write(true && true); // && verifica de as duas condições são verdadeiras.
// document.write(false || false); // || verifica se mais nas condicões e verdadeira.
// document.write(true != false); // comparação de diferenção
// document.write(numero_1 === numero_2? 'Não é' : 'É Sim');