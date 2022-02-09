const body = document.getElementById('body'),
    resultado = document.querySelector('.display'),
    calcular = document.querySelector('.result'),
    theme1 = document.querySelector('.theme__1'),
    theme2 = document.querySelector('.theme__2');
    


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

// theme selection


theme1.addEventListener('click', function(){

    theme1.classList.remove('theme__1')
    theme1.classList.add('theme__2')
})

theme2.addEventListener('click', function(){

    theme2.classList.remove('theme__2')
    theme2.classList.add('theme__1')
})