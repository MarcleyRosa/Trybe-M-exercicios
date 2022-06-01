// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

 function armaz(event) {
    event.preventDefault();
    console.log(INPUT_TEXT.value);
    HREF_LINK.innerHTML = INPUT_TEXT.value
 }
HREF_LINK.addEventListener ('click', armaz)

function elecheckbox(event) {
  event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', elecheckbox);

function adckey(event) {
  if (event.key === 'a') {

  } else {
    event.preventDefault();
  }
}

INPUT_TEXT.addEventListener('keypress', adckey)