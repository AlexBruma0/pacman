
const directions = ['up','down','left','right']
const directionsy = ['up','down']
var direction;
const ghostSpeed = 1000
const startRedGhostIndex = 40
const startTealGhostIndex = 49
const TealGhostNumber = 5
const redGhostNumber = 4
const ghostsMove = () =>{
    //moveGhost(redGhostNumber);
    moveGhost(TealGhostNumber);
    state[startTealGhostIndex] = 0
   // state[startRedGhostIndex] = 0
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
    if ((direction === 'left'&& sourceIndex%numCols == 0) || (direction === 'right' && (sourceIndex+1)%numCols == 0)){
        direction = directionsy[Math.floor(Math.random() * 2)];
        direction === 'up' ? destIndex = sourceIndex + numCols : destIndex = sourceIndex - numCols
    }
    if (state[destIndex] === 1 || state[destIndex] === 2){
        state[sourceIndex] = state[destIndex];
        state[destIndex] = ghostNumber
        drawState(state)
    } 
    else if(state[destIndex] === 3){
        
        state[sourceIndex] = state[destIndex];
        state[destIndex] = ghostNumber
        decreaseScore()
        drawState(state)
    }
    else {
        direction = directions[Math.floor(Math.random() * 4)];
        configureDirection(ghostNumber,direction,sourceIndex)
    }
    
}
const decreaseScore = () => {
    
    var score = document.querySelector('#score').innerHTML
    document.querySelector('#score').innerHTML = String(Number(score)-500)
    
}