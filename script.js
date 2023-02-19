
const OSU_CLASS = 'osu'
const MICH_CLASS = 'mich'
const cellElements = document.querySelectorAll('[data-cell')
let michTurn

//click event will only fire once for each cell during the 
//game, preventing multiple clicks on the same cell
cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true})
})

function handleClick(e){
  const cell = e.target
  const currentClass = michTurn ? MICH_CLASS : OSU_CLASS
  placeMark(cell, currentClass)
  // Check For Win
  // Check For Draw
  // Switch Turns
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}
