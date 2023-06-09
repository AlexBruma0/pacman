var pressed = 0;
var gl
var fragmentshader

window.onload = async function init() {

    var canvas = document.getElementById( "gl-canvas" );
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 0.5, 0.5, 0.5, 1.0 );
    program1 = initShaders( gl, "./shaders/dynamic.vert", "./shaders/yellow.frag" );
    program2 = initShaders( gl, "./shaders/dynamic.vert", "./shaders/blue.frag" );
    setInterval(decrementTime,1000)
    render()
}

const render = () => {
    getKey()

    gl.clear( gl.COLOR_BUFFER_BIT ); 
   
  

    drawRectangels()

    gameLogic()

    dashedLines();

	window.requestAnimationFrame(render);
}
const decrementTime = () => {
    
    var time = document.querySelector('#timer').innerHTML
    if(Number(time) == 0){
        return
    }else{
        document.querySelector('#timer').innerHTML = String(Number(time)-1)
    }
}
