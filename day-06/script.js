const boxes = document.querySelectorAll('.box')
makeBoxesVisibleAccordingToViewableHieght();
window.addEventListener('scroll', makeBoxesVisibleAccordingToViewableHieght)

function makeBoxesVisibleAccordingToViewableHieght(){
    var innerHeight80Percentage = window.innerHeight * .8
    boxes.forEach(box=> {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop< innerHeight80Percentage){
            box.classList.add('show');
        } else{
            box.classList.remove('show')
        }
    })
}