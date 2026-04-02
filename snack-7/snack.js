// Crea una funzione che ferma un timer dopo un certo tempo

// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. 
// Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.


function eseguiEferma(messaggio, tempAvvio, tempStop) {
    setTimeout(() => {
        console.log("sto avviando il programma");

        // facciamo partire l'intervallo + salvataggio id su una variabile per stop
        // facciamo partire l'intervallo a ogni secondo
        const intervalId = setInterval(() => {
            console.log(messaggio);
        }, 1000);

        // setto lo stop del tempo
        setTimeout(() => {
            clearInterval(intervalId);
            console.log("programma terminato")
        }, tempStop)
    }, tempAvvio)

}

// partenza dopo 3 sec e chiusura dopo i 6 sec corrispondono a tempavvio e tempstop
eseguiEferma("programma in fase di elaborazione.....", 3000, 6000);

