const body = document.getElementById('body'),
    resultado = document.querySelector('.display'),
    calcular = document.querySelector('.result'),
    buttonTheme= document.querySelector('.theme'),
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

buttonTheme.addEventListener('click', () =>{

    body.classList.add('theme__2')
    body.classList.remove('theme__1')
    
})

if(body.classList.contains('theme__2')){
    
    buttonTheme.addEventListener('click', () =>{

        body.classList.add('theme__1')
        body.classList.remove('theme__2')
        
    })
}