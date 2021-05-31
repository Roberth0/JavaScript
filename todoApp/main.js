"use strict";
const newTodo = document.getElementById("todo");
const todoList = document.getElementById("todoList");
const addBtn = document.querySelector(".addBtn");
const modal = document.getElementById("modal");
const modalBtn = document.getElementById('modalBtn');
let value = 0;

function createTodo(){
    if (newTodo.value) {
        const li = document.createElement("li");
        li.setAttribute('id', value++);

        const editBtn = document.createElement("button");
        editBtn.innerHTML = `<i class="fas fa-edit">`;
        editBtn.addEventListener('click', () => {
            editBtnAction(li.getAttribute('id'));
            // modal.classList.remove('d-none');
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<i class="fas fa-trash-alt">`;
        deleteBtn.addEventListener('click', () => {
            deleteBtnAction(li.getAttribute('id'));
        });

        const completed = document.createElement("input");
        completed.setAttribute("type", "checkbox");

        li.innerHTML = `<span>${newTodo.value}</span>`;
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        li.appendChild(completed);
        todoList.appendChild(li);
        newTodo.value = "";
    }
};

function editBtnAction(id){
    const editText = document.getElementById("edit-text");
    const completed = document.getElementById('completed');
    editText.value = document.getElementById(id).children[0].textContent;
    completed.checked = document.getElementById(id).children[3].checked;
    modalBtn.addEventListener('click', () => {
        updateTodo(id, editText.value, completed.checked);
        // modal.classList.add('d-none');
    })
}

function deleteBtnAction(id) {
    document.getElementById(id).remove();
}


// modalBtn.addEventListener('click', () =>{
//     modal.classList.add('d-none');
// })

function updateTodo(id, text, state) {
    debugger
    const todo = document.getElementById(id);
    debugger
    todo.childNodes[0].textContent = text;
    todo.childNodes[3].checked = state;
}
addBtn.onclick = createTodo;