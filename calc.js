const resultado = document.querySelector('.display')
const calcular = document.querySelector('.result')
const keys = document.querySelectorAll('keys')

// if(resultado = '') {
//     resultado.innerHTML = resultado.innerHTML.substring(0,2)
// }

function insert(numb) {
    resultado.innerHTML += numb
}

function clean() {
    resultado.innerHTML = ''
}

function backspace() {
    if(resultado.textContent) {
        let result = document.getElementById('disp').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1)
    }    
}

function calc() {
    if(resultado.textContent != 'Erro') {
        document.getElementById('disp').innerHTML = eval(resultado.innerHTML)
    }

    resultado.innerHTML = resultado.innerHTML.substring(0,16)
        
}





























// function insert(num) {
//     var numero = document.getElementById('display').innerHTML
//     document.getElementById('display').innerHTML = numero + num
// }

// function clean() {
//     document.getElementById('display').innerHTML = ""
// }

// function back() {
//     var resultado =document.getElementById('display').innerHTML
//     document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1)
// }

// function calcular(params) {
//     var resultado =document.getElementById('display').innerHTML

//     if (resultado) {
//         document.getElementById('display').innerHTML = eval(resultado).toFixed(2)
//     }
//     else {
//         var resultado =document.getElementById('display').innerHTML = 'ERROR'
//     }
// }