const audio = new Audio();
const play = document.querySelector('.music');
let isPlay = false;

function playAudio() { 
  play.classList.add('pause'); //воспроизвести
  isPlay = true;
  audio.src = './assets/audio/audio.mp3';
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  play.classList.remove('pause'); //остановить
  isPlay = false;
  audio.pause();
}

play.addEventListener('click', function() {
  if (isPlay === false) {
    playAudio();
  } else {
    pauseAudio();
  }
});