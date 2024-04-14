const letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';

let numeroDNI;
do {
    numeroDNI = prompt("Introduce el número de tu DNI:");
} while (isNaN(numeroDNI) || numeroDNI.length !== 8);

const numero = parseInt(numeroDNI) % 23;
const letraDNI = letrasDNI.charAt(numero);

document.getElementById("resultado").innerHTML = `La letra de tu DNI es: ${letraDNI}`;
