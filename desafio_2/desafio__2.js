document.getElementById("meuForm").addEventListener("submit", function(event){event.preventDefault();
    var qtd_numeros = document.getElementById("qtd_numeros").value;

    numeros_positivos = 0;
    numeros_negativos = 0;

    lista_numeros_positivos = [];
    lista_numeros_negativos = [];


    for (let quantidade = 0; quantidade < qtd_numeros; quantidade++) {
        
        if (numero > 0) {
            numeros_positivos++;
            lista_numeros_positivos.push(numero);

        }
        else if (numero < 0) {
            numeros_negativos++;
            lista_numeros_negativos.push(numero);
        }
    }

    document.getElementById("numeros_positivos").innerHTML = "Números positivos: " + lista_numeros_positivos;
    document.getElementById("quantidade_numeros_positivos").innerHTML = "Quantidade de números positivos: " + numeros_positivos;
    document.getElementById("resultado").innerHTML = "Você digitou " + qtd_numeros;
    document.getElementById("numeros_negativos").innerHTML = "Números negativos: " + lista_numeros_negativos;
    document.getElementById("quantidade_numeros_negativos").innerHTML = "Quantidade de números negativos: " + numeros_negativos;});
