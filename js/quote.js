const lodeQuote = () => {
   fetch('https://api.kanye.rest/')
   .then(res => res.json())
   .then(data => displyQuote(data))
}
const displyQuote = quote => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote;
}