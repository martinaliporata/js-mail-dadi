// Gioco dei dadi
// Il giocatore gioca contro il computer.
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Creare un const math.floor(Math.random) per generare un numero random da 1 a 6 sia per l'utente sia per il computer.
// Creare un'istruzione condizionale (if) per decidere chi è il vincitore in base al punteggio più alto. 

// Generare un numero random da 1 a 6 per il giocatore.

const bottone1 = document.querySelector('button')

bottone1.addEventListener('click', function(){
    const randomNumber1 = Math.round(Math.random(7) * 7)
    console.log(randomNumber1, 'this is the computer number')
})

// Generare un numero random da 1 a 6 per il computer

const bottone2 = document.querySelector('button')

bottone2.addEventListener('click', function(){
    const randomNumber2 = Math.round(Math.random(7) * 7)
    console.log(randomNumber2, 'this is the user number')
})

// Creare un'istruzione condizionale (if) per decidere chi è il vincitore in base al punteggio più alto. 
if(randomNumber1 === randomNumber2) {
    console.log('Nodoby has won')
} else if (randomNumber1 > randomNumber2) {
    console.log('Computer has won')
} else (randomNumber1 < randomNumber2); {
    console.log('User has won')
}

// Correzione
const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

if (userNumber === computerNumber) {
    console.log('Nobody has won', userNumber, computerNumber)
} else if (userNumber > computerNumber) {
    console.log ('User won', userNumber, computerNumber)
} else {
    console.log ('Computer won', userNumber, computerNumber)
}