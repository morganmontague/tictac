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
    createElement(`${index}`, 'div', `column${index}`, 'col-4 border', rowParent)
  }