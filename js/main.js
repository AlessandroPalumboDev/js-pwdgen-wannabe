"use strict";

// CREAZIONE VARIABILE DA ELEMENTO HTML
let currentText = document.getElementById('username').innerHTML;

// AGGIUNTA VARIABILE PER CALCOLO NUMERO CASUALE
let casualNumber = Math.floor(Math.random()*100);

// CREZIONE PROMPT PER INSERIMENTO DATI UTENTE
const userName = prompt('Inserisci il tuo Nome');
const userLastName = prompt('Inserisci il tuo Cognome');
const userColor = prompt('Inserisci il tuo Colore preferito');

// MODFICA VARIBILE AGGIUNGENDO DATI UTENTE E NUMERO CASUALE
currentText = currentText + ' ' + userName + ' ' + userLastName + ' ' + ("e il tuo colore preferito è:") + ' ' + userColor + '. ' + ("Visto che ci piace dare i numeri:") + ' ' + '!' + casualNumber + '!';

// STAMPA SU DOCUMENTO VARIABILE MODIFICATA CON DATI UTENTE 
document.getElementById('username').innerHTML = currentText;

// STAMPA SU CONSOLE VARIABILE MODIFICATA CON DATI UTENTE 
console.log(currentText);