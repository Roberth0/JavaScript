"use strict";

const data = document.getElementById("data");
const value = document.getElementById("value");
const test = document.getElementById("hi");
const value = document.getElementById("value");
const testValue = document.getElementById("testValue");
const div = document.getElementById("div");

const cars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

cars.map(car => console.log(`the number of the car is ${car}`));
if(value != null){
    console.log('hi');
    cars.filter(car => console.log(car > 18));
    
}