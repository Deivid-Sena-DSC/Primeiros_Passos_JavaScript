let numero = Number(prompt('Digite um valor inteiro positivo '));

if (!Number.isInteger(numero) || numero <= 0) {
    console.log('Valor inválido. Por favor, digite um número inteiro positivo.');
}
else {
    for (let contador = 1; contador <= numero; contador++) {
        console.log(contador);
    }
}