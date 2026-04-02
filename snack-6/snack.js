// Crea un contatore automatico con setInterval

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e 
// restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(time) {
    return function () {
        let count = 0;
        const id = setInterval(() => {
            count++;
            console.log(count)
        }, time)
        // ritorno l'id per bloccare il loop
        return id;
    }
}


const timer = creaContatoreAutomatico(1000);
const contatoreId = timer();

// servendoci del setTimaut settiamo un range massimo di durata (5sec)(bloccaggio loop)
setTimeout(() => clearInterval(contatoreId), 5000);