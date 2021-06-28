"use strict";
const searchPlacesBtn = document.getElementById("searchPlacesBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

searchPlacesBtn.addEventListener('click', e =>{
    modal.classList.toggle("d-none");
    console.log('works');
});

closeModal.onclick = ()=>{modal.classList.toggle("d-none")}
    
