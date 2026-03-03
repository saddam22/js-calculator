const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        const value = button.getAttribute('data-value');
        if(value){
            display.value += value;
        }
    });
});

clear.addEventListener('click', () =>{
    display.value = '';
});

equals.addEventListener('click', () =>{
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = 'Error';
    }
});