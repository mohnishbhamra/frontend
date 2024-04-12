const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    console.log(label.innerText)
    var newTags = label.innerText
    .split('')
    .map((letter, idx) => { return `<span style=transition-delay:${idx*50}ms>${letter}</span>` })
    .join('');
    console.log(newTags)
    label.innerHTML = newTags
})