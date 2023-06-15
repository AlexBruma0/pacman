

const gameLogic = () => {
  window.onload = drawState(state);
  if (!gameStarted) {
    return;
  }
  var sourceIndex = state.findIndex((element) => element === 3);
  if (pressed === "down") {
    requestStateChange(sourceIndex, sourceIndex + numCols);
    pressed = null;
  }
  if (pressed === "up") {
    requestStateChange(sourceIndex, sourceIndex - numCols);
    pressed = null;
  }
  if (pressed === "right" && (sourceIndex + 1) % numCols != 0) {
    requestStateChange(sourceIndex, sourceIndex + 1);
    pressed = null;
  }
  if (pressed === "left" && sourceIndex % numCols != 0) {
    requestStateChange(sourceIndex, sourceIndex - 1);
    pressed = null;
  }
};

const requestStateChange = (sourceIndex, destIndex) => {
  if (state[destIndex] === 1) {
    state[sourceIndex] = 2;
    state[destIndex] = 3;
    increaseScore();
  }
  if (state[destIndex] === 2) {
    state[sourceIndex] = 2;
    state[destIndex] = 3;
  }
  if (state[destIndex] === cherryNumber) {
    state[sourceIndex] = dotEatenNumber;
    state[destIndex] = triangleNumber;
    eatCherryHandler();
  }
  drawState(state);
};
const eatCherryHandler = () => {
    ghostsActivated = false
}

const increaseScore = () => {
  var score = Number(document.querySelector("#score").innerHTML) + 100;
  var time = Number(document.querySelector("#timer").innerHTML);
  if (score >= 5800) {
    score += time * 100;
    endgame(score);
  }
  document.querySelector("#score").innerHTML = String(score);
};
const endgame = (score) => {
  document.getElementById(
    "gameover"
  ).innerHTML = `Your final score is: ${score}`;
  document.getElementById("gameover").style.display = "block";
  document.getElementById("gl-canvas").style.display = "none";
  document.getElementById("timer").style.color = "black";
  document.getElementById("score").style.color = "black";
};
const gameOver = () => {
  document.getElementById(
    "gameover"
  ).innerHTML = `Game over, your score dropped below 0`;
  document.getElementById("gameover").style.display = "block";
  document.getElementById("gl-canvas").style.display = "none";
};

