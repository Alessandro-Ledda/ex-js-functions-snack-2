// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e 
// restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

// setto funzione che accetta un tempo che ritorna una seconda funzione per gestione intervallo 
function creaTimer(time) {
    return function () {
        setInterval(() => {
            console.log("tempo scaduto!!")
        }, time);
    };
}

// setto il tempo di attesa a 3 secondi
const timer = creaTimer(3000);

// invoco la timer per stampare (dopo 3 secondi)
timer();