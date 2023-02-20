
const OSU_CLASS = 'osu'
const MICH_CLASS = 'mich'
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let michTurn

//click event will only fire once for each cell during the 
//game, preventing multiple clicks on the same cell

startGame()

function startGame() {
  michTurn = false
  cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true})
  })
  setBoardHoverClass()
}

function handleClick(e){
  const cell = e.target
  const currentClass = michTurn ? MICH_CLASS : OSU_CLASS
  placeMark(cell, currentClass)
  // Check For Win
  // Check For Draw
  // Switch Turns
  swapTurns()
  setBoardHoverClass()
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  michTurn = !michTurn
}

function setBoardHoverClass() {
  
board.classList.remove(OSU_CLASS)
  board.classList.remove(MICH_CLASS)
  if (michTurn) {
    board.classList.add(MICH_CLASS)
  }
  else {
    board.classList.add(OSU_CLASS)
  }
};