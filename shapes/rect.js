var programx;
var vBufferx;

const rect = (rectangle, fs) => {
  var verticesx = [
    vec2(rectangle.topleft.x, rectangle.topleft.y),
    vec2(rectangle.topright.x, rectangle.topright.y),
    vec2(rectangle.bottomleft.x, rectangle.bottomleft.y),
    vec2(rectangle.bottomright.x, rectangle.bottomright.y),
  ];
  programx = initShaders(gl, "./shaders/static.vert", fs);

  gl.useProgram(programx);
  vBufferx = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vBufferx);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(verticesx), gl.STATIC_DRAW);
  var vPositionx = gl.getAttribLocation(programx, "vPosition2");
  gl.vertexAttribPointer(vPositionx, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPositionx);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};
