"use strict";
const expenseDesc = document.getElementById("expense-desc");
const expenseDate = document.getElementById("expense-date");
const expenseCost = document.getElementById("expense-cost");
const expenseBtn = document.getElementById("expense-button");
const expenseTable = document.getElementById("expense-table");


expenseBtn.addEventListener('click', addExpense);


function addExpense(event){
    event.preventDefault();
    const expenseRow = document.createElement('tr');

    const tableDes = document.createElement('td');
    tableDes.innerText = expenseDesc.value;

    const tableDate = document.createElement('td');
    tableDate.innerText = expenseDate.value;

    const tableCost = document.createElement('td');
    tableCost.innerText = expenseCost.value;

    const tableDel = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fas fa-window-close">`;
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', deleteExpense)
    tableDel.appendChild(deleteBtn);
    

    expenseRow.appendChild(tableDes);
    expenseRow.appendChild(tableDate);
    expenseRow.appendChild(tableCost);
    expenseRow.appendChild(tableDel);

    expenseTable.appendChild(expenseRow);
    expenseDesc.value = "";
    expenseDate.value = "";
    expenseCost.value = "";
}

function deleteExpense(event){
    event.target.parentElement.parentElement.parentElement.remove();
}
