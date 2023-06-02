var pressed = 0;

var gl
var fragmentshader
window.onload = async function init() {

    var canvas = document.getElementById( "gl-canvas" );
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 0.5, 0.5, 0.5, 1.0 );

    program1 = initShaders( gl, "./shaders/dynamic.vert", "./shaders/grey.frag" );
    render()
}

const render = () => {
    getKey()

    gl.clear( gl.COLOR_BUFFER_BIT ); 

    drawRectangels()
   
    circle()

	window.requestAnimationFrame(render);
}
