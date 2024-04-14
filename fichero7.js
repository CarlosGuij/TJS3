let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


let fechas = "";
for (let i = 0; i < 10; i++) {
    let dia = Math.floor(Math.random() * 31) + 1;
    let mes = meses[Math.floor(Math.random() * 12)]; 
    let año = 2024; 

    if ((mes === "Febrero" && dia > 28) || ((mes === "Abril" || mes === "Junio" || mes === "Septiembre" || mes === "Noviembre") && dia > 30) || (mes !== "Febrero" && mes !== "Abril" && mes !== "Junio" && mes !== "Septiembre" && mes !== "Noviembre" && dia > 31)) {
        dia--;
    }

    fechas += `Fecha ${i + 1}: ${dia} de ${mes} de ${año}<br>`;
}

document.getElementById("resultado").innerHTML = fechas;
