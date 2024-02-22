const numbers1 = document.querySelector(".numbers1")

const numbers2 = document.querySelector(".numbers2")

const numbers3 = document.querySelector(".numbers3")
const h1 = document.querySelector(".h1-title")
const btn = document.querySelector(".btn")

const contadorHourBox = document.getElementById("hour")
contadorHourBox.classList.add("hour")


document.addEventListener("dblclick", (()=> {
    const intervalo = setInterval(incrementarContador, 1000);
    const intervaloMinutos = setInterval(incrementarMinutos, 60000);
    const intervaloHoras = setInterval(incrementarHoras, 3600000);
    h1.style.opacity = 0;
    h1.style.color = "#666"
}))

numbers1.innerText = "00"
numbers2.innerText = "00"
numbers3.innerText = "00"


let segundos = 0;
let minutos = 0
let horas = 0;
    // Función para incrementar el contador y actualizar la visualización
function incrementarContador() {
    segundos++
     if(segundos >= 60) {
        segundos = -1
        segundos++;
    }
        if(segundos <= 9) {
        numbers2.innerText = "0" + segundos;
        } else {
            numbers2.innerText = segundos; 
        }
}

function incrementarMinutos() {
    minutos++
    if(minutos >= 60){
        contadorHourBox.classList.remove("hour")
    }
     if(minutos > 60) {
        minutos = -1;
        minutos++;
    }
    if(minutos <= 9) {
        numbers1.innerText = "0" + minutos;
    } else {
        numbers1.innerText = minutos;
    }
}

function incrementarHoras() {
    horas++;
    if(horas >= 24) {
        horas = -1
        horas++;
    }
        if(horas <= 9) {
        numbers3.innerText = "0" + horas;
        } else {
            numbers3.innerText = horas; 
        }
}

    // Configurar el intervalo para llamar a la función cada segundo (1000 milisegundos)

    // Puedes detener el contador después de un cierto tiempo, por ejemplo, después de 10 segundos
