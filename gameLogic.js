// 0 deadzone
// 1 dot available
// 2 dot eaten
// 3 pacman position
// 4 red ghost
// 5 teal ghost

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
const decreaseScore = () => {
    
    var score = document.querySelector('#score').innerHTML
    document.querySelector('#score').innerHTML = String(Number(score)-500)
    
}

