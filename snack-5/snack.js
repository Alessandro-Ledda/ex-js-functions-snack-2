// Crea una funzione stampaOgniSecondo con setInterval.
//Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

//Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
const messaggio = "è passato un secondo"

function stampaOgniSecondo(messaggio) {
    const timerId = setInterval(() => {
        console.log(messaggio);
    }, 1000);

    return timerId;
}
const timer = stampaOgniSecondo(messaggio);

setTimeout(() => { clearInterval(timer) }, 5000)