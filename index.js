// Handle keyboard input
window.addEventListener('keydown', function (e) {
    playSound(e.keyCode);
});

// Function to play sound and animate button
function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    setTimeout(() => key.classList.remove('playing'), 100);
}

// Remove animation class after transition
function removeTransition(e) {
    if (e.propertyName !== 'box-shadow') return;
    this.classList.remove('playing');
}

// Add click support for mobile users
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);

    // New: click/tap support
    key.addEventListener('click', function () {
        const keyCode = this.getAttribute('data-key');
        playSound(keyCode);
    });
});
