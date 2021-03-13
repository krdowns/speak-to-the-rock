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

function initProgressBar4() {
  const player4 = document.getElementById("player4");
  const length4 = player4.duration;
  const current_time4 = player4.currentTime;
  const totalLength4 = calculateTotalValue(length4);
  document.getElementById("end-time4").innerHTML = totalLength4;
  const currentTime4 = calculateCurrentValue(current_time4);
  document.getElementById("start-time4").innerHTML = currentTime4;
  const progressbar4 = document.getElementById("seek-obj4");
  progressbar4.value = player4.currentTime / player4.duration;
  progressbar4.addEventListener("click", seek4);

  if (player4.currentTime == player4.duration) {
    document.getElementById("play-btn4").className = "";
  }

  function seek4(event) {
    const percent4 = event.offsetX / this.offsetWidth;
    player4.currentTime = percent4 * player4.duration;
    progressbar4.value = percent4 / 100;
  }
}

function initProgressBar5() {
  const player5 = document.getElementById("player5");
  const length5 = player5.duration;
  const current_time5 = player5.currentTime;
  const totalLength5 = calculateTotalValue(length5);
  document.getElementById("end-time5").innerHTML = totalLength5;
  const currentTime5 = calculateCurrentValue(current_time5);
  document.getElementById("start-time5").innerHTML = currentTime5;
  const progressbar5 = document.getElementById("seek-obj5");
  progressbar5.value = player5.currentTime / player5.duration;
  progressbar5.addEventListener("click", seek5);

  if (player5.currentTime == player5.duration) {
    document.getElementById("play-btn5").className = "";
  }

  function seek5(event) {
    const percent5 = event.offsetX / this.offsetWidth;
    player5.currentTime = percent5 * player5.duration;
    progressbar5.value = percent5 / 100;
  }
}

function initProgressBar6() {
  const player6 = document.getElementById("player6");
  const length6 = player6.duration;
  const current_time6 = player6.currentTime;
  const totalLength6 = calculateTotalValue(length6);
  document.getElementById("end-time6").innerHTML = totalLength6;
  const currentTime6 = calculateCurrentValue(current_time6);
  document.getElementById("start-time6").innerHTML = currentTime6;
  const progressbar6 = document.getElementById("seek-obj6");
  progressbar6.value = player6.currentTime / player6.duration;
  progressbar6.addEventListener("click", seek6);

  if (player6.currentTime == player6.duration) {
    document.getElementById("play-btn6").className = "";
  }

  function seek6(event) {
    const percent6 = event.offsetX / this.offsetWidth;
    player6.currentTime = percent6 * player6.duration;
    progressbar6.value = percent6 / 100;
  }
}

function initProgressBar7() {
  const player7 = document.getElementById("player7");
  const length7 = player7.duration;
  const current_time7 = player7.currentTime;
  const totalLength7 = calculateTotalValue(length7);
  document.getElementById("end-time7").innerHTML = totalLength7;
  const currentTime7 = calculateCurrentValue(current_time7);
  document.getElementById("start-time7").innerHTML = currentTime7;
  const progressbar7 = document.getElementById("seek-obj7");
  progressbar7.value = player7.currentTime / player7.duration;
  progressbar7.addEventListener("click", seek7);

  if (player7.currentTime == player7.duration) {
    document.getElementById("play-btn7").className = "";
  }

  function seek7(event) {
    const percent7 = event.offsetX / this.offsetWidth;
    player7.currentTime = percent7 * player7.duration;
    progressbar7.value = percent7 / 100;
  }
}

function initProgressBar8() {
  const player8 = document.getElementById("player8");
  const length8 = player8.duration;
  const current_time8 = player8.currentTime;
  const totalLength8 = calculateTotalValue(length8);
  document.getElementById("end-time8").innerHTML = totalLength8;
  const currentTime8 = calculateCurrentValue(current_time8);
  document.getElementById("start-time8").innerHTML = currentTime8;
  const progressbar8 = document.getElementById("seek-obj8");
  progressbar8.value = player8.currentTime / player8.duration;
  progressbar8.addEventListener("click", seek8);

  if (player8.currentTime == player8.duration) {
    document.getElementById("play-btn8").className = "";
  }

  function seek8(event) {
    const percent8 = event.offsetX / this.offsetWidth;
    player8.currentTime = percent8 * player8.duration;
    progressbar8.value = percent8 / 100;
  }
}

function initProgressBar9() {
  const player9 = document.getElementById("player9");
  const length9 = player9.duration;
  const current_time9 = player9.currentTime;
  const totalLength9 = calculateTotalValue(length9);
  document.getElementById("end-time9").innerHTML = totalLength9;
  const currentTime9 = calculateCurrentValue(current_time9);
  document.getElementById("start-time9").innerHTML = currentTime9;
  const progressbar9 = document.getElementById("seek-obj9");
  progressbar9.value = player9.currentTime / player9.duration;
  progressbar9.addEventListener("click", seek9);

  if (player9.currentTime == player9.duration) {
    document.getElementById("play-btn9").className = "";
  }

  function seek9(event) {
    const percent9 = event.offsetX / this.offsetWidth;
    player9.currentTime = percent9 * player9.duration;
    progressbar9.value = percent9 / 100;
  }
}

function initProgressBar10() {
  const player10 = document.getElementById("player10");
  const length10 = player10.duration;
  const current_time10 = player10.currentTime;
  const totalLength10 = calculateTotalValue(length10);
  document.getElementById("end-time10").innerHTML = totalLength10;
  const currentTime10 = calculateCurrentValue(current_time10);
  document.getElementById("start-time10").innerHTML = currentTime10;
  const progressbar10 = document.getElementById("seek-obj10");
  progressbar10.value = player10.currentTime / player10.duration;
  progressbar10.addEventListener("click", seek10);

  if (player10.currentTime == player10.duration) {
    document.getElementById("play-btn10").className = "";
  }

  function seek10(event) {
    const percent10 = event.offsetX / this.offsetWidth;
    player10.currentTime = percent10 * player10.duration;
    progressbar10.value = percent10 / 100;
  }
}

function initProgressBar11() {
  const player11 = document.getElementById("player11");
  const length11 = player11.duration;
  const current_time11 = player11.currentTime;
  const totalLength11 = calculateTotalValue(length11);
  document.getElementById("end-time11").innerHTML = totalLength11;
  const currentTime11 = calculateCurrentValue(current_time11);
  document.getElementById("start-time11").innerHTML = currentTime11;
  const progressbar11 = document.getElementById("seek-obj11");
  progressbar11.value = player11.currentTime / player11.duration;
  progressbar11.addEventListener("click", seek11);

  if (player11.currentTime == player11.duration) {
    document.getElementById("play-btn11").className = "";
  }

  function seek11(event) {
    const percent11 = event.offsetX / this.offsetWidth;
    player11.currentTime = percent11 * player11.duration;
    progressbar11.value = percent11 / 100;
  }
}

function initProgressBar12() {
  const player12 = document.getElementById("player12");
  const length12 = player12.duration;
  const current_time12 = player12.currentTime;
  const totalLength12 = calculateTotalValue(length12);
  document.getElementById("end-time12").innerHTML = totalLength12;
  const currentTime12 = calculateCurrentValue(current_time12);
  document.getElementById("start-time12").innerHTML = currentTime12;
  const progressbar12 = document.getElementById("seek-obj12");
  progressbar12.value = player12.currentTime / player12.duration;
  progressbar12.addEventListener("click", seek12);

  if (player12.currentTime == player12.duration) {
    document.getElementById("play-btn12").className = "";
  }

  function seek12(event) {
    const percent12 = event.offsetX / this.offsetWidth;
    player12.currentTime = percent12 * player12.duration;
    progressbar12.value = percent12 / 100;
  }
}

function initProgressBar13() {
  const player13 = document.getElementById("player13");
  const length13 = player13.duration;
  const current_time13 = player13.currentTime;
  const totalLength13 = calculateTotalValue(length13);
  document.getElementById("end-time13").innerHTML = totalLength13;
  const currentTime13 = calculateCurrentValue(current_time13);
  document.getElementById("start-time13").innerHTML = currentTime13;
  const progressbar13 = document.getElementById("seek-obj13");
  progressbar13.value = player13.currentTime / player13.duration;
  progressbar13.addEventListener("click", seek13);

  if (player13.currentTime == player13.duration) {
    document.getElementById("play-btn13").className = "";
  }

  function seek13(event) {
    const percent13 = event.offsetX / this.offsetWidth;
    player13.currentTime = percent13 * player13.duration;
    progressbar13.value = percent13 / 100;
  }
}

function initProgressBar14() {
  const player14 = document.getElementById("player14");
  const length14 = player14.duration;
  const current_time14 = player14.currentTime;
  const totalLength14 = calculateTotalValue(length14);
  document.getElementById("end-time14").innerHTML = totalLength14;
  const currentTime14 = calculateCurrentValue(current_time14);
  document.getElementById("start-time14").innerHTML = currentTime14;
  const progressbar14 = document.getElementById("seek-obj14");
  progressbar14.value = player14.currentTime / player14.duration;
  progressbar14.addEventListener("click", seek14);

  if (player14.currentTime == player14.duration) {
    document.getElementById("play-btn14").className = "";
  }

  function seek14(event) {
    const percent14 = event.offsetX / this.offsetWidth;
    player14.currentTime = percent14 * player14.duration;
    progressbar14.value = percent14 / 100;
  }
}

function initProgressBar15() {
  const player15 = document.getElementById("player15");
  const length15 = player15.duration;
  const current_time15 = player15.currentTime;
  const totalLength15 = calculateTotalValue(length15);
  document.getElementById("end-time15").innerHTML = totalLength15;
  const currentTime15 = calculateCurrentValue(current_time15);
  document.getElementById("start-time15").innerHTML = currentTime15;
  const progressbar15 = document.getElementById("seek-obj15");
  progressbar15.value = player15.currentTime / player15.duration;
  progressbar15.addEventListener("click", seek15);

  if (player15.currentTime == player15.duration) {
    document.getElementById("play-btn15").className = "";
  }

  function seek15(event) {
    const percent15 = event.offsetX / this.offsetWidth;
    player15.currentTime = percent15 * player15.duration;
    progressbar15.value = percent15 / 100;
  }
}

function initProgressBar16() {
  const player16 = document.getElementById("player16");
  const length16 = player16.duration;
  const current_time16 = player16.currentTime;
  const totalLength16 = calculateTotalValue(length16);
  document.getElementById("end-time16").innerHTML = totalLength16;
  const currentTime16 = calculateCurrentValue(current_time16);
  document.getElementById("start-time16").innerHTML = currentTime16;
  const progressbar16 = document.getElementById("seek-obj16");
  progressbar16.value = player16.currentTime / player16.duration;
  progressbar16.addEventListener("click", seek16);

  if (player16.currentTime == player16.duration) {
    document.getElementById("play-btn16").className = "";
  }

  function seek16(event) {
    const percent16 = event.offsetX / this.offsetWidth;
    player16.currentTime = percent16 * player16.duration;
    progressbar16.value = percent16 / 100;
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
        playerContainer4 = document.getElementById("player-container4"),
        playerContainer5 = document.getElementById("player-container5"),
        playerContainer6 = document.getElementById("player-container6"),
        playerContainer7 = document.getElementById("player-container7"),
        playerContainer8 = document.getElementById("player-container8"),
        playerContainer9 = document.getElementById("player-container9"),
        playerContainer10 = document.getElementById("player-container10"),
        playerContainer11 = document.getElementById("player-container11"),
        playerContainer12 = document.getElementById("player-container12"),
        playerContainer13 = document.getElementById("player-container13"),
        playerContainer14 = document.getElementById("player-container14"),
        playerContainer15 = document.getElementById("player-container15"),
        playerContainer16 = document.getElementById("player-container16"),
        player = document.getElementById("player"),
        player2 = document.getElementById("player2"),
        player3 = document.getElementById("player3"),
        player4 = document.getElementById("player4"),
        isPlaying = false,
        playBtn = document.getElementById("play-btn"),
        playBtn2 = document.getElementById("play-btn2"),
        playBtn3 = document.getElementById("play-btn3"),
        playBtn4 = document.getElementById("play-btn4");

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

      if (playBtn4 != null) {
        playBtn4.addEventListener("click", function () {
          togglePlay4();
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
      function togglePlay4() {
        console.log(document.getElementById("play-btn4").className);
        if (player4.paused === false) {
          player4.pause();
          isPlaying = false;
          document.getElementById("play-btn4").className = "";
        } else {
          player4.play();
          document.getElementById("play-btn4").className = "pause";
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
