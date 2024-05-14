// Saltare a piè dispari [Bonus]
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è pari inseriscilo nell’array

// Crea un array vuoto
// Con un ciclo for chiedi all'utente di inserire un numero
// Inserisci con un'istruzione condizionale (if) la possibilità di inserire un numero in array solo se è pari.

const array = []

for (let i = 0; i < 6; i++) {
    if (i%2===0) {
        console.log('pari')
    }
}

// correzione
const numbers = []

for (let index = 0; index < 6; index++) {
    const newNumber = Number.parseInt(prompt('type a number'), 10);
    if (newNumber % 2 === 0) {
        numbers.push(newNumber);
    }
}

console.log(numbers)