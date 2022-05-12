// l'utente sceglie tra pari e dispari
const scelta = prompt("scegli tra pari e dispari");
console.log("scelta",scelta);
// l'utente sceglie un numero tra 1 e 5 da inserire in un input
const userNum = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("sceltaNumero",userNum);
// puntata del pc 
let ranNum = getRandomNumPc( 1, 5 );
console.log(ranNum);
// somma tra le puntate 
const somma = sommaPuntate(userNum,ranNum );
console.log(somma);

// verificare se la somma e pari o dispari
let risultato = pariDisp(somma);
console.log("il numero è:", risultato);



if (risultato === scelta) {
   alert("hai vinto la partita");
    
} else {
    alert("hai perso la partita");
}




//funzioni

function getRandomNumPc(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}

function sommaPuntate(num1, num2) {
    const sum = num1 + num2;

    return sum;
    
}

function pariDisp(num) {
    
    if (num % 2 === 0) {
        return "pari" ;
    } else {
        return "dispari";
    }
}

