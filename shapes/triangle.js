var vBuffer1;
var heightLoc;
var widthLoc;
var xtriangle = 0.0;
var ytriangle = 0.0;
const marg = 1/6
const triangleLength = marg * (8/10)
const padding = 0.07


const triangle = (x,y) => {


    var vertices1 = [
        vec2( -triangleLength/2 + x, y - padding  ),
        vec2(  triangleLength/2 + x, y - padding  ),
        vec2(  x, y + triangleLength - padding ),
    ];



    gl.useProgram( program2 );
    vBuffer1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer1);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices1), gl.STATIC_DRAW );
    var vPosition1 = gl.getAttribLocation( program2, "vPosition1" );
    gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition1 );   
    heightLoc = gl.getUniformLocation(program2, "height");
    widthLoc = gl.getUniformLocation(program2, "width");
    gl.drawArrays( gl.TRIANGLES, 0, 3 );
    gl.uniform1f(heightLoc, xtriangle);
    gl.uniform1f(widthLoc, ytriangle);
}