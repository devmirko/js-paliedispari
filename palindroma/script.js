// l'utente inserisce la parola 
const parola = prompt("inserisci la parola");
// funzione che inverte la paola
let parolaInversa = invertiParola(parola);
// controllo sulla parola se e palindroma
if (parola == parolaInversa) {
  document.getElementById("risultato").innerHTML = "la parola  è palindroma";
} else {
  document.getElementById("risultato").innerHTML = "la parola non è palindroma";
  }





// funzione 
function invertiParola(string){
    var stringInversa = string.split('').reverse().join('');  
    return stringInversa;
  }