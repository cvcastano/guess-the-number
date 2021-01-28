'use strict';

const inputElement = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const hintElement = document.querySelector('.js-hint');
const counterElement = document.querySelector('.js-counter');


//contador:
const incrCounter = () => {
    let value = parseInt(counterElement.innerHTML);
    value++;
    counterElement.innerHTML = value;
    console.log ('me han clickado');
}


   
//número random como referencia: (ejecutarse una sóla vez --> fuera)
const randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber);
   
button.addEventListener ('click', incrCounter);
