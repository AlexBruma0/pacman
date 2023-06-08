var programx
var vBufferx;


const dashedLines = () => {
    const x = xspace*(40/39)
    const bottomLeftx = mlrectangle.bottomleft.x + 3 * x;
    const bottomLefty = mlrectangle.bottomleft.y;
    const lineHeight = (1/6) * ((0.6) * (mlrectangle.topleft.y - mlrectangle.bottomleft.y));
    const spaceing = lineHeight/1.2;
    const numVertDashes = 6;
    const numHorDashes = 3;

    var verticesx = [   
    ];
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < numVertDashes * 2; i++){
        verticesx.push(vec2(bottomLeftx ,bottomLefty + sum1))
        sum1 += ((i + 1) % 2) * lineHeight + (i  % 2) * spaceing;
    }

    for(var i = 0; i < numVertDashes * 2; i++){
        verticesx.push(vec2(bottomLeftx + x,bottomLefty + sum2))
        sum2 += ((i + 1) % 2) * lineHeight + (i  % 2) * spaceing;
    }

    sum1 = 0;
    sum2 = 0;

    for(var i = 0; i < numHorDashes * 2; i++){
        verticesx.push(vec2(bottomLeftx + sum1,bottomLefty))
        sum1 += ((i + 1) % 2) * lineHeight + (i  % 2) * spaceing;
    }

    for(var i = 0; i < numHorDashes * 2; i++){
        verticesx.push(vec2(bottomLeftx + sum2,bottomLefty + 2 * margin))
        sum2 += ((i + 1) % 2) * lineHeight + (i  % 2) * spaceing;
    }

    
    console.log(verticesx)
    fs = "./shaders/blue.frag"
    programx = initShaders( gl, "./shaders/static.vert", fs );

    gl.useProgram( programx );
	vBufferx = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vBufferx);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesx), gl.STATIC_DRAW );
	var vPositionx = gl.getAttribLocation( programx, "vPosition2" );
	gl.vertexAttribPointer( vPositionx, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPositionx ); 
    gl.drawArrays( gl.LINES, 0, verticesx.length);
}
