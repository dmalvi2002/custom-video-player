const video = document.getElementById('video');
const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play and pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else video.pause();
}

// Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play"></i>';
  } else play.innerHTML = '<i class="fa fa-pause"></i>';
}

// Update progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  let min = Math.floor(video.currentTime / 60);
  if (min < 10) {
    min = '0' + String(min);
  }
  let sec = Math.floor(video.currentTime % 60);
  if (sec < 10) {
    sec = '0' + String(sec);
  }
  timestamp.innerHTML = `${min}:${sec}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
