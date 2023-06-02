const PI = 3.14159
const divisor = 40;
const numVert = 64;
var vertices;
const sin = (x) => {
    return Math.sin(x)/divisor
}
const cos = (x) => {
    return Math.cos(x)/divisor
}
const circle = (x,y) =>{

    
    vertices =  pushVert(numVert, x,y)
    gl.useProgram( program1 );
    vBuffer1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer1);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );
    var vPosition1 = gl.getAttribLocation( program1, "vPosition1" );
    gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition1 );   
    gl.drawArrays( gl.TRIANGLE_FAN, 0, numVert + 2);

}
const pushVert = (numVert, x, y) => {
    const angle = 2*PI/numVert
    let vertices = [
        vec2(x,y),
    ];
    for(var i = 0; i<=numVert; i++){
        vertices.push(vec2( x + cos(angle * i),y + sin(angle * i)))
    }
    return vertices
}