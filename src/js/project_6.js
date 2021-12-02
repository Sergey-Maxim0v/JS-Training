
const fieldRows = [...document.querySelectorAll('.p6FieldRow')]
const field = []

class Turtle {
  constructor(name, x = 0, y = 0) {
    this.name = name
    this.position = { x, y }
  }
  move(...placements) {
    for (let placement of placements) {
      for (let onePlacement of placement.split(' ')) {
        if (onePlacement == 'right') {
          if (this.position.x < 4) {
            clearTurtleStyle()
            field[this.position.y][this.position.x + 1].classList.add('p6TurtleStyle')
            this.position.x++
          }
        }
        if (onePlacement == 'left') {
          if (this.position.x > 0) {
            clearTurtleStyle()
            field[this.position.y][this.position.x - 1].classList.add('p6TurtleStyle')
            this.position.x--
          }
        }
        if (onePlacement == 'up') {
          if (this.position.y > 0) {
            clearTurtleStyle()
            field[this.position.y - 1][this.position.x].classList.add('p6TurtleStyle')
            this.position.y--
          }
        }
        if (onePlacement == 'down') {
          if (this.position.y < 4) {
            clearTurtleStyle()
            field[this.position.y + 1][this.position.x].classList.add('p6TurtleStyle')
            this.position.y++
          }
        }
      }
    }
    return this
  }

  showPosition() {
    console.log(`(${this.position.x}, ${this.position.y})`)
    return this
  }
}

const SuperTurtle = new Turtle('SuperTurtle')

const buttonUp = document.querySelector('.p6BtnUp')
const buttonDown = document.querySelector('.p6BtnDown')
const buttonLeft = document.querySelector('.p6BtnLeft')
const buttonRight = document.querySelector('.p6BtnRight')
const moveUp = buttonUp.addEventListener('click', () => SuperTurtle.move('up'))
const moveDown = buttonDown.addEventListener('click', () => SuperTurtle.move('down'))
const moveLeft = buttonLeft.addEventListener('click', () => SuperTurtle.move('left'))
const moveRight = buttonRight.addEventListener('click', () => SuperTurtle.move('right'))
const buttonsClick = [moveUp, moveDown, moveLeft, moveRight]

function clearTurtleStyle() {
  const elements = document.querySelectorAll('.p6FieldElement')
  for (let el of elements) el.classList.remove('p6TurtleStyle')
}

function createField(arr) {
  for (let i = 0; i < 5; i++) {
    field.push([...arr[i].querySelectorAll('.p6FieldElement')])
  }
}

createField(fieldRows)

field[SuperTurtle.position.y][SuperTurtle.position.x].classList.add('p6TurtleStyle')

console.log('132')