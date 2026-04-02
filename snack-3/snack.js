// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri:
// due numeri e una funzione operatore (callback).
// La funzione deve eseguire l'operazione fornita sui due numeri.

// creazione funzione di call per settaggio operazioni
const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) => a / b;

// definizione funzione eseguiOperazione
function eseguiOperazione(a, b, operazione) {
    return operazione(a, b)
}

console.log(eseguiOperazione(4, 3, somma));
console.log(eseguiOperazione(4, 3, sottrazione));
console.log(eseguiOperazione(4, 3, moltiplicazione));
console.log(eseguiOperazione(4, 3, divisione).toFixed(2));