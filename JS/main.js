console.log('running')
function init() {
let bod = document.querySelector('body')
bod.setAttribute('class', 'text-center')
createElement('headerContainer', 'div', '', 'container justify-content-center', bod)

let headerContainer = document.getElementById('headerContainerid')
createElement('h1', 'h1', 'Tic Tac Toe: X needs to go', 'h1 m-4', headerContainer)

///// add local storage to see how many times x or o has won \\\\\\\

createElement('main', 'div', '', 'container',headerContainer);


}

init()
let headerContainer = document.getElementById('headerContainerid')
let mainArea = document.getElementById('mainid')
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


  function boardCreate() {
  createElement('top', 'div', '', 'row text-center', mainid);
  let rowParent = document.getElementById('topid');

  for (let index = 0; index < 9; index++) {
    createCol('', 'col-4 borderbl fs-1 heightCheat', rowParent, `${index}`)
  }
  }

  boardCreate()


  
  

  function areYaWinningSon() {
    for (let i = 0; i < winning.length; i++) {
      let line = winning[i]
      let a = testBoard[line[0]];
      let b = testBoard[line[1]];
      let c = testBoard[line[2]];
        if (a === 0 || b === 0 || c === 0) {
          // console.log('nope')
          continue;
        }
        if (a === 'x' && b === 'x' && c ==='x') {
          h1Text.innerText = 'X Won'
          removeClick()
          break}
        if (a === 'o' && b === 'o'&& c==='o') {
          h1Text.innerText = 'O Won'
          removeClick()
          break}
        }
      }
      
      
      
      
      
      function clickHandler(e) {
        let colNumber = e.target.id;
        let changeUp = document.getElementById(colNumber)
        if (playerTurn % 2 === 0) {
          changeUp.textContent = 'O'
          //changeUp.setAttribute('class', 'ocolor')  // this didn't work
          changeUp.removeEventListener('click', clickHandler)
          playerTurn = playerTurn +1
          testBoard[`${colNumber}`] = 'o'
        } else if (playerTurn % 2 === 1){
          changeUp.removeEventListener('click', clickHandler)
          changeUp.innerText = 'X'
          //changeUp.setAttribute('class', 'xcolor') // this didn't work
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

    function addClick() {
      for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener('click', clickHandler)
      }
    }
    
    addClick()
    
    function removeClick() {
      for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.removeEventListener('click', clickHandler)
      }
    }


    createElement('reset', 'button', 'RESET', 'btn btn-warning m-4 btn-outline-dark', headerContainer)

    let resetBtn = document.getElementById('resetid')


    resetBtn.addEventListener('click', () => {
      testBoard = [
        0,0,0,
        0,0,0,
        0,0,0,
      ],
      playerTurn = 1
      let rowParent = document.getElementById('topid');
      rowParent.remove()
      boardCreate()
      addClick()
      h1Text.innerText = 'Tic Tac Toe: X needs to go'
    })
    
    
    
    
    
    // function winCount (xWin, oWin, tie) {
          
    //       localStorage.setItem(xWin, 0);
    //       localStorage.setItem(oWin, 0);
    //       localStorage.setItem(tie, 0);
        
    // }

    // winCount()
  

    
    