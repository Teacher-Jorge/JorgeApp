const btnPlay = document.getElementById('btn-play')
const btnPause = document.getElementById('btn-pause')

btnPlay.addEventListener('click', function() {
    const audio = document.getElementById('audio1')
audio.play()
})

btnPause.addEventListener('click', function() {
    const audio = document.getElementById('audio1')
audio.pause()
})
