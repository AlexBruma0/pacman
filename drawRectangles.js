var rectangle;
const margin = 1/6
const drawRectangels = () => {
    rectangle = {
        topleft: {
            x: -1 + margin,
            y: 1 - margin
        },
        topright: {
            x: 1 - margin,
            y: 1 - margin
        },
        bottomleft: {
            x: -1 + margin,
            y: -1 + margin
        },
        bottomright: {
            x: 1 - margin,
            y: -1 + margin
        }
    }
    fragmentshader = "./shaders/grey.frag"
    rect(rectangle, fragmentshader)
    //topleft 
    const tlrectangle = {
        topleft: {
            x: -1 + 2*margin,
            y: 1 - 2*margin
        },
        topright: {
            x: -margin/2,
            y: 1 - 2*margin
        },
        bottomleft: {
            x: -1 + 2*margin,
            y: 1 - 4*margin
        },
        bottomright: {
            x: -margin/2,
            y: 1 - 4*margin
        }
    }
    fragmentshader = "./shaders/green.frag"
    rect(tlrectangle, fragmentshader)
    //top right
    rectangle = {
        topleft: {
            x: -tlrectangle.topleft.x,
            y: tlrectangle.topleft.y
        },
        topright: {
            x: -tlrectangle.topright.x,
            y: tlrectangle.topright.y
        },
        bottomleft: {
            x: -tlrectangle.bottomleft.x,
            y: tlrectangle.bottomleft.y
        },
        bottomright: {
            x: -tlrectangle.bottomright.x,
            y: tlrectangle.bottomright.y
        }
    }
    rect(rectangle, fragmentshader)
    //bottom left
    rectangle = {
        topleft: {
            x: tlrectangle.topleft.x,
            y: -tlrectangle.topleft.y
        },
        topright: {
            x: tlrectangle.topright.x,
            y: -tlrectangle.topright.y
        },
        bottomleft: {
            x: tlrectangle.bottomleft.x,
            y: -tlrectangle.bottomleft.y
        },
        bottomright: {
            x: tlrectangle.bottomright.x,
            y: -tlrectangle.bottomright.y
        }
    }
    rect(rectangle, fragmentshader)
    //bottom right
    rectangle = {
        topleft: {
            x: -tlrectangle.topleft.x,
            y: -tlrectangle.topleft.y
        },
        topright: {
            x: -tlrectangle.topright.x,
            y: -tlrectangle.topright.y
        },
        bottomleft: {
            x: -tlrectangle.bottomleft.x,
            y: -tlrectangle.bottomleft.y
        },
        bottomright: {
            x: -tlrectangle.bottomright.x,
            y: -tlrectangle.bottomright.y
        }
    }
    rect(rectangle, fragmentshader)

    //middle left
    const mlrectangle = {
        topleft: {
            x: tlrectangle.topleft.x,
            y: margin
        },
        topright: {
            x: tlrectangle.topleft.x+ margin,
            y: margin
        },
        bottomleft: {
            x: tlrectangle.topleft.x,
            y: -margin
        },
        bottomright: {
            x: tlrectangle.topleft.x + margin,
            y: -margin
        }
    }
    rect(mlrectangle, fragmentshader)
    //middle right
    rectangle = {
        topleft: {
            x: -mlrectangle.topleft.x,
            y: mlrectangle.topleft.y
        },
        topright: {
            x: -mlrectangle.topright.x,
            y: mlrectangle.topright.y
        },
        bottomleft: {
            x: -mlrectangle.bottomleft.x,
            y: mlrectangle.bottomleft.y
        },
        bottomright: {
            x: -mlrectangle.bottomright.x,
            y: mlrectangle.bottomright.y
        }
    }
    rect(rectangle, fragmentshader)
    //middle 
    rectangle = {
        topleft: {
            x: -margin/2,
            y: mlrectangle.topleft.y
        },
        topright: {
            x: margin/2,
            y: mlrectangle.topright.y
        },
        bottomleft: {
            x: -margin/2,
            y: mlrectangle.bottomleft.y
        },
        bottomright: {
            x: margin/2,
            y: mlrectangle.bottomright.y
        }
    }
    fragmentshader = "./shaders/blue.frag"
    rect(rectangle, fragmentshader)


    

}