const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
// const cityIndex = city.indexOf('Y');
// console.log(cityIndex); // Output: 4

let cityIndex = -1;

for (let i = 0; i < city.lenght; i++) {
    if (city === 'Y') {
        cityIndex = i;
        break;
    }
}
console.log(cityIndex);

// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city
// const citySubstring = city.substring(cityIndex);
// console.log(citySubstring); // Output: "York"

let citySubstring = '';

for (let i = 4; i < city.length; i++) {
    citySubstring += city[i];
}
console.log(citySubstring);

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
// const cityReplaced = city.substring(0, 4) + 'Delhi';
// console.log(cityReplaced); // Output:  "New Delhi"

let cityReplaced = '';

for (let i = 0; i < city.length; i++) {
    if (i === 4) {
        cityReplaced += 'Delhi';
        break;
    } else {
        cityReplaced += city[i];
    }
}
console.log(cityReplaced);

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
// const cityNameConcat = `${city} ${cityName}`;
// console.log(cityNameConcat); // Output: "New York City"

let cityNameConcat = '';

for (let i = 0; i < city.length; i++) {
    cityNameConcat += city[i];
}
cityNameConcat += ' ';
for (let j = 0; j < cityName.length; j++) {
    cityNameConcat += cityName[j];
}
console.log(cityNameConcat);

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
// const upperCaseHello = hello.toUpperCase();
// console.log(upperCaseHello); // Output: "HELLO"

let upperCaseHello = '';

for (let i = 0; i < hello.length; i++) {
    upperCaseHello += hello[i].toUpperCase();
}
console.log(upperCaseHello);