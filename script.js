function openBox(element) {
    // Fecha outras caixas abertas
    const openBoxes = document.querySelectorAll('.box.open');
    openBoxes.forEach((box) => {
        box.classList.remove('open');
    });

    // Adiciona a classe 'open' para abrir a caixa
    element.classList.add('open');

    // Ajusta a grade para afastar as caixas não abertas
    const grid = document.querySelector('.grid');
    grid.classList.add('open');

    // Mostra a mensagem da caixa
    const message = element.getAttribute('data-message');
    const messageElement = element.querySelector('.message');
    messageElement.textContent = message; // Insere a mensagem na página
}
// Adicione isso ao seu arquivo script.js
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const muteBtn = document.getElementById('mute-btn');
    const volumeControl = document.getElementById('volume-control');

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    muteBtn.addEventListener('click', () => {
        audio.muted = !audio.muted;
        muteBtn.textContent = audio.muted ? 'Unmute' : 'Mute';
    });

    volumeControl.addEventListener('input', () => {
        audio.volume = volumeControl.value;
    });
});

