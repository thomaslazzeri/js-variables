const numOne = 8; // NON MODIFICARE QUESTA RIGA
const numTwo = 16; // NON MODIFICARE QUESTA RIGA
const numThree = 32; // NON MODIFICARE QUESTA RIGA

// Sostituisci NaN di seguito utilizzando
// gli operatori numerici di Javascript

// 1. Imposta questa variabile come somma di numOne e numTwo
const numOnePlusNumTwo = numOne + numTwo;
console.log(numOnePlusNumTwo); // Output: 24

// 2. Imposta questa variabile come prodotto di numThree e numTwo
const numThreeTimesNumTwo = numThree * numTwo;
console.log(numThreeTimesNumTwo); // Output: 512

// 3. Imposta questa variabile come divisione di numThree per numOne
const numThreeDividedByNumOne = numThree / numOne;
console.log(numThreeDividedByNumOne); // Output: 4

// 4. Imposta questa variabile come differenza tra numThree e numOne
const numThreeMinusNumOne = numThree - numOne;
console.log(numThreeMinusNumOne); // Output: 24

// 5. Imposta questa variabile come somma di numOne, numTwo e numThree
const sum = numOne + numTwo + numThree;
console.log(sum); // Output: 56

// 6. Imposta questa variabile come somma di numOne, numTwo, numThree diviso numOne
const numBytes = ((numOne + numTwo + numThree) / numOne);
console.log(numBytes); // Output: 7

//-----------------------------------------------------------//

// 1. Dichiarazione di variabili
// Crea una variabile chiamata name e assegnale il tuo nome.
// Stampa il valore di nome nella console.
const name = 'Thomas';
console.log(name);

// 2. Tipi primitivi
// Crea tre variabili chiamate number, text e bool e assegna rispettivamente
// un numero, una stringa e un valore booleano.
// Stampa tutti i valori nella console.
const number = 1;
console.log(number);
const text = 'ciao';
console.log(text);
const bool = 5 < 5000;
console.log(bool);

// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il nome completo
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA

const fullName = firstName + " " + lastName;
console.log(fullName); // Output: "Jane Smith"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = 26;
console.log(numberOfLettersInAlphabet); // Output: 26

//-----------------------------------------------------------//

const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
const lettera = Y;
if (city.includes(lettera)) {
    console.log(`La lettera '${lettera}' è presente!`);
} else {
    console.log(`La lettera '${lettera}' non è stata trovata.`);
}
const cityIndex = 0;
console.log(cityIndex); // Output: 4

// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city
const citySubstring = '';
console.log(citySubstring); // Output: "York"

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
const cityReplaced = '';
console.log(cityReplaced); // Output:  "New Delhi"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
const cityNameConcat = '';
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
const upperCaseHello = '';
console.log(upperCaseHello); // Output: "HELLO"