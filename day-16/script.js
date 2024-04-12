const empty = document.querySelector(".empty")
const fill = document.querySelector(".fill")
const tatalWater = document.getElementById("total-water")
const remaining = document.getElementById("remaining")

fillMajorGlass(0)
const cups = document.querySelectorAll(".cup")

cups.forEach((cup,idx)=> {
    cup.addEventListener("click", ()=>{
        fillOtherCupsTill(idx)
        fillMajorGlass((12.5*(idx+1)))
    })
})


function fillOtherCupsTill(x){
    cups.forEach((cup,idx)=> {
        cup.classList.remove("active")
        if(idx<=x){
            cup.classList.add("active")
        }
    })
}

function  fillMajorGlass(fillingHeight){
    fill.style.height = `${fillingHeight}%`
    var remainingHeight = 100-fillingHeight
    makeHiddenAdjustments(fillingHeight);
    tatalWater.innerHTML=fill.style.height 
    empty.style.height = `${remainingHeight}%`
    remaining.innerHTML=remainingHeight/100 * 2 +"L"
}


function makeHiddenAdjustments(fillingHeight){
    if(fillingHeight==0){
        fill.style.visibility="hidden"
    }else{
        fill.style.visibility="visible"
    }
    if(fillingHeight==100){
        empty.style.visibility="hidden"
    }else{
        empty.style.visibility="visible"
    }
}