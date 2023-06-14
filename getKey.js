const getKey = () => {
  const getKey = (key) => {
    if (key.key === "R" && key.shiftKey) {
      reloadHandler();
    }
    switch (key.key) {
      case "ArrowDown":
        pressed = "down";
        break;
      case "ArrowUp":
        pressed = "up";
        break;
      case "ArrowRight":
        pressed = "right";
        break;
      case "ArrowLeft":
        pressed = "left";
        break;
      case "s":
        pressed = "s";
        playHandler();
        break;
      case "r":
        pressed = "r";
        playHandler();
        break;
      case "p":
        pressed = "p";
        pauseHandler();
        break;
      case "p":
        pressed = "p";
        pauseHandler();
        break;
      default:
        pressed = null;
    }
  };
  window.addEventListener("keydown", getKey, false);
};
