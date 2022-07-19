const fetchCoin = async () => {
   const coinName = document.querySelector('body')
   const url = 'https://api.coincap.io/v2/assets'
   const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'

   const base = await fetch(baseUrl).then((response) => response.json())
   const coin = await fetch (url).then((response) => response.json()
    .then((resp) => resp.data))
    coin.forEach((e) => {
       if (e.rank <= 10) {
        const newELe = document.createElement('p')
        newELe.innerHTML = `${e.id} ${e.symbol} ${e.priceUsd}`
        coinName.appendChild(newELe)
       }
    })
    

}
window.onload = () => fetchCoin();