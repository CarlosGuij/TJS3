const array1 = [];
let numero = parseInt(prompt("Introduce un número entero para el primer array (0 para terminar):"));
while (numero !== 0) {
    array1.push(numero);
    numero = parseInt(prompt("Introduce otro número entero para el primer array (0 para terminar):"));
}

const array2 = [];
numero = parseInt(prompt("Introduce un número entero para el segundo array (0 para terminar):"));
while (numero !== 0) {
    array2.push(numero);
    numero = parseInt(prompt("Introduce otro número entero para el segundo array (0 para terminar):"));
}

let resultado;
if (array1.length !== array2.length) {
    resultado = "Los arrays proporcionados no tienen la misma longitud.";
} else {
    resultado = "El producto de los elementos en las mismas posiciones de los dos arrays es: ";
    for (let i = 0; i < array1.length; i++) {
        resultado += (array1[i] * array2[i]) + ", ";
    }
    resultado = resultado.slice(0, -2);
}

document.getElementById("resultado").innerHTML = resultado;
