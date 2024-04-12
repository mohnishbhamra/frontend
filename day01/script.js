const panels = document.querySelectorAll('.pane')
console.log(panels)

// var x= function(){
//     alert("clicked on")
// }


for(var j=0; j<panels.length; j++){
    const pane = panels[j];
    pane.addEventListener('click', () =>{
        removeActiveClasses();
        pane.classList.add('active')
    })
}

function removeActiveClasses(){
    for(var i=0; i<panels.length; i++){
        const panel = panels[i];
        panel.classList.remove('active')
    }
}