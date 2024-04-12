const audios = document.querySelectorAll('.audio')
audios.forEach(audio=>{
    audio.addEventListener('click', ()=>{
        stopAllSounds();
        const innerAudio = audio.querySelector('.inner-audio')
        innerAudio.play();
    })
})


const innerAudios = document.querySelectorAll('.inner-audio');
function stopAllSounds(){
    innerAudios.forEach(audio=>{
        audio.pause();
        audio.currentTime = 0;
    })
}
