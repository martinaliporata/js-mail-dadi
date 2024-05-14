// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Creare un prompt per chiedere all'utente la mail.
// Creare un array per verificare che il suo nome sia all'interno della lista delle persone che possono accedere
// Inserisci un console log per dare all'utente un feedback.

const userMail = prompt('type your mail')
console.log(userMail)

const array = [lucia, marco, salvatore, giuseppe, tiziano]

if (array.includes(userMail)) {
    console.log('Join')
} else {
    console.log('No')
}