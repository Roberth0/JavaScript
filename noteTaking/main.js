"use strict";

const noteForm = document.querySelector(".noteForm");
const noteInput = document.getElementById("note-input");
const addNote = document.getElementById("addNote");
const noteContainer = document.querySelector(".note-container");
const modalBtn = document.getElementById("modal-btn");
const modal = document.querySelector(".modal");
const noteText = document.querySelector('.noteText');

modalBtn.addEventListener('click', ()=>{
    modal.classList.toggle('d-none');
})

addNote.onclick = (e) =>{
    if(noteInput.value){
        e.preventDefault();
        const noteDiv = document.createElement('div');
        const noteText = document.createElement('p');
        const noteBtn = document.createElement('button');
        noteBtn.classList.add("note-item-btn");
        noteBtn.innerText = "Review"
        noteBtn.value = "";
        noteBtn.addEventListener('click', noteReview);

        noteDiv.classList.add("note-item")
        // noteText.classList.add;
        noteText.innerText = noteInput.value;

        noteDiv.appendChild(noteText);
        noteDiv.appendChild(noteBtn);
        noteContainer.appendChild(noteDiv);
        noteInput.value = "";
    }
}

function noteReview(e){
    modal.classList.toggle('d-none');
    noteText.innerText = e.target.parentElement.childNodes[0].innerText;

}
