// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma





// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto



// const userNumber = Number(prompt('Inserisci un numero'))
// console.log(userNumber);

// function pariDispari (numero){
//     if (numero % 2 == 0){
//         return 'pari'
//         // console.log('Il numero è pari');
//     } else{
//         return 'dispari'
//         // console.log('Il numero è dispari');
//     }
// }
// // pariDispari(userNumber);
// // pariDispari(17);

// if (pariDispari(userNumber) == 'pari'){
//     console.log('Hai inserito un numero pari');

// } else{
//     console.log('Hai inserito un numero dispari');
// }



//scelta numero
const sceltaNumero = prompt('Scegli Pari o Dispari');


function randomNumber(numero) {

    const numero = Math.floor(Math.random()*5)+1;
    console.log(numero);

    if( sceltaNumero == 'pari') && (numero_casuale % 2 == 0){
          return 'hai vinto'  
    //    console.log('HAI VINTO');

    } else {
        return 'hai vinto'  

       // console.log('HAI PERSO');

    }

       if ( sceltaNumero === 'dispari') && (numero_casuale % 2 == 0) {


            console.log('HAI PERSO');

         } else {

                 console.log('HAI VINTO'); 

             }

    
    
}



