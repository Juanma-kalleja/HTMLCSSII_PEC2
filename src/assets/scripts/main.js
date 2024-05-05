/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';


// import 'some-node-module';
// import SomeModule from 'some-node-module';


/**
 * Write any other JavaScript below
 */

//Función para generar un número aleatorio entre mínimo y máximo
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Función para generar cuatro números aleatorios diferentes entre 1 y 4
function generateRandomNumbers() {
  var randomNumbers = [];
  for (var i = 0; i < 4; i++) {
    randomNumbers.push(getRandomNumber(1, 4));
  }
  return randomNumbers;
}

//Función para actualizar las propiedades personalizadas de CSS con valores aleatorios cada 5 segundos
function updateDynamicValues() {
  var randomNumbers = generateRandomNumbers();

  document.documentElement.style.setProperty('--dynamic-value-1', randomNumbers[0]);
  document.documentElement.style.setProperty('--dynamic-value-2', randomNumbers[1]);
  document.documentElement.style.setProperty('--dynamic-value-3', randomNumbers[2]);
  document.documentElement.style.setProperty('--dynamic-value-4', randomNumbers[3]);
}

// Llama inicialmente a la función updateDynamicValues ​​para establecer los valores iniciales con varias líneas.
updateDynamicValues();

//Establece el intervalo para actualizar los valores cada 5 segundos.
setInterval(updateDynamicValues, 5000);

