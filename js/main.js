'use strict';


const button = document.querySelector('.js-button');
const hintElement = document.querySelector('.js-hint');
const counterElement = document.querySelector('.js-counter');



const incrCounter = () => {
    let value = parseInt(counterElement.innerHTML);
    value++;
    counterElement.innerHTML = value;

    const inputElement = parseInt(document.querySelector('.js-input').value);
    console.log(inputElement);


    if (inputElement > 100 || inputElement < 1) {
        hintElement.innerHTML = 'It must be a number between 1 and 100'
    } else if (inputElement === randomNumber) {
        hintElement.innerHTML = 'You\'re the winner!!!'
    } else if (inputElement > randomNumber) {
        hintElement.innerHTML = 'Too high, try a lower number'
    } else if (inputElement < randomNumber) {
        hintElement.innerHTML = 'Too low, try a higher number'
    }
}

const randomNumber = Math.ceil(Math.random() * 100);
console.log(`The random number to guess is ${randomNumber}`);

button.addEventListener('click', incrCounter);
