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

document.getElementById("meuForm").addEventListener("submit", function(event){event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    let numero_1 = Number(document.getElementById("numero_1").value); // Obtém o valor do primeiro número e converte para tipo numérico
    let numero_2 = Number(document.getElementById("numero_2").value); // Obtém o valor do segundo número e converte para tipo numérico
    let operacao = document.getElementById("operacao").value; // Obtém o valor da operação selecionada no dropdown
    
    if (numero_1 == 0 || numero_2 == 0) {
        document.getElementById("resultado").textContent = 'Erro: Um dos números digitados é zero.';}
    else {
        if (operacao == 1)
            { document.getElementById("resultado").textContent = 'O resultado da soma dos números digitados é igual a ' + funcao_soma(numero_1, numero_2);};
        if (operacao == 2)
            { document.getElementById("resultado").textContent = 'O resultado da subtração dos números digitados é igual a ' + funcao_subtracao(numero_1, numero_2);}
        if (operacao == 3)
            { document.getElementById("resultado").textContent = 'O resultado da multiplicação dos números digitados é igual a ' + funcao_multi(numero_1, numero_2);}
        if (operacao == 4)
            { document.getElementById("resultado").textContent = 'O resultado da divisão dos números digitados é igual a ' + funcao_divisao(numero_1, numero_2);}
        if (operacao == 5)
            { document.getElementById("resultado").textContent = 'O resultado do resto da divisão dos números digitados é igual a ' + funcao_resto_divisao(numero_1, numero_2);}
        if (operacao == 6)
            { document.getElementById("resultado").textContent = 'O resultado da potência do primeiro número elevado ao segundo número é igual a ' + funcao_potencia(numero_1, numero_2);}
        else if (operacao < 1 || operacao > 6)
            { document.getElementById("resultado").textContent = 'Operação inválida. Por favor, selecione uma operação válida.';}
    }
});