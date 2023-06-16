var rectangle;
const margin = 1 / 6;
//topleft
const tlrectangle = {
  topleft: {
    x: -1 + 2 * margin,
    y: 1 - 2 * margin,
  },
  topright: {
    x: -margin / 2,
    y: 1 - 2 * margin,
  },
  bottomleft: {
    x: -1 + 2 * margin,
    y: 1 - 4 * margin,
  },
  bottomright: {
    x: -margin / 2,
    y: 1 - 4 * margin,
  },
};
//middle left
const mlrectangle = {
  topleft: {
    x: tlrectangle.topleft.x,
    y: margin,
  },
  topright: {
    x: tlrectangle.topleft.x + margin,
    y: margin,
  },
  bottomleft: {
    x: tlrectangle.topleft.x,
    y: -margin,
  },
  bottomright: {
    x: tlrectangle.topleft.x + margin,
    y: -margin,
  },
};
const drawRectangels = () => {
  rectangle = {
    topleft: {
      x: -1 + margin,
      y: 1 - margin,
    },
    topright: {
      x: 1 - margin,
      y: 1 - margin,
    },
    bottomleft: {
      x: -1 + margin,
      y: -1 + margin,
    },
    bottomright: {
      x: 1 - margin,
      y: -1 + margin,
    },
  };

  greyRect(rectangle);


  greenRect(tlrectangle);
  //top right
  rectangle = {
    topleft: {
      x: -tlrectangle.topleft.x,
      y: tlrectangle.topleft.y,
    },
    topright: {
      x: -tlrectangle.topright.x,
      y: tlrectangle.topright.y,
    },
    bottomleft: {
      x: -tlrectangle.bottomleft.x,
      y: tlrectangle.bottomleft.y,
    },
    bottomright: {
      x: -tlrectangle.bottomright.x,
      y: tlrectangle.bottomright.y,
    },
  };
  greenRect(rectangle);
  //bottom left
  rectangle = {
    topleft: {
      x: tlrectangle.topleft.x,
      y: -tlrectangle.topleft.y,
    },
    topright: {
      x: tlrectangle.topright.x,
      y: -tlrectangle.topright.y,
    },
    bottomleft: {
      x: tlrectangle.bottomleft.x,
      y: -tlrectangle.bottomleft.y,
    },
    bottomright: {
      x: tlrectangle.bottomright.x,
      y: -tlrectangle.bottomright.y,
    },
  };
  greenRect(rectangle);
  //bottom right
  rectangle = {
    topleft: {
      x: -tlrectangle.topleft.x,
      y: -tlrectangle.topleft.y,
    },
    topright: {
      x: -tlrectangle.topright.x,
      y: -tlrectangle.topright.y,
    },
    bottomleft: {
      x: -tlrectangle.bottomleft.x,
      y: -tlrectangle.bottomleft.y,
    },
    bottomright: {
      x: -tlrectangle.bottomright.x,
      y: -tlrectangle.bottomright.y,
    },
  };
  greenRect(rectangle);

  greenRect(mlrectangle);
  //middle right
  rectangle = {
    topleft: {
      x: -mlrectangle.topleft.x,
      y: mlrectangle.topleft.y,
    },
    topright: {
      x: -mlrectangle.topright.x,
      y: mlrectangle.topright.y,
    },
    bottomleft: {
      x: -mlrectangle.bottomleft.x,
      y: mlrectangle.bottomleft.y,
    },
    bottomright: {
      x: -mlrectangle.bottomright.x,
      y: mlrectangle.bottomright.y,
    },
  };
  greenRect(rectangle);
  //middle
};
