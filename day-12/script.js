const btns = document.querySelectorAll('.btn')
btns.forEach(btn=> {
    btn.addEventListener('click', ()=>{
        if(btn.parentElement.classList.contains('open')){
            btn.parentElement.classList.remove('open')
            btn.parentElement.classList.add('collapse')
        } else{
            btn.parentElement.classList.add('open')
            btn.parentElement.classList.remove('collapse')
        }
    })
})