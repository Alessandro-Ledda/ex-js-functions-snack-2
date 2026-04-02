// Crea una funzione che somma due numeri
console.log("sono il file js");
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(num1, num2) {
    return num1 + num2;
}

// variabile per salvataggio risultato somma 
let risultato = somma(10, 7);

// stampo in console la variabile che racchiude la mia funzione somma 
console.log("la somma dei numeri scelti è " + risultato);

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const sommaNum = function (a, b) {
    return a + b;
}

console.log("la somma dei secondi due nuemri scelti è " + sommaNum(+ 3, 6));

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const sommaArr = (c, d) => {
    return c + d;
}

console.log("la somme dei terzi numeri scelti è " + sommaArr(3, 4));