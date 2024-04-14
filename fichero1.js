let vector = [];
for (let i = 0; i < 5; i++) {
  vector[i] = parseInt(prompt("Introduce el número " + (i+1) + ":"));
}

let suma = 0;
for (let i = 0; i < 5; i++) {
  suma += vector[i];
}
let media = suma / 5;

document.getElementById("resultado").innerHTML = "La media de los elementos del vector es " + media;