const progressDiv = document.getElementById("progress")
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const circles = document.querySelectorAll(".circle")
const totalNodes = circles.length; //4
var currentActive = 1;

nextButton.addEventListener('click', () => {
    currentActive = ((currentActive + 1) > totalNodes) ? totalNodes : currentActive + 1;
    udpate()

})


prevButton.addEventListener('click', () => {
    currentActive = ((currentActive - 1) < 1) ? 1 : currentActive - 1;
    udpate()
})

function udpate() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    progressDiv.style.width = ((currentActive - 1) / (totalNodes - 1)) * 100 + "%"

    if (currentActive == 1) {
        prevButton.disabled = true
    } else if (currentActive == totalNodes) {
        nextButton.disabled = true
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }

}