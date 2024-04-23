"use strict";

let currentText = document.getElementById('username').innerHTML;

const userName = prompt('Inserisci il tuo Nome');
const userLastName = prompt('Inserisci il tuo Cognome');
const userColor = prompt('Inserisci il tuo Colore preferito');

currentText = currentText + ' ' + userName + ' ' + userLastName + ' ' + ("e il tuo colore preferito è:") + ' ' + userColor;

document.getElementById('username').innerHTML = currentText;

console.log(currentText);