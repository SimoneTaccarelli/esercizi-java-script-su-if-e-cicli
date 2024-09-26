//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10

let b = 30

if ( a > b ){
        console.log('il numero'+ a + 'è maggiore di '+b)
     } 
    else {
        console.log('il numero'+ b +'è maggiore di'+a)
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

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 14

if (num < 5){
    console.log( 'tiny')
}
else if (num < 10){
    console.log("Small")
}
else if (num < 15){
    console.log("Medium")
}
else if (num < 20){
    console.log("Large")
}
else if(num >= 20){
    console.log("Huge")
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (i=0; i<11 ; i ++){
  if( i===3 || i===8) continue
      
  else{
      console.log(i)
  }
}
/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (i=0; i<16 ; i++){
  if (i % 2 ===0){
      console.log( i+'questo numero è pari')
  }
  else{
      console.log(i+'questo numero è dispari')
  }
}
//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 18
let num2 = 10

if ( num1 === 8 ){
    console.log( 'num1 è uguale a 8')
}
else if(num2===8){
    console.log('num2 è uguale a 8')
}
else if (num1 + num2 ===8 ){
    console.log( 'la somma delle due variabili è uguale a 8')
}
else if(num1 - num2 ===8 || num2 - num1 ===8){
    console.log('questa variabile è uguale a 8 ')
}
else {
    console.log('nessuna delle condizioni è uguale a 8 ')
}
/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart= 50 

if( totalShoppingCart > 50){
    console.log("dato che il tuo acquisto supera l'importo di €50 per te la speduzione sarà gratuita")
}
else  {
    (totale = totalShoppingCart+10)
    console.log('per acquisti con inmporto sotto €50 la spedizone costa €10 questo è il totale €' + totale)
}
/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart= 50 

let sconto =0.20

let blackfriday = totalShoppingCart- (totalShoppingCart * sconto)
 console.log('solo per oggi potrai avere lo sconto del blackfriday il totale è di €' + blackfriday)

if( totalShoppingCart > 50){
    console.log("dato che il tuo acquisto supera l'importo di €50 per te la speduzione sarà gratuita")
}
else  {
    (totale = totalShoppingCart+10)
    console.log('per acquisti con inmporto sotto €50 la spedizone costa €10 questo è il totale €' + totale)
}
/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let itsMale = 'male'
let gender = (itsMale === 'male') ? 'its male': 'its female';
console.log(gender) 
/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for ( i = 0 ; i < 101 ; i++){
    
  if (i % 3 === 0 && i % 5 === 0 ){
      console.log('fizzbuzz')
  }    
  else if( i % 3 === 0 ){
      console.log('fizz')
      
  }
  else if(i % 5 === 0 ){
      console.log('buzz')   
  }
  
  else {
   console.log(i)
  }
  
}
