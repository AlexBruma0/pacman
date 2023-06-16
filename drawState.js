const startx = -1 + 1.5 * margin;
const xspace = margin * (10 / 9);
const starty = 1 - 1.5 * margin;
const numCols = 9;
const numRows = 10;
const startRedGhostx = 0;
const startRedGhosty = margin / 2;

const drawState = (state) => {
  state.forEach((element, index) => {
    if (element == 1) {
      circle(
        startx + xspace * (index % numCols),
        starty - margin * Math.floor(index / numCols)
      );
    }
    if (element == 3) {
      triangle(
        startx + xspace * (index % numCols),
        starty - margin * Math.floor(index / numCols)
      );
    }
    if (element == redGhostNumber) {

      redGhost(
        startx + xspace * (index % numCols),
        starty - margin * Math.floor(index / numCols)
      );
    }
    if (element == TealGhostNumber) {

      tealGhost(
        startx + xspace * (index % numCols),
        starty - margin * Math.floor(index / numCols)
      );
    }
    if (element == cherryNumber) {

      cherry(
        startx + xspace * (index % numCols),
        starty - margin * Math.floor(index / numCols)
      );
    }
  });
};

const redGhost = (x, y) => {
  const ghostLength = (1 / 2) * margin;
  redRect(
    {
      topleft: {
        x: x - ghostLength / 2,
        y: y + ghostLength / 2,
      },
      topright: {
        x: x + ghostLength / 2,
        y: y + ghostLength / 2,
      },
      bottomleft: {
        x: x - ghostLength / 2,
        y: y - ghostLength / 2,
      },
      bottomright: {
        x: x + ghostLength / 2,
        y: y - ghostLength / 2,
      },
    }
  );
};
const tealGhost = (x, y) => {
  const ghostLength = (1 / 2) * margin;
  tealRect(
    {
      topleft: {
        x: x - ghostLength / 2,
        y: y + ghostLength / 2,
      },
      topright: {
        x: x + ghostLength / 2,
        y: y + ghostLength / 2,
      },
      bottomleft: {
        x: x - ghostLength / 2,
        y: y - ghostLength / 2,
      },
      bottomright: {
        x: x + ghostLength / 2,
        y: y - ghostLength / 2,
      },
    }
  );
};
