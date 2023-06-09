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