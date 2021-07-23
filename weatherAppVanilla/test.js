"use strict";
const proxy = "https://cors-anywhere.herokuapp.com/";
const api = `${proxy}https://www.metaweather.com/api/location/search/?query=london`;
alert("test.js");

async function test() {
    const info = await fetch(api, {
        method: "GET",
        mode: 'cors',
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // }
    });
    const data = await info.json();
    console.log(info);
}
test();