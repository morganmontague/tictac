console.log('running')
// let x = 1
// let y = 4
// let board = [0,0,0,0,0,0,0,0,0]
// console.log(board.length)



// let cloneBoard = Array.from(board)


// console.log('clone', cloneBoard)

// cloneBoard[3]=1
// console.log('changed3',cloneBoard)
// console.log('og',board)

// function won(a,b,c){
//     if (cloneBoard[a]+cloneBoard[b]+cloneBoard[c]===3){
//         console.log('x won')
//     }
//     else if (cloneBoard[a]+cloneBoard[b]+cloneBoard[c]===12){
//         console.log('y won')
//     }
//     else {
//         console.log('lost')
//     }
// }
// won(1,2,3)

// cloneBoard[0]=x
// cloneBoard[1]=y
// cloneBoard[2]=x
// cloneBoard[4]=y
// cloneBoard[7]=y
// cloneBoard[8]=x
// won(0,2,8)
// won(0,1,2)
// won(1,4,7)
// console.log(board)
// console.log(cloneBoard)

function multiplyAll(arr) {
    let product = 0;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      const subArray = arr[i];
      for (let j = 0; j < subArray.length; j++) {
        product += subArray[j];
      }
    }
    // Only change code above this line
    console.log(product)
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  
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
  console.log(btn)


 

  let board = [o,o,x,0,x,0,x,0,0]

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


function paintBox() {
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

  createElement('top', 'div', '', 'row', blah);
  let rowParent = document.getElementById('topid');
  console.log(rowParent)
  for (let index = 0; index < 9; index++) {
    createElement(`${index}Col`, 'div', `column${index}`, 'col-4 border', rowParent)
  }

  // for (let index = 0; index < 9; index++){
  //   let `${index}Column` = document.getElementById(`${index}Colid`)
  // }

  // let clicky = document.getElementsByClassName('col-4');
  // console.log(clicky)
  // clicky.addEventListener('click', ()=>{
  //   console.log('clicked me')
  // })

  let attempt = document.getElementById('tile')
function attemptToClick() {
  attempt.setAttribute('class', 'bg-success')
  console.log('This clicked')
}

attempt.setAttribute('onClick', 'attemptToClick()')





















//   function createRow (area, element, text, clas, parent) {
//     let id = `${area}id` 
//     let testing = `${area}row` 
//     // testing.document.createElement(element)
//     let parentArea = `${area}Parent`
//     parentArea.appendChild(testing)
//     testing.setAttribute('id', id)
//     testing.setAttribute('class', clas)
//     testing.innerText = (text)
//      parentArea = document.getElementById(id)
//   }
//   createRow('top', 'div', 'top row', 'row', 'blah')