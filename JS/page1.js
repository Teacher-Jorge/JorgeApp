const btnPlay = document.getElementById('btn-play')
const btnPause = document.getElementById('btn-pause')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')
const input5 = document.getElementById('input5')
const input6 = document.getElementById('input6')

btnPlay.addEventListener('click', function() {
    const audio = document.getElementById('audio1')
audio.play()
})

btnPause.addEventListener('click', function() {
    const audio = document.getElementById('audio1')
audio.pause()
})

input1.addEventListener('keyup', (e) => {
    if (input1.value === "are") {
        input1.style.color = 'green'
        document.getElementById('input2').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

input2.addEventListener('keyup', (e) => {
    if (input2.value === "am") {
        input2.style.color = 'green'
        document.getElementById('input3').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

input3.addEventListener('keyup', (e) => {
    if (input3.value === "Is") {
        input3.style.color = 'green'
        document.getElementById('input4').focus()
        setTimeout(() => {
        translate.style.opacity = '1'
    },100);
    setTimeout(() => {
        translate.style.opacity = '0'
    }, 2000);
    }
})

