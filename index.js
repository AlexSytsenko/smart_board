const board = document.querySelector("#board");
const SQUARES_NUMBER = 1200;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = '0 0 2px #000';
}


function getRandomColor() {
  var r = ("0" + ((Math.random() * 256) | 0).toString(16)).slice(-2),
    g = ("0" + ((Math.random() * 256) | 0).toString(16)).slice(-2),
    b = ("0" + ((Math.random() * 256) | 0).toString(16)).slice(-2);
  return "#" + r + g + b;
}
