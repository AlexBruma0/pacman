// 0 deadzone
// 1 dot available
// 2 dot eaten
// 3 pacman position

const state = [
    1,1,1,1,1,1,1,1,1,
    1,0,0,0,1,0,0,0,1,
    1,0,0,0,1,0,0,0,1,
    1,1,1,1,1,1,1,1,1,
    1,0,1,1,0,1,1,0,1,
    1,0,1,1,0,1,1,0,1,
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

const requestStateChange = (sourceIndex, destIndex) => {
    if (state[destIndex] === 1){
        state[sourceIndex] = 2;
        state[destIndex] = 3
    }
    if (state[destIndex] === 2){
        state[sourceIndex] = 2;
        state[destIndex] = 3
    }
    drawState(state)
}