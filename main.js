const directions = ["up", "down", "left", "right"];
const directionsy = ["up", "down"];
const ghostSpeed = 1000;
const startRedGhostIndex = 40;
const startTealGhostIndex = 49;
const TealGhostNumber = 5;
const redGhostNumber = 4;
const triangleNumber = 3;
const deadzoneNumber = 0;
const dotNumber = 1;
const cherryNumber = 6;
const dotEatenNumber = 2
var ghostsActivated = true
var direction;
var pressed;
var gl;
var fragmentshader;
var gameStarted = false;
var timeInterval;
var ghostInterval;

const state = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0,
  1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 0, 1, 1, 0, 1, 1, 5, 1, 1,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0,
  0, 0, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1,
];
window.onload = async function init() {
  var canvas = document.getElementById("gl-canvas");
  gl = WebGLUtils.setupWebGL(canvas);
  if (!gl) {
    alert("WebGL isn't available");
  }
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.5, 0.5, 0.5, 1.0);
  program1 = initShaders(gl, "./shaders/dynamic.vert", "./shaders/yellow.frag");
  program2 = initShaders(gl, "./shaders/dynamic.vert", "./shaders/blue.frag");
  program3 = initShaders(gl, "./shaders/dynamic.vert", "./shaders/red.frag");
  getKey();
  render();
};

const render = () => {
  gl.clear(gl.COLOR_BUFFER_BIT);
  drawRectangels();
  gameLogic();
  dashedLines();
  window.requestAnimationFrame(render);
};
var playHandler = () => {
  timeInterval = setInterval(decrementTime, 1000);
  ghostInterval = setInterval(ghostsMove, ghostSpeed);
  gameStarted = true;
};
const pauseHandler = () => {
  clearInterval(timeInterval);
  clearInterval(ghostInterval);
  gameStarted = false;
};
const reloadHandler = () => {
  location.reload();
};

const decrementTime = () => {
  var time = document.querySelector("#timer").innerHTML;
  if (Number(time) <= 0) {
    document.getElementById("gameover").style.display = "block";
    document.getElementById("gl-canvas").style.display = "none";
  } else {
    document.querySelector("#timer").innerHTML = String(Number(time) - 1);
  }
};
