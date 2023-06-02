// 0 deadzone
// 1 dot available
// 2 dot eaten
// 3 pacman position
// const state = [
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,1,1,1,1,1,1,1,1,1,0],
//     [0,1,0,0,0,1,0,0,0,1,0],
//     [0,1,0,0,0,1,0,0,0,1,0],
//     [0,1,1,1,1,1,1,1,1,1,0],
//     [0,1,0,1,1,0,1,1,0,1,0],
//     [0,1,0,1,1,0,1,1,0,1,0],
//     [0,1,1,1,1,1,1,1,1,1,0],
//     [0,1,0,0,0,1,0,0,0,1,0],
//     [0,1,0,0,0,1,0,0,0,1,0],
//     [0,1,1,1,1,3,1,1,1,1,0],  
//     [0,0,0,0,0,0,0,0,0,0,0],
// ]
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
const yunit = 1/6
const xunit = yunit * (10/9)

const gameLogic = () => {
    drawState(state)
    // if (pressed === 'down'){
    //     xtriangle = xtriangle - marg;
    //     pressed = null
    // }
    // if (pressed === 'up'){
    //     xtriangle = xtriangle + marg;	
    //     pressed = null
    // }
    // if (pressed === 'right'){
    //     ytriangle = ytriangle + marg;
    //     pressed = null
    // }   
    // if (pressed === 'left'){
    //     ytriangle = ytriangle - marg;	
    //     pressed = null
    // }
    // triangle(0,0)
}

const requestStateChange = (sourceCol,sourceRow,destCol,destRow) => {
    if (state[destCol][destRow] === 1){
        state[sourceCol][sourceRow] = 0;
        state[destCol][destRow] = 3
    }
}