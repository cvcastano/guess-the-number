'use strict';


const button = document.querySelector('.js-button');
const hintElement = document.querySelector('.js-hint');
const counterElement = document.querySelector('.js-counter');


//contador:
const incrCounter = () => {
    let value = parseInt(counterElement.innerHTML);
    value++;
    counterElement.innerHTML = value;
    console.log('me han clickado');

    //número que se escribe en el input:
    const inputElement = parseInt(document.querySelector('.js-input').value);
    console.log(inputElement);

    //condicional para acotar el número:
    if (inputElement > 100 || inputElement < 1) {
           hintElement.innerHTML = 'El número debe estar entre 1 y 100'
        } else if (inputElement === randomNumber) {
            hintElement.innerHTML = 'Has ganado, campeona!!!'
        } else if (inputElement > randomNumber) {
            hintElement.innerHTML = 'Demasiado alto'
        } else if (inputElement < randomNumber) {
            hintElement.innerHTML = 'Demasiado bajo'
        }
    }





//número random como referencia: (ejecutarse una sóla vez --> fuera) PERO AL CLICKAR, NO ANTES, NO?
const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

button.addEventListener('click', incrCounter);
