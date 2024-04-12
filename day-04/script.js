const btn = document.getElementById("magnifying-glass")
const search = document.getElementById("text-search")
const text = document.getElementById("text-input")
var status=true;
btn.addEventListener('click', ()=>{
    search.classList.toggle("active")
    text.value=""
    text.focus()
})


