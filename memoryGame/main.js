"use strict";
const gameZone = document.querySelector('.gameZone');

// const cardFront = document.querySelector(".card-front");
// const cardContainer = document.querySelector(".card-container");
// const cardBack = document.querySelector(".card-back");
// cardContainer.addEventListener('click', flipCard);

const cards = ['dog.svg', 'hippo.svg', 'spider.svg'];
const completeCards = [...cards, ...cards];
let score = 0;

document.addEventListener('click', ()=>{
    console.log('clicked');
})

completeCards.forEach( card =>{
    const cardContainer = document.createElement('div');
    const cardFront = document.createElement('div');
    const cardBack = document.createElement('div');
    cardFront.innerHTML = `<img src="${card}" alt="${card}" >`;
    cardFront.classList.add('card-front', 'd-none');

    cardBack.classList.add('card-back')

    cardContainer.addEventListener('click', flipCard);
    cardContainer.classList.add('card-container');
    cardContainer.append(cardFront);
    cardContainer.append(cardBack);
    gameZone.append(cardContainer);
})



function flipCard(e){
    const card = e.target;
    console.log(e.target);
    card.childNodes[0].classList.toggle("d-none");
    card.childNodes[1].classList.toggle("d-none");
}

