console.log('running')


// let cloneBoard = Array.from(board)


// console.log('clone', cloneBoard)

// cloneBoard[3]=1
// console.log('changed3',cloneBoard)
// console.log('og',board)




  
  let x = 'x'
  let o = 'o'


  let tileText = document.getElementById('tile')



  let playerTurn = 1
  let btn = document.getElementById('clickMe')
  btn.addEventListener('click', () => {
    if (playerTurn % 2 === 0) {
        tileText.textContent = 'O'
        console.log('O works')
        playerTurn = playerTurn +1
    } else if (playerTurn % 2 === 1){
        console.log('X works')
        tileText.innerText = 'X'
        playerTurn = playerTurn+1
    }
  }
  )
function changeTurn() {
  if (playerTurn % 2 === 0) {
    tileText.textContent = 'O'
    console.log('O works')
    playerTurn = playerTurn +1
} else if (playerTurn % 2 === 1){
    console.log('X works')
    tileText.innerText = 'X'
    playerTurn = playerTurn+1
}
}

 

  let board = [o,o,x,0,x,0,x,0,0]
  board = [0,0,0,0,0,0,0,0,0]
  console.log(board)
  


 let winningThree = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]]
];

board.splice(5, 1, x)

function areYaWinningSon(arr) {
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i][0]
        let b = arr[i][1]
        let c = arr[i][2]
        if (a === 0 || b === 0 || c === 0) {
            console.log('nope')
            continue;
        }
        if (a === 'x' && b === 'x' && c ==='x') {
            console.log('x won baby')
            break}
        if (a === 'o' && b === 'o'&& c==='o') {
            console.log('o won baby')
            break}
    }
  }



areYaWinningSon(winningThree)


function changeBox() {
  /////////////////////////////// figure this OUT this will be the test to see if I can change an attribute of one of the 9 columns and prevent other changes 
}

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

  createElement('top', 'div', '', 'row', blah);
  let rowParent = document.getElementById('topid');
  console.log(rowParent)
  for (let index = 0; index < 9; index++) {
    createCol(`${index}`, 'col-4 border', rowParent, `${index}`)
  }



  let attempt = document.getElementById('tile')
function attemptToClick() {
  attempt.setAttribute('class', 'bg-success')
  console.log('This clicked')
}

attempt.setAttribute('onClick', 'attemptToClick()')








  let testBoard = 
  [
    0,0,0,
    0,0,0,
    0,0,0,
  ]
  console.log(testBoard)
  


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

// for (let i = 0; i < winConditions.length; i++) {
//   const line = winConditions[i]; // [0,1,2]
//   console.log('LINE: ', line);
//   console.log(line[0], line[1], line[2]);
//   console.log(`BOARDSTATE[${line[0]}]: `, boardState[line[0]])
//   console.log(`BOARDSTATE[${line[1]}]: `, boardState[line[1]])
//   console.log(`BOARDSTATE[${line[2]}]: `, boardState[line[2]])


function whim() {
  for (let i = 0; i < winning.length; i++) {
    let line = winning[i]
    console.log('line', line)
      let a = testBoard[line[0]];
      let b = testBoard[line[1]];
      let c = testBoard[line[2]];
      if (a === 0 || b === 0 || c === 0) {
          console.log('nope')
          continue;
      }
      if (a === 'x' && b === 'x' && c ==='x') {
          console.log('x won baby')
          break}
      if (a === 'o' && b === 'o'&& c==='o') {
          console.log('o won baby')
          break}
  }
}
whim()



// IN INDEX.HTML
//     <button class="tile" data-tile-number="0">CLICK ME</button>
//     <button class="tile" data-tile-number="1">CLICK ME</button>
//     <button class="tile" data-tile-number="2">CLICK ME</button>

function clickHandler(e) {
    console.log('FROM REFERENCED FUNCTION');
    let colNumber = e.target.id;
    console.log('TILE:', colNumber);
}

let buttons = document.getElementsByClassName('col-4');

for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener('click', clickHandler)
}

// btn.addEventListener('click', (e) => {
//     console.log('FROM INLINE FUNCTION: ', e);
// })

// btn.addEventListener('click', clickHandler)

// btn.addEventListener('click', (e) => clickHandler(e, 'test', true))









