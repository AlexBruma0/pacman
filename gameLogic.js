// 0 deadzone
// 1 dot available
// 2 dot eaten
// 3 pacman position
// 4 red ghost
// 5 teal ghost


const state = [
    1,1,1,1,1,1,1,1,1,
    1,0,0,0,1,0,0,0,1,
    1,0,0,0,1,0,0,0,1,
    1,1,1,1,1,1,1,1,1,
    1,0,1,1,4,1,1,0,1,
    1,0,1,1,5,1,1,0,1,
    1,1,1,1,1,1,1,1,1,
    1,0,0,0,1,0,0,0,1,
    1,0,0,0,1,0,0,0,1,
    1,1,1,1,3,1,1,1,1,
]

const gameLogic = () => {
    var sourceIndex = state.findIndex(element => element === 3)
    if (pressed === 'down'){
        requestStateChange(sourceIndex,sourceIndex + numCols)
        pressed = null
    }
    if (pressed === 'up'){
        requestStateChange(sourceIndex,sourceIndex - numCols)
        pressed = null
    }
    if (pressed === 'right' && (sourceIndex+1)%numCols != 0){
        requestStateChange(sourceIndex,sourceIndex + 1)
        pressed = null
    }   
    if (pressed === 'left'&& sourceIndex%numCols != 0){
        requestStateChange(sourceIndex,sourceIndex - 1)
        pressed = null
    }

    window.onload = drawState(state)
    
}

const ghostsMove = () =>{
    moveGhost(4);
    //moveGhost(5);
}
const moveGhost = (ghostNumber) => {
    const directions = ['up','down','left','right']
    const direction = directions[Math.floor(Math.random() * 4)];
    var sourceIndex = state.findIndex(element => element === 4)
    if (direction === 'down'){
        requestGhostStateChange(sourceIndex,sourceIndex + numCols, ghostNumber)
        pressed = null
    }
    if (direction === 'up'){
        requestGhostStateChange(sourceIndex,sourceIndex - numCols, ghostNumber)
        pressed = null
    }
    if (direction === 'right' && (sourceIndex+1)%numCols != 0){
        requestGhostStateChange(sourceIndex,sourceIndex + 1, ghostNumber)
        pressed = null
    }   
    if (direction === 'left'&& sourceIndex%numCols != 0){
        requestGhostStateChange(sourceIndex,sourceIndex - 1, ghostNumber)
        pressed = null
    }
}
const requestGhostStateChange = (sourceIndex, destIndex, ghostNumber) => {
    if (state[destIndex] === 1 || state[destIndex] === 2){
        state[sourceIndex] = state[destIndex];
        state[destIndex] = ghostNumber
        drawState(state)
    }
    
}

const requestStateChange = (sourceIndex, destIndex) => {
    if (state[destIndex] === 1){
        state[sourceIndex] = 2;
        state[destIndex] = 3
        increaseScore()
    }
    if (state[destIndex] === 2){
        state[sourceIndex] = 2;
        state[destIndex] = 3
    }
    drawState(state)
}

const increaseScore = () => {
    
    var score = document.querySelector('#score').innerHTML
    document.querySelector('#score').innerHTML = String(Number(score)+100)
    
}

