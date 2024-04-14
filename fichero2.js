let clasificacion = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];
let resultado = "";

resultado += "<h2>Clasificación inicial:</h2>\n";
resultado += `<p>${clasificacion.join(", ")}</p>\n\n`;

clasificacion.splice(clasificacion.indexOf("Raúl"), 1);
clasificacion.splice(clasificacion.indexOf("Celia") + 1, 0, "Raúl");

clasificacion.splice(clasificacion.indexOf("Antonio"), 1);

clasificacion.splice(1, 0, "Roberto", "Amaya");

clasificacion.unshift("Marta");

resultado += "<h2>Clasificación actualizada:</h2>\n";
resultado += `<p>${clasificacion.join(", ")}</p>\n`;

document.getElementById("resultado").innerHTML = resultado;
