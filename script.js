
const OSU_CLASS = 'osu'
const MICH_CLASS = 'mich'
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winMessageElement = document.getElementById('winMessage')
const winMessageTextElement = document.querySelector('[data-win-message-text]')
const restartButton = document.getElementById('restartButton')
let michTurn

//click event will only fire once for each cell during the 
//game, preventing multiple clicks on the same cell

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
  michTurn = false
  cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
}

function handleClick(e) {
  const cell = e.target
  const currentClass = michTurn ? MICH_CLASS : OSU_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw) {
  if (draw) {
    winMessageTextElement.innerText = 'Draw!'
  } else {
    winMessageTextElement.innerText = `${michTurn ? "Michigan" : "OSU"} Wins!`
  }
  winMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(OSU_CLASS) || 
    cell.classList.contains(MICH_CLASS)
  })
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

function checkWin(currentClass) {
  return WINNING_COMBOS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}