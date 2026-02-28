
document.getElementById("meuForm").addEventListener("submit", function(event){
    event.preventDefault(); // Pega o evento de submit do formulário e previne o comportamento padrão (recarregar a página)

    let = numero_1 = Number(document.getElementById("numero_1").value); // Pega o valor do input com id "numero_1", converte para número e armazena na variável numero_1
    let = numero_2 = Number(document.getElementById("numero_2").value); // Pega o valor do input com id "numero_2", converte para número e armazena na variável numero_2

    if (numero_1 > numero_2) // Verifica se numero_1 é maior que numero_2
        document.getElementById("resultado").textContent = 'O maior número digitado é o primeiro: ' + numero_1;
        // Se for, exibe a mensagem indicando que o primeiro número é o maior, junto com o valor de numero_1

    else if (numero_2 > numero_1) // Verifica se numero_2 é maior que numero_1 
        document.getElementById("resultado").textContent = 'O maior número digitado é o segundo: ' + numero_2;
        // Se for, exibe a mensagem indicando que o segundo número é o maior, junto com o valor de numero_2
    
    else if (numero_1 === numero_2) // Verifica se numero_1 é igual a numero_2
        {  document.getElementById("resultado").textContent = "Os números são iguais"; };}); 
        // Se for, exibe a mensagem indicando que os números são iguais