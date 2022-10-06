console.log('running')
let bod = document.querySelector('body')
createElement('headerContainer', 'div', '', 'container', bod)

let headerContainer = document.getElementById('headerContainerid')
createElement('h1', 'h1', 'Tic Tac Toe: X needs to go', 'h1', headerContainer)
let h1Text = document.getElementById('h1id')


let testBoard = 
[
  0,0,0,
  0,0,0,
  0,0,0,
];

let winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// let cloneBoard = Array.from(board)


// console.log('clone', cloneBoard)

// cloneBoard[3]=1
// console.log('changed3',cloneBoard)
// console.log('og',board)




  
  let x = 'x'
  let o = 'o'

  
  
  
  let playerTurn = 1
  







function createElement (area, element, text, clas, parent) {
    let id = `${area}id` 
    let createElement = document.createElement(element)
    parent.appendChild(createElement)
    createElement.setAttribute('id',id)
    createElement.setAttribute('class', clas)
    createElement.innerText = `${text}`
  }

  function createCol (text, clas, parent, id) {
    let createElement = document.createElement('div')
    parent.appendChild(createElement)
    createElement.setAttribute('id',id)
    element=document.getElementById(id)
    createElement.setAttribute('class', clas)
    createElement.innerText = `${text}`
  }

  createElement('top', 'div', '', 'row', headerContainer);
  let rowParent = document.getElementById('topid');
  console.log(rowParent)
  for (let index = 0; index < 9; index++) {
    createCol(`${index}`, 'col-4 border', rowParent, `${index}`)
  }



function areYaWinningSon() {
  for (let i = 0; i < winning.length; i++) {
    let line = winning[i]
    console.log('line', line)
      let a = testBoard[line[0]];
      let b = testBoard[line[1]];
      let c = testBoard[line[2]];
      if (a === 0 || b === 0 || c === 0) {
          // console.log('nope')
          continue;
      }
      if (a === 'x' && b === 'x' && c ==='x') {
          h1Text.innerText = 'X Won'
          break}
      if (a === 'o' && b === 'o'&& c==='o') {
          h1Text.innerText = 'O Won'
          break}
  }
}
areYaWinningSon()



// IN INDEX.HTML
//     <button class="tile" data-tile-number="0">CLICK ME</button>
//     <button class="tile" data-tile-number="1">CLICK ME</button>
//     <button class="tile" data-tile-number="2">CLICK ME</button>

function clickHandler(e) {
    console.log('FROM REFERENCED FUNCTION');
    let colNumber = e.target.id;
    console.log('TILE:', colNumber);
    let changeUp = document.getElementById(colNumber)
    console.log(changeUp)
    if (playerTurn % 2 === 0) {
      changeUp.textContent = 'O'
      changeUp.removeEventListener('click', clickHandler)
      playerTurn = playerTurn +1
      testBoard[`${colNumber}`] = 'o'
    } else if (playerTurn % 2 === 1){
      changeUp.removeEventListener('click', clickHandler)
      changeUp.innerText = 'X'
      playerTurn = playerTurn+1
      testBoard[`${colNumber}`] = 'x'
    }
    updateH1()
    if (playerTurn >= 5) {
      areYaWinningSon(testBoard)
    }
    if (playerTurn >= 10){
      h1Text.innerText = 'TIE!'
    }
    }



    // This changes the h1 text
    function updateH1() {
      if (h1Text.innerText === 'Tic Tac Toe: X needs to go') {
        h1Text.innerText = 'Tic Tac Toe: O needs to go'
      } else if (h1Text.innerText = 'Tic Tac Toe: O needs to go'){
        h1Text.innerText = 'Tic Tac Toe: X needs to go'
      }
      
    }


let buttons = document.getElementsByClassName('col-4');

for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener('click', clickHandler)
}











