function initProgressBar() {
  const player = document.getElementById("player");
  const length = player.duration;
  const current_time = player.currentTime;

  // calculate total length of value
  const totalLength = calculateTotalValue(length);
  document.getElementById("end-time").innerHTML = totalLength;

  // calculate current value time
  const currentTime = calculateCurrentValue(current_time);
  document.getElementById("start-time").innerHTML = currentTime;

  const progressbar = document.getElementById("seek-obj");
  progressbar.value = player.currentTime / player.duration;
  progressbar.addEventListener("click", seek);

  if (player.currentTime == player.duration) {
    document.getElementById("play-btn").className = "";
  }

  function seek(event) {
    const percent = event.offsetX / this.offsetWidth;
    player.currentTime = percent * player.duration;
    progressbar.value = percent / 100;
  }
}

function initPlayers(num) {
  // pass num in if there are multiple audio players e.g 'player' + i

  for (let i = 0; i < num; i++) {
    (function () {
      // variables
      // ----------------------------------------------------------
      // audio embed object
      const playerContainer = document.getElementById("player-container"),
        player = document.getElementById("player"),
        isPlaying = false,
        playBtn = document.getElementById("play-btn");

      // Controls Listeners
      // ----------------------------------------------------------
      if (playBtn != null) {
        playBtn.addEventListener("click", function () {
          togglePlay();
        });
      }

      // Controls & Sounds Methods
      // ----------------------------------------------------------
      function togglePlay() {
        if (player.paused === false) {
          player.pause();
          isPlaying = false;
          document.getElementById("play-btn").className = "";
        } else {
          player.play();
          document.getElementById("play-btn").className = "pause";
          isPlaying = true;
        }
      }
    })();
  }
}

function calculateTotalValue(length) {
  const minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_str.substr(0, 2),
    time = minutes + ":" + seconds;

  return time;
}

function calculateCurrentValue(currentTime) {
  const current_hour = parseInt(currentTime / 3600) % 24,
    current_minute = parseInt(currentTime / 60) % 60,
    current_seconds_long = currentTime % 60,
    current_seconds = current_seconds_long.toFixed(),
    current_time =
      (current_minute < 10 ? "0" + current_minute : current_minute) +
      ":" +
      (current_seconds < 10 ? "0" + current_seconds : current_seconds);

  return current_time;
}

initPlayers(jQuery("#player-container").length);
