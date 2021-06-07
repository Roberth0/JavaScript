"use strict";

const card = document.querySelector(".card");
const img = document.querySelector("img");

card.addEventListener("click", (e)=>{
    img.classList.toggle('d-none');
    card.classList.toggle('bgt')
    

    // console.log(e.target.childNodes[0]);
    // e.target.childNodes[0].classList.toggle("d-none");
    // e.target.style.backgroundColor = "transparent";

})
