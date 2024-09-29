//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


function x() {

  let risultato = ""


  let num1 = document.getElementById("numero1").value;
  let num2 = document.getElementById("numero2").value;

  if (num1 > num2) {
    risultato = num1 + "è più grande";
  }

  else if (num1 < num2) {
    risultato = num2 + "è più grande";
  }


  else {
    risultato = num1 + "è uguale a" + num2;
  }

  let gianni = document.getElementById("Gianni");

  gianni.innerHTML = risultato
}



/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num3 = 18

if (num3 < 5) {

  console.log("Tiny");
}
else if (num3 > 4 && num3 < 10) {

  console.log("Small");

}

else if (num3 > 9 && num3 < 15) {

  console.log("Medium");

}

else if (num3 > 14 && num3 < 20) {

  console.log("Large");

}

else if (num3 >= 20) {

  console.log("Huge");

}
//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

let numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < 11; i++) {

  if (i === 3 || i === 8) {
    continue
  }

  console.log(numeri[i]);

}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/


for (let x = 0; x < 16; x++) {

  if (x % 2 === 0) {
    console.log("la variabile" + x + "è pari");

  }

  else {
    console.log("la variabile" + x + "è dispari");

  }

}


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numInt1 = 18
let numInt2 = 10

if (numInt1 === 8) {
  console.log("numInt1 è uguale a 8");
}
else if (numInt2 === 8) {
  console.log("numInt2 è uguale a 8");

}
else if (numInt1 + numInt2 === 8) {
  console.log("somma variabili ugugale a 8");
}

else if (numInt1 - numInt2 === 8 || numInt2 - numInt1 === 8) {
  console.log("differenza variabili uguale a 8");

}
else {
  console.log("nessuna delle condizioni è uguale a 8");

}
/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 50
let spedizioni;

if (totalShoppingCart > 50) {
  console.log("Devi pagare" + totalShoppingCart);
}
else {
  totalShoppingCart = totalShoppingCart + 10
  console.log("Devi pagare" + totalShoppingCart);

}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let sconto = 0.20
totalShoppingCart = totalShoppingCart - (totalShoppingCart * sconto)

if (totalShoppingCart > 50) {
  console.log("Avrai uno sconto di" + totalShoppingCart);

}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let M = true
let gender = M ? "maschio" : "femmina"
console.log(gender);


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let j = 0; j < 101; j++) {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (j % 3 === 0) {
    console.log("Fizz");

  }
  else if (j % 5 === 0) {
    console.log("Buzz");
  }

  else {
    console.log(j);
    
  }
}