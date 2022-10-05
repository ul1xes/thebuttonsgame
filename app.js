const RED_VALUE = document.getElementById("red-btn");
const BLUE_VALUE = document.getElementById("blue-btn");
const GREEN_VALUE = document.getElementById("green-btn");
const YELLOW_VALUE = document.getElementById("yellow-btn");
const PURPLE_VALUE = document.getElementById("purple-btn");
const BLACK_VALUE = document.getElementById("black-btn");
const ORANGE_VALUE = document.getElementById("orange-btn");
const BROWN_VALUE = document.getElementById("brown-btn");
const PINK_VALUE = document.getElementById("pink-btn");
const BUTTONS = document.querySelectorAll(".game-btn");
const POINTS = document.getElementById("points-counter");
const HIGH_SCORE = document.getElementById("high-score");

let nPoints = 0;
let highScore = 0;
let CURRENT_COLOR;

let timerEl = document.getElementById("countdown");


enableStartGame = () => {
  buttonStartGame.disabled = false;
  buttonStartGame.style.cursor = "pointer";
  buttonStartGame.style.boxShadow = "1px 3px rgb(11, 11, 11, 0.15)";
};

disableStartGame = () => {
  buttonStartGame.disabled = true;
  buttonStartGame.style.cursor = "not-allowed";
  buttonStartGame.style.boxShadow = "none";
};

disableButtons = () => {
  // RED_VALUE.disabled = true;
  // BLUE_VALUE.disabled = true;
  // GREEN_VALUE.disabled = true;
  // YELLOW_VALUE.disabled = true;
  // PURPLE_VALUE.disabled = true;
  // BLACK_VALUE.disabled = true;
  // ORANGE_VALUE.disabled = true;
  // BROWN_VALUE.disabled = true;
  // PINK_VALUE.disabled = true;
  for (var i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].disabled = true;
    BUTTONS[i].style.cursor = "not-allowed";
    BUTTONS[i].classList.remove("hasactive");
  }
};

POINTS.textContent = "POINTS: 0";
HIGH_SCORE.textContent = "HIGH SCORE: 0";


disableButtons();


enableButtons = () => {
  for (var i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].disabled = false;
    BUTTONS[i].style.cursor = "pointer";
    BUTTONS[i].classList.add("hasactive");
  }
};

setCountdown = () => {
  timerEl.textContent = "15 Seconds remaining";
  let timeLeft = 14;
  let downloadTimer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("text-current-color").textContent = "GAME OVER!";
      document.getElementById("text-current-color").style.color = "black";
      timerEl.textContent = "0 Seconds remaining";
      disableButtons();
      enableStartGame();
      if (nPoints > highScore) {
        highScore = nPoints;
        HIGH_SCORE.textContent = "HIGH SCORE: " + highScore;
      }
      nPoints = 0;
    } else {
      timerEl.textContent = timeLeft + " Seconds remaining";
    }
    timeLeft -= 1;
  }, 1000);
};

const startGame = () => {
  disableStartGame();
  enableButtons();
  setCountdown();
  showCurrentColor();
};

let randomColor = () => {
  let randomNumber = Math.random();
  if (randomNumber < 0.1) {
    CURRENT_COLOR = RED_VALUE;
  } else if (randomNumber < 0.2) {
    CURRENT_COLOR = BLUE_VALUE;
  } else if (randomNumber < 0.3) {
    CURRENT_COLOR = GREEN_VALUE;
  } else if (randomNumber < 0.4) {
    CURRENT_COLOR = YELLOW_VALUE;
  } else if (randomNumber < 0.5) {
    CURRENT_COLOR = PURPLE_VALUE;
  } else if (randomNumber < 0.6) {
    CURRENT_COLOR = BLACK_VALUE;
  } else if (randomNumber < 0.7) {
    CURRENT_COLOR = ORANGE_VALUE;
  } else if (randomNumber < 0.8) {
    CURRENT_COLOR = BROWN_VALUE;
  } else if (randomNumber < 0.9) {
    CURRENT_COLOR = PINK_VALUE;
  } else if (randomNumber < 1) {
    randomNumber = Math.random();
  }

  return CURRENT_COLOR;
};

const showCurrentColor = () => {
  let textColor = randomColor();
  POINTS.textContent = "POINTS: " + nPoints;
  console.log(textColor);
  if (textColor === GREEN_VALUE) {
    document.getElementById("text-current-color").textContent = "GREEN!";
    document.getElementById("text-current-color").style.color = "green";
  } else if (textColor === RED_VALUE) {
    document.getElementById("text-current-color").textContent = "RED!";
    document.getElementById("text-current-color").style.color = "crimson";
  } else if (textColor === BLUE_VALUE) {
    document.getElementById("text-current-color").textContent = "BLUE!";
    document.getElementById("text-current-color").style.color = "darkblue";
  } else if (textColor === YELLOW_VALUE) {
    document.getElementById("text-current-color").textContent = "YELLOW!";
    document.getElementById("text-current-color").style.color = "gold";
  } else if (textColor === PURPLE_VALUE) {
    document.getElementById("text-current-color").textContent = "PURPLE!";
    document.getElementById("text-current-color").style.color = "purple";
  } else if (textColor === BLACK_VALUE) {
    document.getElementById("text-current-color").textContent = "BLACK!";
    document.getElementById("text-current-color").style.color = "black";
  } else if (textColor === ORANGE_VALUE) {
    document.getElementById("text-current-color").textContent = "ORANGE!";
    document.getElementById("text-current-color").style.color = "orange";
  } else if (textColor === BROWN_VALUE) {
    document.getElementById("text-current-color").textContent = "BROWN!";
    document.getElementById("text-current-color").style.color = "brown";
  } else if (textColor === PINK_VALUE) {
    document.getElementById("text-current-color").textContent = "PINK!";
    document.getElementById("text-current-color").style.color = "pink";
  }
  return textColor;
};

const playerClickButtonHandler = (e) => {
  console.log(e);
  if (CURRENT_COLOR === e.target) {
    console.log("Daje");
    nPoints++;
    console.log(nPoints);
    showCurrentColor();
  }
};

buttonStartGame = document.getElementById("start-game");
buttonStartGame.addEventListener("click", startGame);

GREEN_VALUE.addEventListener("click", playerClickButtonHandler);
RED_VALUE.addEventListener("click", playerClickButtonHandler);
BLUE_VALUE.addEventListener("click", playerClickButtonHandler);
YELLOW_VALUE.addEventListener("click", playerClickButtonHandler);
PURPLE_VALUE.addEventListener("click", playerClickButtonHandler);
BLACK_VALUE.addEventListener("click", playerClickButtonHandler);
ORANGE_VALUE.addEventListener("click", playerClickButtonHandler);
BROWN_VALUE.addEventListener("click", playerClickButtonHandler);
PINK_VALUE.addEventListener("click", playerClickButtonHandler);
