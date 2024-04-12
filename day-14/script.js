const btn = document.getElementById("toggle")
const nav = document.getElementById("nav")

const activeClass  = "active"
btn.addEventListener('click',()=>nav.classList.toggle(activeClass))