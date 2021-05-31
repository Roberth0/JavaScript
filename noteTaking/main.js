"use strict";

const noteForm = document.querySelector(".noteForm");
const noteInput = document.getElementById("note-input");
const addNote = document.getElementById("addNote");

addNote.onclick = (e) =>{
    e.preventDefault();
    console.log('clicked');
}
