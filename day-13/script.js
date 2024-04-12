const choiceArea = document.querySelector(".choices-area");
const text = document.getElementById("text");
const effectClass = "effect"
text.addEventListener('keyup', (key) => {
    let keyPressed = key.key
    console.log("key pressed" + keyPressed);
    if (keyPressed == 'Enter') {
        clearContent()
        runAnimation()
    } else {
        removeAllChildsOfChoiceArea()
        createDivs()
    }
});


function createDivs() {
    var allChoicesSeperatedByComma = text.value.trim();
    var choiceArray = allChoicesSeperatedByComma.split(",")
    choiceArray.forEach(choice => {
        var newElement = document.createElement('div');
        newElement.textContent = choice;
        newElement.classList.add("choice");
        choiceArea.appendChild(newElement);
    });

}

function removeAllChildsOfChoiceArea() {
    while (choiceArea.firstChild) {
        choiceArea.removeChild(choiceArea.firstChild);
    }
}

function clearContent() {
    text.value = ""
}

async function runAnimation() {
    debugger
    var childNodes = document.querySelectorAll(".choice");
    clearNodesFromEffect(childNodes);
    var length = childNodes.length;

    for (var i = 0; i < 14; i++) {
        await makeWinner(length, childNodes)
    }

    childNodes[getWinner(length)].classList.add(effectClass)
}

function clearNodesFromEffect(childNodes){
    childNodes.forEach(child=>child.classList.remove(effectClass))
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getWinner(length) {
    return Math.floor(Math.random() * length)
}

async function makeWinner(length, childNodes) {
    var winner = getWinner(length)
    childNodes[winner].classList.add(effectClass)
    await sleep(350);
    childNodes[winner].classList.remove(effectClass)
}