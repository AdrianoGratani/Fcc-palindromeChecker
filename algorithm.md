  ### COSA MI SERVE
  
  ### come fare in modo che un bottone html quando cliccato attivi una funzione che analizzi un testo html; testo > click > js funzione analizza    // https://www.shecodes.io/athena/11102-how-to-trigger-a-prompt-on-button-click-in-javascript
  

  * JS
         - un modo per ignorare punteggiatura, lowercase/uppercase e gli spazi.
         - quindi il mio programma deve tenere conto solo dei caratteri della stringa.
         ^ devo rimuovere tutti i non-alphanumeric characters, e cambiare tutti i caratteri in lowercase (o uppercase).

              -x devo importare gli elements in js.
              - devo analizzare il testo input in js

              - devo creare un if statement: if (testo rispetta condizioni) {
                1) togli una classList 'invisible' dal `p` 'risultato';
                2) aggiungi testo "e' un palindromo";
              }  else {
                1) togli una classList 'invisible' dal `p` 'risultato';
                2) aggiungi testo "e' un palindromo";

              }
  
  * HTML
         -x tutte le funzionalita' in un unico `div` container;
         -x un h1 per il titolo dell'app
         -x un input button per ricevere dall'utente il testo da analizzare;
         -x un `button` per verificare (js) se il testo immesso e' palindrom oppure no;
         -x un `p` a comparsa che ti notifica se il testo immesso e' palindromo oppure no;
         -x ogni elemento deve avere `class` ed `id`;

  * CSS  - la pagina deve avere una color palette gradevole
         - verifica con contrast checker se color e background color garantiscono leggibilita';
         - usa un font moderno e leggibile preso da Fonts;
         - creo una classList invisible da attivare o disattivare;


         
  ### IL RISULTATO FINALE
  *  https://palindrome-checker.freecodecamp.rocks


  
    




User Stories:

You should have an input element with an id of text-input
You should have a button element with an id of check-btn
You should have a div element with an id of result
When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text Please input a value
When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text A is a palindrome
When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text eye is a palindrome
When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text _eye is a palindrome
When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text race car is a palindrome
When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text not a palindrome is not a palindrome
When the #test-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text A man, a plan, a canal. Panama is a palindrome
When the #text-input element contains the text never odd or even and the #check-btn element is clicked, the #result element should contain the text never odd or even is a palindrome
When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text nope is not a palindrome
When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text almostomla is not a palindrome
When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text My age is 0, 0 si ega ym. is a palindrome
When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text 1 eye for of 1 eye. is not a palindrome
When the #text-input element contains the text 0_0 (: /-\ :) 0-0 and the #check-btn element is clicked, the #result element should contain the text 0_0 (: /-\ :) 0-0 is a palindrome
When the #text-input element contains the text five|\_/|four and the #check-btn element is clicked, the #result element should contain the text five|\_/|four is not a palindrome