var pressed = 0;
const margin = 1/8
var gl
var rectangle;
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
    rectangle = {
        topleft: {
            x: -1 + margin,
            y: 1 - margin
        },
        topright: {
            x: 1 - margin,
            y: 1 - margin
        },
        bottomleft: {
            x: -1 + margin,
            y: -1 + margin
        },
        bottomright: {
            x: 1 - margin,
            y: -1 + margin
        }
    }
    fragmentshader = "./shaders/grey.frag"
    rect(rectangle, fragmentshader)

    rectangle = {
        topleft: {
            x: -1 + 2*margin,
            y: 1 - 2*margin
        },
        topright: {
            x: -margin/2,
            y: 1 - 2*margin
        },
        bottomleft: {
            x: -1 + 2*margin,
            y: 1 - 6*margin
        },
        bottomright: {
            x: -margin/2,
            y: 1 - 6*margin
        }
    }
    fragmentshader = "./shaders/green.frag"
    rect(rectangle, fragmentshader)

    //triangle()

	window.requestAnimationFrame(render);
}
