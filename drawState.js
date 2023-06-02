const startx = -1 + 1.5*margin 
const xspace = margin*(10/9)
const starty = 1 - 1.5*margin 
const numCols = 9
const numRows = 10

const drawState = (state) =>{
    state.forEach((element,index) => {
        if(element == 1){
            circle(startx + xspace * (index%numCols) , starty - margin * Math.floor(index/numCols))
        }
        if(element == 3){
            triangle(startx + xspace * (index%numCols) , starty - margin * Math.floor(index/numCols))
        }
    })
}