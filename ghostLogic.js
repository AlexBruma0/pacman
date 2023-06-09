const ghostsMove = () =>{
    direction = 'left';
    moveGhost(4 ,direction);
    //moveGhost(5);
}
const moveGhost = (ghostNumber, direction) => {
    const directions = ['up','down','left','right']
    var sourceIndex = state.findIndex(element => element === 4)

    if(!configureDirection(ghostNumber, direction, sourceIndex))
    {
        direction = directions[Math.floor(Math.random() * 4)];
        configureDirection(ghostNumber, direction, sourceIndex)
    }

}
const configureDirection = (ghostNumber,direction,sourceIndex) => {
    if (direction === 'down'){
        pressed = null
        return requestGhostStateChange(sourceIndex,sourceIndex + numCols, ghostNumber)
       
    }
    if (direction === 'up'){
        pressed = null
        return requestGhostStateChange(sourceIndex,sourceIndex - numCols, ghostNumber)
        
    }
    if (direction === 'right' && (sourceIndex+1)%numCols != 0){
        pressed = null
        return requestGhostStateChange(sourceIndex,sourceIndex + 1, ghostNumber)
        
    }   
    if (direction === 'left'&& sourceIndex%numCols != 0){
        pressed = null
        return requestGhostStateChange(sourceIndex,sourceIndex - 1, ghostNumber)
        
    }
}

const requestGhostStateChange = (sourceIndex, destIndex, ghostNumber) => {
    if (state[destIndex] === 1 || state[destIndex] === 2){
        state[sourceIndex] = state[destIndex];
        state[destIndex] = ghostNumber
        drawState(state)
        return true;
    } else{
        return false;
    }
    
}