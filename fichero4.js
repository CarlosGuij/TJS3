let num_array;
do {
    num_array = parseInt(prompt("Introduce el tamaño del array de números primos:"));
} while (isNaN(num_array) || num_array <= 0);

const numerosPrimos = [];
for (let numero = 2; numerosPrimos.length < num_array; numero++) {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        numerosPrimos.push(numero);
    }
}
document.getElementById("resultado").innerHTML = "Array de números primos: " + numerosPrimos.join(", ");
