
var vertices;
const cherry = (x,y) =>{

    
    vertices =  pushVert(numVert, x,y)
    gl.useProgram( program3 );
    vBuffer1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer1);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );
    var vPosition1 = gl.getAttribLocation( program1, "vPosition1" );
    gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition1 );                       
    gl.drawArrays( gl.TRIANGLE_FAN, 0, numVert + 2);

}
