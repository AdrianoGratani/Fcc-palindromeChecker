const title = document.getElementById('title');
const input = document.getElementById('input');
const button = document.getElementById('button');
const result = document.getElementById('result');

// non mi serve prendere input;
// quando user clicca il bottone si attiva una function `palindromeCheck`;
//x inizia con un console.log
// poi fai un checker semplice di datatype dell input stringa/non stringa;



function palindromeCheck(){

    console.log("palindromeCheck function is on.");

    let inputValue = input.value;
    console.log(inputValue);


    console.log("palindromeCheck function is done.");
}

button.addEventListener('click' ,  palindromeCheck);