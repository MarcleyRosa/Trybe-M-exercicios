// apiScript.js
 // const fetch = require('node-fetch')
const fetchJoke = async () => {
  const jokesCont = document.querySelector('#jokeContainer')
  const API_URL = 'https://icanhazdadjoke.com/';
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

 const use = await fetch (API_URL, myObject)
    .then(response => response.json()).then((resp) => jokesCont.innerHTML = resp.joke);
};

window.onload = () => fetchJoke();