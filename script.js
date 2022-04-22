function playSound(e){
    const audio = document.querySelector(`audio[src='sounds/${e.key}.mp3']`)
    if (!audio) return;
    const pressedKey = document.querySelector(`.key[data-key='${e.key}']`);
    pressedKey.classList.add('playing');
    setTimeout(() => {
        pressedKey.classList.remove('playing');
    }, 200);
    audio.currentTime = 0;
    audio.play();
}

if (document.querySelector('div').classList.contains('playing')) {
    let activeKey = document.querySelectorAll('.key.playing');
    activeKey.classList.remove('playing');
}


window.addEventListener('keydown', playSound);