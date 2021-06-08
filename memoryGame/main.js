"use strict";
const scoreDiv = document.getElementById('score');
const gameZone = document.querySelector('.gameZone');
const cards = ['dog.svg', 'hippo.svg', 'spider.svg'];
const completeCards = [...cards, ...cards];
let score = 0;
let numClicks = 1;
let cardClicked;
let secondCard;
let attempts = 0;

document.addEventListener('click', (e)=>{
    let read = e.target.childNodes[0].childNodes[0].getAttribute('src'); 
    if (read){
        if (numClicks <= 1){
            numClicks++;
            cardClicked = read;
        } else{
            if(attempts < 3){
                setTimeout(()=>{
                    secondCard = read;
                    numClicks = 1;
                    secondCard == cardClicked ? (
                        alert('match'),
                        score++,
                        showScore(),
                        gameZone.childNodes.forEach(card => card.childNodes[0].classList.add('d-none'))
                    ): (
                        alert('sorry try Again'), 
                        showScore(),
                        attempts++,
                        gameZone.childNodes.forEach(card => card.childNodes[0].classList.add('d-none')))
                }, 0);
            }else {
                setTimeout(()=>{
                    attempts = 0;
                    score = 0;
                    cardClicked = '';
                    secondCard = '';
                    showScore();
                    numClicks = 1;
                    alert('game over');
                    gameZone.childNodes.forEach(card => card.childNodes[0].classList.add('d-none'));
                },0);
            }
        }
    }
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
    card.childNodes[0].classList.toggle("d-none");
    card.childNodes[1].classList.toggle("d-none");
}

const showScore = ()=>{
    scoreDiv.innerHTML = `Score: ${score} <br> Attempts: ${attempts}`;

}
