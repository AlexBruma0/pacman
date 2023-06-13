var pressed;
var gl
var fragmentshader
var gameStarted = false;

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
window.onload = async function init() {

    var canvas = document.getElementById( "gl-canvas" );
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 0.5, 0.5, 0.5, 1.0 );
    program1 = initShaders( gl, "./shaders/dynamic.vert", "./shaders/yellow.frag" );
    program2 = initShaders( gl, "./shaders/dynamic.vert", "./shaders/blue.frag" );
    getKey()
    render()
}

var firstKeyDownHandler = () => {
    console.log(pressed)
    if(pressed === "s"){
        setInterval(decrementTime,1000)
        setInterval(ghostsMove, ghostSpeed)
        gameStarted = true;
        pressed = null
       // document.removeEventListener('keydown', firstKeyDownHandler);
    }
}
//document.addEventListener('keydown',firstKeyDownHandler)

const render = () => {
 
    gl.clear( gl.COLOR_BUFFER_BIT ); 
    drawRectangels()
    gameLogic()
    dashedLines();
	window.requestAnimationFrame(render);
}
const decrementTime = () => {
    
    var time = document.querySelector('#timer').innerHTML
    if(Number(time) <= 0){
        document.getElementById("gameover").style.display = 'block'
        document.getElementById("gl-canvas").style.display = 'none'
    }else{
        document.querySelector('#timer').innerHTML = String(Number(time)-1)
    }
}
