
const ghostsMove = () => {
  //moveGhost(redGhostNumber);
  moveGhost(TealGhostNumber);
  // state[startRedGhostIndex] = deadzoneNumber
};

const moveGhost = (ghostNumber) => {
  var sourceIndex = state.findIndex((element) => element === ghostNumber);
  if (!direction && ghostNumber == 4) {
    direction = "left";
    direction = null;
  }
  if (!direction && ghostNumber == 5) {
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
    state[startTealGhostIndex] = deadzoneNumber;

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
    configureDirection(ghostNumber, direction, sourceIndex);
  }
};
const decreaseScore = () => {
  var score = Number(document.querySelector("#score").innerHTML) - 500;
  var time = Number(document.querySelector("#timer").innerHTML);

  if (score < 0) {
    score += time * 100;
    endgame(score);
  }
  document.querySelector("#score").innerHTML = String(score);
};
