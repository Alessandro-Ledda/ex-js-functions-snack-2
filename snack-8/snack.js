// Crea una funzione che simula un conto alla rovescia

// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, 
// con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function contoAllaRovescia(n) {
    // 1. Stampiamo il primo numero immediatamente
    console.log(n);

    // 2. Avviamo l'intervallo di 1 sec
    const timerId = setInterval(() => {
        // Decrementiamo n a ogni ciclo
        n--;

        if (n > 0) {
            // Se il numero è ancora positivo, lo stampiamo
            console.log(n);
        } else {
            // 3. Quando arriviamo a 0
            console.log(0);
            console.log("Tempo scaduto!");

            //  fermiamo il timer usando l'ID salvato
            clearInterval(timerId);
        }
    }, 1000);
}

//parte da 10 (essendo dichiarativa si puo' evocare ancghe prima della sua dichiarazione "spostarla su inn alto")
contoAllaRovescia(10);