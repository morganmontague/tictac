---

# Tic Tac Toe

---
### Instructions from document

1. The game should let the players know who's turn it is.
2. Game tiles should only be clickable once, and if the game is over they should not be clickable at all.
3. The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
4. There should be a Restart Game button that does not refresh the page (set state).
5. Use the symbols X and O.
6. On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
7. The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
8. Only have a single <div id="app"></div> in your index.HTML (try to code golf the HTML file)

## OBJ/Var
- Player input, this is from click events with a mouse
- Game Board dynamically generated, this will have 9 spaces and the goal is to get three in a row, each tile will have a click event attached to trigger a change in the state of the tile.
- bootstrap is needed for this project as well, setting classes to element will apply css 
- playerTrun, will increase by one to help keep track of player
    - This will help track when to start checking for a win, if x or o is being placed, and will respond with a tie when it reaches playerTurn 10
- button, created dynamically, will trigger the reset, will reset the gameState so we can play again, can be triggered at any time during an active game
- winConditions, the 8 winning combos to acheive 3 in a row

## FUNC
* init() - This function will run on load, using JavaScript to generate a div for the header section
    * Creates an h1 section for the name of the game
        * stretch goal to add a modal or keep track of games won by x or o using local storage
    * The function also places attributes for ids and classes to help identify the created elements 
    * createElement(area, element, text, clas, parent) - This function is used to generate more elements, with specified parameters to help specilize each new element
    * area - This indicates where the element will be put in the dom, it also will influence the id created for the element
    * element - this will decide what the element created is.
    * text - Will put text into the element if specified leave a blank string to not add content
    * clas - stands for class, can't use class due to it being declared already. This will be used to add the bootstrap classes to help with the design of the app
    * parent - This parameter will dictate where the new element will be appended under.
* createCol(text, clas, parent, id) a modified version of createElement, with less paramaters. It is more simple so it is easier to put it in a loop function and create 9 columns at once.
* boardCreate() - This function has both createElement() and colCreate(), used to help organize the two functions
* areYaWinningSon() - This function checks to see if a player has won, using the array winning, we can loop through each checking if the first is equal to the next two, if so it will declare the winner.
    * This function also has the function removeClick() to help keep players from overClicking
* clickHandler(e) - This is an important function, it keeps track of the player turn, and will dictate whos turn it is by even or odd. It will insert an x or an o depending on the playersturn. It will also remove the clickEvent for the tile, helping keep the game smooth.
   * Has an if statement to only start checking with areYaWinningSon() to only start after five turns (due to only being allowed for first win then)
    * It will also declare a tie.
    * Has updateH1 in itself
* addClick() will run through each tile and add an eventListener click event with ClickHandler as the event
* removeClick - this will run through each tile and remove the event listener, triggers at end of game to prevent unclicked tiles from being clicked
* reset() this is attached to the reset button, will reset the test board array, setting each to zero. removes the parent row, removing the board, then runns boardCreate and addClick to reset board.


## PROCEDURE
