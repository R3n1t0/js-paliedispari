/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input */

/* Chiedere all’utente di inserire una parola */
const userWord = prompt("Inserire una Parola").toLowerCase.trim;

/* Utilizzo la funzione Inverti Parola */
const invertedWord = wordInverter(userWord);

/* Distinguo quando la parola è un Palidroma o no */
if(userWord === invertedWord){

  console.log(`La Parola ${userWord} è un Palidroma`);

}else{

  console.log(`La Parola ${userWord} non è un Palidroma`);
}

/* Creo la Funzione Inverti Parola */
function wordInverter(word) {

  const invertedString = word.split("").reverse().join("");
  return invertedString;

}

  
