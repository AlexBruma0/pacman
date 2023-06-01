var canvas;
var gl;

var program1
var program2
var height = 0.0;
var width = 0.0;
var vBuffer1;
var vBuffer2;
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

var vertices1 = [
	vec2( -0.8, 0.1),
	vec2(  .0, 0.1),
	vec2(  -.8, -0.8 ),
	vec2( 0.0, -0.8),
];

var vertices2 = [
	vec2( -0.9, 0.9),
	vec2(  .9, 0.9),
	vec2(  -.9, -0.0 ),
	vec2( 0.9, -0.0),
];


window.onload = function init() {

    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 0.5, 0.5, 0.5, 1.0 );

    program2 = initShaders( gl, "vertex-shader2", "fragment-shader2" );
	gl.useProgram( program2 );
	vBuffer2 = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer2);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices2), gl.STATIC_DRAW );
	var vPosition2 = gl.getAttribLocation( program2, "vPosition2" );
	gl.vertexAttribPointer( vPosition2, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition2 ); 
    gl.clear( gl.COLOR_BUFFER_BIT ); 
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );


    program1 = initShaders( gl, "vertex-shader1", "fragment-shader1" );
	gl.useProgram( program1 );
	vBuffer1 = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer1);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices1), gl.STATIC_DRAW );
	var vPosition1 = gl.getAttribLocation( program1, "vPosition1" );
	gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition1 );   
	heightLoc = gl.getUniformLocation(program1, "height");
	widthLoc = gl.getUniformLocation(program1, "width");
    render()


	
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
	//gl.clear( gl.COLOR_BUFFER_BIT ); 
	gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    
	//window.requestAnimationFrame(render);
}
