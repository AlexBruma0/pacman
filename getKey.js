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
            default:
                pressed = null;
        }
    }
    window.addEventListener("keydown", getKey, false);
}
