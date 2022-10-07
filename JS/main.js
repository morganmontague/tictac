console.log("running");
function init() {
  let bod = document.querySelector("body");
  bod.setAttribute("class", "text-center");
  createElement(
    "headerContainer",
    "div",
    "",
    "container justify-content-center",
    bod
  );

  let headerContainer = document.getElementById("headerContainerid");
  createElement(
    "h1",
    "h1",
    "Tic Tac Toe: X needs to go",
    "h1 m-4",
    headerContainer
  );

  ///// add local storage to see how many times x or o has won \\\\\\\

  createElement("main", "div", "", "container", headerContainer);
}

// this function adds the divs needed to populate the board

init();

let headerContainer = document.getElementById("headerContainerid");
let mainArea = document.getElementById("mainid");
let h1Text = document.getElementById("h1id");
let testBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let x = "x";
let o = "o";

let playerTurn = 1;

// This section is trying to declare global variables to help with scoping problems

function createElement(area, element, text, clas, parent) {
  let id = `${area}id`;
  let createElement = document.createElement(element);
  parent.appendChild(createElement);
  createElement.setAttribute("id", id);
  createElement.setAttribute("class", clas);
  createElement.innerText = `${text}`;
}

// Both of these are used to create elements into html, create col

function createCol(text, clas, parent, id) {
  let createElement = document.createElement("div");
  parent.appendChild(createElement);
  createElement.setAttribute("id", id);
  element = document.getElementById(id);
  createElement.setAttribute("class", clas);
  createElement.innerText = `${text}`;
}

function boardCreate() {
  createElement("top", "div", "", "row text-center", mainid);
  let rowParent = document.getElementById("topid");

  for (let index = 0; index < 9; index++) {
    createCol("", "col-4 borderbl fs-1 heightCheat", rowParent, `${index}`);
  }
}

// board create uses both createElememnt createCol, create col is run through a loop

boardCreate();

// this function uses an array of the winning combos, cycles through it with a for loop I set each position of winning
// combos to a b c, it also will use remove click if someone won so no more clicks are allowed
function areYaWinningSon() {
  for (let i = 0; i < winning.length; i++) {
    let line = winning[i];
    let a = testBoard[line[0]];
    let b = testBoard[line[1]];
    let c = testBoard[line[2]];
    if (a === 0 || b === 0 || c === 0) {
      // console.log('nope')
      continue;
    }
    if (a === "x" && b === "x" && c === "x") {
      h1Text.innerText = "X Won";
      removeClick();
      break;
    }
    if (a === "o" && b === "o" && c === "o") {
      h1Text.innerText = "O Won";
      removeClick();
      break;
    }
  }
}

// let xImage = docuemnt.createElement('img');
// xImage.src = "./img/close.png"

// This function keeps track of the player turn, and will dictate whos turn it is by even or odd.
// It will insert an x or an o depending on the playersturn. It will also remove the clickEvent for the tile
function clickHandler(e) {
  let colNumber = e.target.id;
  let changeUp = document.getElementById(colNumber);
  if (playerTurn % 2 === 0) {
    changeUp.textContent = "O";
    //changeUp.setAttribute('class', 'ocolor')  // this didn't work
    changeUp.removeEventListener("click", clickHandler);
    playerTurn = playerTurn + 1;
    testBoard[`${colNumber}`] = "o";
  } else if (playerTurn % 2 === 1) {
    changeUp.removeEventListener("click", clickHandler);
    changeUp.innerText = "X";
    //changeUp.setAttribute('class', 'xcolor') // this didn't work
    playerTurn = playerTurn + 1;
    testBoard[`${colNumber}`] = "x";
  }
  updateH1();
  if (playerTurn >= 5) {
    areYaWinningSon(testBoard);
  }
  if (playerTurn >= 10) {
    h1Text.innerText = "TIE!";
  }
}

// This changes the h1 text
function updateH1() {
  if (h1Text.innerText === "Tic Tac Toe: X needs to go") {
    h1Text.innerText = "Tic Tac Toe: O needs to go";
  } else if ((h1Text.innerText = "Tic Tac Toe: O needs to go")) {
    h1Text.innerText = "Tic Tac Toe: X needs to go";
  }
}

let buttons = document.getElementsByClassName("col-4");

// This function will run a loop to add a click event possible for each tile
function addClick() {
  for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener("click", clickHandler);
  }
}

addClick();

// This is the antithesis of addClick, it removes each click event
function removeClick() {
  for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.removeEventListener("click", clickHandler);
  }
}

// below is creating and setting the conditions of the reset button

createElement(
  "reset",
  "button",
  "RESET",
  "btn btn-warning m-4 btn-outline-dark",
  headerContainer
);

let resetBtn = document.getElementById("resetid");

resetBtn.addEventListener("click", () => {
  (testBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]), (playerTurn = 1);
  let rowParent = document.getElementById("topid");
  rowParent.remove();
  boardCreate();
  addClick();
  h1Text.innerText = "Tic Tac Toe: X needs to go";
});

// function winCount (xWin, oWin, tie) {

//       localStorage.setItem(xWin, 0);
//       localStorage.setItem(oWin, 0);
//       localStorage.setItem(tie, 0);

// }

// winCount()