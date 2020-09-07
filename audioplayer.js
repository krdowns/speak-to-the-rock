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

function initProgressBar2() {
  const player2 = document.getElementById("player2");
  const length2 = player2.duration;
  const current_time2 = player2.currentTime;
  const totalLength2 = calculateTotalValue(length2);
  document.getElementById("end-time2").innerHTML = totalLength2;
  const currentTime2 = calculateCurrentValue(current_time2);
  document.getElementById("start-time2").innerHTML = currentTime2;
  const progressbar2 = document.getElementById("seek-obj2");
  progressbar2.value = player2.currentTime / player2.duration;
  progressbar2.addEventListener("click", seek2);

  if (player2.currentTime == player2.duration) {
    document.getElementById("play-btn2").className = "";
  }

  function seek2(event) {
    const percent2 = event.offsetX / this.offsetWidth;
    player2.currentTime = percent2 * player2.duration;
    progressbar2.value = percent2 / 100;
  }
}

function initProgressBar3() {
  const player3 = document.getElementById("player3");
  const length3 = player3.duration;
  const current_time3 = player3.currentTime;
  const totalLength3 = calculateTotalValue(length3);
  document.getElementById("end-time3").innerHTML = totalLength3;
  const currentTime3 = calculateCurrentValue(current_time3);
  document.getElementById("start-time3").innerHTML = currentTime3;
  const progressbar3 = document.getElementById("seek-obj3");
  progressbar3.value = player3.currentTime / player3.duration;
  progressbar3.addEventListener("click", seek3);

  if (player3.currentTime == player3.duration) {
    document.getElementById("play-btn3").className = "";
  }

  function seek3(event) {
    const percent3 = event.offsetX / this.offsetWidth;
    player3.currentTime = percent3 * player3.duration;
    progressbar3.value = percent3 / 100;
  }
}

function initPlayers(num) {
  // pass num in if there are multiple audio players e.g 'player' + i

  for (let i = 0; i < num; i++) {
    (function () {
      // variables
      // ----------------------------------------------------------
      // audio embed object
      let playerContainer = document.getElementById("player-container"),
        playerContainer2 = document.getElementById("player-container2"),
        playerContainer3 = document.getElementById("player-container3"),
        player = document.getElementById("player"),
        player2 = document.getElementById("player2"),
        player3 = document.getElementById("player3"),
        isPlaying = false,
        playBtn = document.getElementById("play-btn"),
        playBtn2 = document.getElementById("play-btn2"),
        playBtn3 = document.getElementById("play-btn3");

      console.log(num);
      // Controls Listeners
      // ----------------------------------------------------------
      if (playBtn != null) {
        playBtn.addEventListener("click", function () {
          togglePlay();
        });
      }

      if (playBtn2 != null) {
        playBtn2.addEventListener("click", function () {
          togglePlay2();
        });
      }

      if (playBtn3 != null) {
        playBtn3.addEventListener("click", function () {
          togglePlay3();
        });
      }

      // Controls & Sounds Methods
      // ----------------------------------------------------------
      function togglePlay() {
        console.log(document.getElementById("play-btn").className);
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

      function togglePlay2() {
        console.log(document.getElementById("play-btn2").className);
        if (player2.paused === false) {
          player2.pause();
          isPlaying = false;
          document.getElementById("play-btn2").className = "";
        } else {
          player2.play();
          document.getElementById("play-btn2").className = "pause";
          isPlaying = true;
        }
      }

      function togglePlay3() {
        console.log(document.getElementById("play-btn3").className);
        if (player3.paused === false) {
          player3.pause();
          isPlaying = false;
          document.getElementById("play-btn3").className = "";
        } else {
          player3.play();
          document.getElementById("play-btn3").className = "pause";
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
