const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

var load=0;

var int = setInterval(blurr,30)


function blurr(){
    if(load>=100){
        clearInterval(int);
    }
    loadText.innerText = `${load}%`
    bg.style.filter = `blur(${scale(load)}px)`
    load++;
}

function scale(val){
    return (100-val)
}