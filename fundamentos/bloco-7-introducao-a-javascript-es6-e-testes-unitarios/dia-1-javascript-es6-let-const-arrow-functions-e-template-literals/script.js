
const clickCount = document.getElementById('countID');
const contagem = document.getElementById('contagem');
let cliCount = 0
function resCount() {
  cliCount = cliCount += 1
  contagem.innerHTML = cliCount
  document.body.style.backgroundColor = 'red'
}




clickCount.addEventListener('click', resCount)