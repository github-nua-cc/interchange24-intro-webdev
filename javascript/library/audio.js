const audioButton = document.getElementById("play-audio-button");
const audio = new Audio("./audio/audio_one.wav");
audio.loop = true;

const setNewAudio = (audioSrc) => {
  audio.src = audioSrc;
};

const playAudio = () => {
  audio.play();
  audioButton.innerHTML = "Pause Music!";
};

const pauseAudio = () => {
  audio.pause();
  audioButton.innerHTML = "Play Music!";
};

audioButton.onclick = () => {
  audio.paused ? playAudio() : pauseAudio();
};