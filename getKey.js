const getKey = () => {
    const getKey = (key) => {
        switch(key.key){
            case "ArrowDown": 
                pressed = 'down';
                break
            case "ArrowUp": 
                pressed = 'up';
                break
            case "ArrowRight": 
                pressed = 'right';
                break
            case "ArrowLeft": 
                pressed = 'left';
                break
            case "s":
                pressed = "s";
                playHandler()
                break
            case "p":
                pressed = "p";
                pauseHandler()
                break
            default:
                pressed = null;
        }
        console.log(pressed)
    }
    window.addEventListener("keydown", getKey, false);
}
