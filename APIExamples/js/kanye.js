const loadQuotes = ()=>{
    fetch("https://api.kanye.rest/")
    .then(res=>res.json())
    .then(data =>displayCode(data));
}

const displayCode =(str)=>{
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = str.quote;

}