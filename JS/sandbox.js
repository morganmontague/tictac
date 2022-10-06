// let x = 1
// let y = 4
// let board = [0,0,0,0,0,0,0,0,0]
// console.log(board.length)

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


// function multiplyAll(arr) {
//     let product = 0;
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++) {
//       const subArray = arr[i];
//       for (let j = 0; j < subArray.length; j++) {
//         product += subArray[j];
//       }
//     }
//     // Only change code above this line
//     console.log(product)
//     return product;
//   }
  
//   multiplyAll([[1,2],[3,4],[5,6,7]]);

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


  // for (let index = 0; index < 9; index++){
  //   let `${index}Column` = document.getElementById(`${index}Colid`)
  // }

  // let clicky = document.getElementsByClassName('col-4');
  // console.log(clicky)
  // clicky.addEventListener('click', ()=>{
  //   console.log('clicked me')
  // })