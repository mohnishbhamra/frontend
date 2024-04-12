var classes = ["twitter", "youtube", "facebook"]
var intervals = []
classes.forEach((className, idx) => {
    console.log(idx)
    var node = document.querySelector("." + className)
    var endValueOfNode = parseInt(node.textContent);
    node.textContent = 0;
    intervals[idx] = setInterval(() => increaseVal(node, endValueOfNode, getDifferential(endValueOfNode), idx), 1)
})

function increaseVal(div, final, offset, idx) {
    div.textContent = parseInt(div.textContent) + offset;
    if (div.textContent >= final) {
        clearInterval(intervals[idx])
        div.textContent = final
    }

}

function getDifferential(endValue) {
    return Math.round(endValue/400);
}