
const ghostsMove = () => {
  moveGhost(redGhostNumber);
  moveGhost(TealGhostNumber);
};

const moveGhost = (ghostNumber) => {
  var sourceIndex = state.findIndex((element) => element === ghostNumber);
  ghostNumber == redGhostNumber ? direction = directionRedGhost : direction = directionTealGhost
  if (!direction && ghostNumber == redGhostNumber) {
    direction = "left";
  }
  if (!direction && ghostNumber == TealGhostNumber) {
    direction = "right";
  }
  configureDirection(ghostNumber, direction, sourceIndex);
};
const configureDirection = (ghostNumber, direction, sourceIndex) => {
  if (direction === "down") {
    return requestGhostStateChange(
      sourceIndex,
      sourceIndex + numCols,
      ghostNumber
    );
  }
  if (direction === "up") {
    return requestGhostStateChange(
      sourceIndex,
      sourceIndex - numCols,
      ghostNumber
    );
  }
  if (direction === "right") {
    requestGhostStateChange(sourceIndex, sourceIndex + 1, ghostNumber);
  }
  if (direction === "left") {
    requestGhostStateChange(sourceIndex, sourceIndex - 1, ghostNumber);
  }
};

const requestGhostStateChange = (sourceIndex, destIndex, ghostNumber) => {
  ghostNumber == redGhostNumber ? direction = directionRedGhost : direction = directionTealGhost
  if (
    (direction === "left" && sourceIndex % numCols == 0) ||
    (direction === "right" && (sourceIndex + 1) % numCols == 0)
  ) {
    direction = directionsy[Math.floor(Math.random() * 2)];
    direction === "up"
      ? (destIndex = sourceIndex + numCols)
      : (destIndex = sourceIndex - numCols);
  }
  if (state[destIndex] === 1 || state[destIndex] === 2) {
    state[sourceIndex] = state[destIndex];
    state[destIndex] = ghostNumber;
    ghostNumber == TealGhostNumber ?
    state[startTealGhostIndex] = deadzoneNumber
    :
    state[startRedGhostIndex] = deadzoneNumber

    drawState(state);
  } else if (state[destIndex] === triangleNumber) {
    state[sourceIndex] = state[destIndex];
    state[destIndex] = dotNumber;
    if (ghostNumber == TealGhostNumber) {
      state[startTealGhostIndex] = TealGhostNumber;
    }
    if (ghostNumber == redGhostNumber) {
      state[startRedGhostIndex] = redGhostNumber;
    }
    ghostsActivated ? decreaseScore() : ghostsActivated = true
 
    drawState(state);
  } else {
    direction = directions[Math.floor(Math.random() * 4)];
    ghostNumber == redGhostNumber ? directionRedGhost = direction : directionTealGhost = direction
    configureDirection(ghostNumber, direction, sourceIndex);
  }
};
const decreaseScore = () => {
  var score = Number(document.querySelector("#score").innerHTML) - 500;
  var time = Number(document.querySelector("#timer").innerHTML);

  if (score < 0) {
    score += time * 100;
    gameOver();
  }
  document.querySelector("#score").innerHTML = String(score);
};
