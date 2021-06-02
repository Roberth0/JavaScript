"use strict";

const phrase = document.getElementById('phrase');
const countBtn = document.getElementById('countBtn');


countBtn.addEventListener('click',(e)=>{
    if(phrase.value){
        e.preventDefault();
        alert(`The phrase contains ${countVowels(phrase.value)} vowels`);
        phrase.value = "";
    }
})

function countVowels(text){
    let counter = 0;
    for(let letter of text){
        letter === "a" || letter ==="e" || letter ==="i" || letter ==="o" || letter ==="u" ?
        counter++ : true;
    }
    return counter;
}
