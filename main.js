// const teclas = document.querySelectorAll('.tecla')
// const visor = document.querySelector('.visor')
// const resultado = document.querySelector('.l')
// const desligar = document.querySelector('.d')

// teclas.forEach((elemento) => {
//     elemento.addEventListener("click", (evento) => {
//         addVisor(eval(evento.target.textContent))
//     })
// })

// console.log(visor.value)

// function addVisor (numero){
//     if (visor.textContent === "0") {
//         visor.textContent = numero
//     } else{
//         visor.textContent += numero
//     }

// }

const teclas = document.querySelectorAll('.tecla')
var visor = document.querySelector('.visor')
const operador = document.querySelectorAll('.operador')
const igual = document.querySelector('.igual')
const apagarGeral = document.querySelector('.delete')
const trocaSinal = document.querySelector('.trocaSinal')
const porcento = document.querySelector('.porcentagem')


function converte(numeros) {
    numeros = parseInt(numeros)

    return numeros
}

function addVisor(numeros) {
    if (visor.value === "0") {
        visor.value = numeros
    }else{
        visor.value += numeros
    }
}

function calcular(){
    visor.value = eval(visor.value)
}

function apagar() {
    visor.value = "0"
}

function trocandoSinal() {
        visor.value = visor.value * (-1)
    
}

function porcentagem() {
    visor.value = visor.value /100

}

teclas.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        addVisor(converte(evento.target.textContent))
    })
})

operador.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        addVisor(evento.target.textContent)
    })
})

igual.addEventListener("click", () => {
    calcular()
})

apagarGeral.addEventListener("click", () => {
    apagar()
})

trocaSinal.addEventListener("click", () => {
    trocandoSinal()
})

porcento.addEventListener("click", () => {
    porcentagem()
})

document.querySelector("#btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
})