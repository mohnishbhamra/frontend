const button = document.getElementById("button1")
const jokePara = document.getElementById("joke-area-para")
const URI = "https://icanhazdadjoke.com/"
const HEADERS = {
    "Accept" : "text/plain"
}
button.addEventListener('click', ()=>{
    fetch(URI, {method: 'GET', headers: HEADERS},).then(response => response.text()).then(data=> {
        console.log(data)
        jokePara.innerText=data;
    })
})