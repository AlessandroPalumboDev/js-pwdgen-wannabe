"use strict";

// CREAZIONE VARIABILE DA ELEMENTO HTML
let currentText = document.getElementById('password').innerHTML;

// AGGIUNTA VARIABILE PER CALCOLO NUMERO CASUALE
let casualNumber = Math.floor(Math.random()*100);

// CREZIONE PROMPT PER INSERIMENTO DATI UTENTE
const firstName = prompt('Inserisci il tuo Nome');
const lastName = prompt('Inserisci il tuo Cognome');
const userColor = prompt('Inserisci il tuo Colore preferito');

// MODFICA VARIBILE AGGIUNGENDO DATI UTENTE E NUMERO CASUALE
currentText = currentText + firstName + lastName + userColor + casualNumber;

// STAMPA SU DOCUMENTO VARIABILE MODIFICATA CON DATI UTENTE 
document.getElementById('password').innerHTML = currentText;

// STAMPA SU CONSOLE VARIABILE MODIFICATA CON DATI UTENTE 
console.log(currentText);