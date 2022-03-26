var body = document.getElementById('body'),
    checkbox = document.querySelector('.theme'),
    display = document.querySelector('.display'),
    calcular = document.querySelector('.result'),
    theme1 = document.querySelector('.theme__1'),
    theme2 = document.querySelector('.theme__2')

function insert(numb) {
    display.innerHTML += numb
}

function clean() {
    display.innerHTML = ''

    display.text(display.text().substring(0,3))
}

function backspace() {
    if(display.textContent) {
        let result = document.getElementById('disp').innerHTML
        display.innerHTML = result.substring(0, result.length -1)
    }    
}

function calc() {

    if(display.textContent != 'Erro') {
        document.getElementById('disp').innerHTML = eval(display.innerHTML)
    }


        
}

// theme selection

checkbox.addEventListener('change', function(){

    if(this.checked) {
        theme1.classList.add('theme__2')
        theme1.classList.remove('theme__1')
    }

    if(this.checked == false) {
        theme1.classList.add('theme__1')
        theme1.classList.remove('theme__2')
    }

})












