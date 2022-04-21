/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input */



/* Chiedo all'utente Pari o Dispari */
const userSide = prompt("Pari o Dispari").toLowerCase().trim();

/* Chiedo all'utente di scegliere un numero da 1 a 5 */
const userNum = parseInt(prompt("Insersci un Numero da 1 a 5"));

/* Utilizzo la Funzione RandomNumer */
const pcNum = pcRandomNumber(1, 5);

/* Sommo il numero scelto dall'utente a quello estratto per il Pc */
const sum = pcNum + userNum;


if(pariDispari(sum)){
  console.log(`Il numero ${sum} è pari`)
}else{
  console.log(`Il numero ${sum} è dispari`)
}


/* Creo la Funzione per estrarre un numero random per il Pc */
function pcRandomNumber(min, max){

  return Math.floor(Math.random()* (max - min + 1) + min);

}


/* Creo la Funzione per distinguere se pari o dispcari */
function pariDispari(num){

  if(num % 2) return false;

  return true;

}