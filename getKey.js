const getKey = () => {
    const getKey = (key) => {
        switch(key.key){
            case "ArrowDown": 
                pressed = 1;
            break
    
            case "ArrowUp": 
                pressed = 2;
            break
            case "ArrowRight": 
                pressed = 3;
            break
            case "ArrowLeft": 
                pressed = 4;
            break
            default:
                pressed = 0;
        }
    }
    window.addEventListener("keydown", getKey, false);
}
