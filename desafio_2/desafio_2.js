/* PERGUNTANDO AO USUÁRIO A QUANTIDADE DE NÚMEROS QUE ELE PRETENDE DIGITAR */
const qtd_numero = Number(prompt("Digite a quantidade de números que deseja inserir: "));

/* VARIAVEL QUE VAI ARMAZENAR A QUANTIDADE DE NÚMEROS POSITVOS*/
var numeros_positivos = 0;

/* LISTA DE NUMEROS POSITIVOS INSERIDOS*/
var lista_numeros_positivos = [];

/* VARIAVEL QUE VAI ARMAZENAR A QUANTIDADE DE NÚMEROS NEGATIVOS*/
var numeros_negativos = 0;

/* LISTA DE NUMEROS NEGATIVOS INSERIDOS*/
var lista_numeros_negativos = [];

/* ENQUANDO A VARIAVERL quantidade FOR MENOR QUE A const qtd_numero "QUANTIDADE DE NÚMEROS QUE USUÁRIOS DESEJA DIGITAR" quantidade SOMA O VALOR ATUAL DELA MAIS 1 */
for (let quantidade = 0; quantidade < qtd_numero; quantidade++) {

    /* PERGUNTANDO AO USUÁRIOS OS NÚMEROS QUE ELE QUER DIGITAR*/ 
    const numero = Number(prompt("Digite um número: "));

    /* SE O NÚMERO DIGITADO PELO USUÁRIO FOR IGUAL A ZERO EXIBE A MENSAGEM DE ERRO*/
    if (numero === 0)
         {console.log("Erro o número digitado foi zero")}

    /* SE O NUMERO DIGITADO FOR POSITIVO SOMA MAIS 1 NA VARIVAEL numeros_positivos */
    else if (numero > 0)
          lista_numeros_positivos.push(numero)}

    /* SE O NUMERO DIGITADO FOR NEGATIVO SOMA MAIS 1 NA VARIAVEL numeros_negativos*/
    else
         {numeros_negativos++, lista_numeros_negativos.push(numero)}
}

/* EXIBINDO RESULTADOS */
console.log("Você inseriu " + qtd_numero + " números.\n");
console.log("A quantidade de números positivos foi: \n" + numeros_positivos);
console.log("Os números positivos inseridos foram: " + lista_numeros_positivos.join(", "));
console.log("A quantidade de números negativos foi: \n" + numeros_negativos);
console.log("Os números negativos inseridos foram: " + lista_numeros_negativos.join(", "));    