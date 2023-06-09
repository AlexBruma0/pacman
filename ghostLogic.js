
const directions = ['up','down','left','right']
const directionsy = ['up','down']
var direction;
const ghostsMove = () =>{
    moveGhost(5);
    moveGhost(4);
}

const moveGhost = (ghostNumber) => {

    var sourceIndex = state.findIndex(element => element === ghostNumber)
    if(!direction && ghostNumber == 4){
        direction = 'left';
        direction = null;
    }
    if(!direction && ghostNumber == 5){
        direction = 'right';
    }
    configureDirection(ghostNumber,direction,sourceIndex)

}
const configureDirection = (ghostNumber,direction,sourceIndex) => {
    if (direction === 'down'){
        return requestGhostStateChange(sourceIndex,sourceIndex + numCols, ghostNumber)
    }
    if (direction === 'up'){
        return requestGhostStateChange(sourceIndex,sourceIndex - numCols, ghostNumber)
    }
    if (direction === 'right' ){
        requestGhostStateChange(sourceIndex,sourceIndex + 1, ghostNumber)
    }   
    if (direction === 'left'){
        requestGhostStateChange(sourceIndex,sourceIndex - 1, ghostNumber)
    }
}

const requestGhostStateChange = (sourceIndex, destIndex, ghostNumber) => {
    console.log(direction)
    if ((direction === 'left'&& sourceIndex%numCols == 0) || (direction === 'right' && (sourceIndex+1)%numCols == 0)){
        direction = directionsy[Math.floor(Math.random() * 2)];
        direction === 'up' ? destIndex = sourceIndex + numCols : destIndex = sourceIndex - numCols
    }
    if (state[destIndex] === 1 || state[destIndex] === 2){
        state[sourceIndex] = state[destIndex];
        state[destIndex] = ghostNumber
        drawState(state)

    } 
    // if (state[destIndex] == 3 ){
    //     void(0)
    //     // state[sourceIndex] = state[destIndex];
    //     // state[destIndex] = ghostNumber
    //       // decreaseScore()
    //     // drawState(state)
    // }
    
    else {
        direction = directions[Math.floor(Math.random() * 4)];
        configureDirection(ghostNumber,direction,sourceIndex)
    }
    
}