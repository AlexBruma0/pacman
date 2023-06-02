var vBuffer1;
var heightLoc;
var widthLoc;
var height = 0.0;
var width = 0.0;
const marg = 1/6
var l = marg * (8/10)

const triangle = () => {
    var vertices1 = [
        vec2( -l/2, -1 + marg + 0.03),
        vec2(  l/2, -1 + marg + 0.03),
        vec2(  0, -1 + marg +l+ 0.01),
    ];

    if (height > -1.8 && pressed == 1)
    height = height - 0.01;

    if (height < 0 && pressed == 2)
        height = height + 0.01;	

    if (width < 0.9 && pressed == 3)
        width = width + 0.01;

    if (width > -0.9 && pressed == 4)
        width = width - 0.01;	


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
    gl.uniform1f(heightLoc, height);
    gl.uniform1f(widthLoc, width);
}