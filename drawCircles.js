const startx = -1 + 1.5*margin 
const xspace = margin*(10/9)
const starty = 1 - 1.5*margin 
const numCols = 9
const numRows = 10
const draw = [
    1,1,1,1,1,1,1,1,1,
    1,0,0,0,1,0,0,0,1,
    1,0,0,0,1,0,0,0,1,
    1,1,1,1,1,1,1,1,1,
    1,0,1,1,0,1,1,0,1,
    1,0,1,1,0,1,1,0,1,
    1,1,1,1,1,1,1,1,1,
    1,0,0,0,1,0,0,0,1,
    1,0,0,0,1,0,0,0,1,
    1,1,1,1,1,1,1,1,1,

]
const drawCircles = () =>{
    draw.forEach((element,index) => {
        element
        ? circle(startx + xspace * (index%numCols) , starty - margin * Math.floor(index/numCols))
        : void(0)
    })
}