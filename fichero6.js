let jugador1Gana = 0;
let jugador2Gana = 0;
let empates = 0;

for (let i = 0; i < 10; i++) {
    const dadoJugador1 = Math.floor(Math.random() * 6) + 1;
    const dadoJugador2 = Math.floor(Math.random() * 6) + 1;

    if (dadoJugador1 > dadoJugador2) {
        jugador1Gana++;
    } else if (dadoJugador2 > dadoJugador1) {
        jugador2Gana++;
    } else {
        empates++;
    }
}

let resultado;
if (jugador1Gana > jugador2Gana) {
    resultado = "El jugador 1 gana más tiradas.";
} else if (jugador2Gana > jugador1Gana) {
    resultado = "El jugador 2 gana más tiradas.";
} else {
    resultado = "Hay un empate en el número de tiradas ganadas.";
}

const totalTiradas = 10;
const porcentajeJugador1 = (jugador1Gana / totalTiradas) * 100;
const porcentajeJugador2 = (jugador2Gana / totalTiradas) * 100;

document.getElementById("resultado").innerHTML = `<p>${resultado}</p>
    <p>Jugador 1 ganó ${jugador1Gana} tiradas (${porcentajeJugador1.toFixed(2)}% del total).</p>
    <p>Jugador 2 ganó ${jugador2Gana} tiradas (${porcentajeJugador2.toFixed(2)}% del total).</p>
    <p>Hubo ${empates} empates.</p>`;
