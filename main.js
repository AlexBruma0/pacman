var canvas;
var gl;

var program
var height = 0.0;
var width = 0.0;
var vBuffer;
var heightLoc;
var widthLoc;

window.addEventListener("keydown", getKey, false);
var pressed = 0;
function getKey(key) {
	switch(key.key){
		case "ArrowDown": 
			pressed = 1;
		break

		case "ArrowUp": 
			pressed = 2;
		break

		case "ArrowRight": 
			pressed = 3;
		break
		

		case "ArrowLeft": 
			pressed = 4;
		break


		default:
			pressed = 0;
	}
}

var vertices = [
	vec2( -0.8, 0.8),

	vec2(  .8, 0.8),

	vec2(  .8, -0.8 ),



	vec2( -0.8, 0.8),
	vec2(  0.8, -0.8 ),
    
	vec2( -0.8, -0.8 ),


];


window.onload = function init() {

    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 0.5, 0.5, 0.5, 1.0 );


    program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );

	vBuffer = gl.createBuffer();

	gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );
      

	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );   
    
	heightLoc = gl.getUniformLocation(program, "height");
	widthLoc = gl.getUniformLocation(program, "width");
	
	render();
}

function render() {
    
	if (height > -1.8 && pressed == 1)
		height = height - 0.01;

	if (height < 0 && pressed == 2)
		height = height + 0.01;	

	if (width < 0.9 && pressed == 3)
		width = width + 0.01;

	if (width > -0.9 && pressed == 4)
		width = width - 0.01;	
	
	document.getElementById("debug").innerHTML = height;
	document.getElementById("width").innerHTML = width;
	gl.uniform1f(heightLoc, height);
	gl.uniform1f(widthLoc, width);
	gl.clear( gl.COLOR_BUFFER_BIT ); 
	gl.drawArrays( gl.TRIANGLES, 0, 6 );
	window.requestAnimFrame(render);
}
