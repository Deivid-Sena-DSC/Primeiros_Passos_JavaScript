document.getElementById("meuForm").addEventListener("submit", function(event){
    event.preventDefault();

    const numero_1 = Number(document.getElementById("numero").value);

    for (let i = 1; i <=10; i++) {
        resultado = numero_1 * i;
        document.getElementById("resultado").textContent += resultado + " ";
    }

});