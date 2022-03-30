var body = document.getElementById('body'),
    checkbox = document.querySelector('.theme'),
    display = document.querySelector('.display'),
    calcular = document.querySelector('.result'),
    theme1 = document.querySelector('.theme__1'),
    theme2 = document.querySelector('.theme__2')

function insertNum(numb) {


    var numberInsert = numb

    display.value += numberInsert

}

function clean() {
    display.value = ''
}

function backspace() {
    if(display.value !== '') {
        let result = document.getElementById('disp').value
        display.value = result.substring(0, result.length -1)
    }    
}

function calc() {

    if(display.value != 'Erro') {
        
        display.value = eval(display.value)

    }

    if(display.value == 'undefined'){

        display.value = ""
        
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