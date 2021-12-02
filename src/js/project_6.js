
//_____create a Field
const field = []

function createField(arr) {
  for (let i = 0; i < 5; i++) {
    field.push([...arr[i].querySelectorAll('.p6FieldElement')])
  }
}

createField([...document.querySelectorAll('.p6FieldRow')])

//_____Turtle
class Turtle {
  constructor(name, x = 0, y = 0) {
    this.name = name
    this.position = { x, y }
  }
  //_method: movement Turtle
  move(...placements) {
    for (let placement of placements) {
      for (let onePlacement of placement.split(' ')) {
        //_clear the style of the turtle's previous position
        field[this.position.y][this.position.x].classList.remove('p6TurtleStyle')
        //_
        if (onePlacement == 'right') {
          if (this.position.x < 4) {
            this.position.x++
          }
        }
        if (onePlacement == 'left') {
          if (this.position.x > 0) {
            this.position.x--
          }
        }
        if (onePlacement == 'up') {
          if (this.position.y > 0) {
            this.position.y--
          }
        }
        if (onePlacement == 'down') {
          if (this.position.y < 4) {
            this.position.y++
          }
        }
        //_assign style and show message on console
        field[this.position.y][this.position.x].classList.add('p6TurtleStyle')
        console.log(`// Turtle ${this.name} moved ${onePlacement} (${this.position.x}, ${this.position.y})`)
      }
    }
    return this
  }

  //_method: display the current position of the turtle
  showPosition() {
    console.log(`(${this.position.x}, ${this.position.y})`)
    return this
  }
}

//_____Turtle which is displayed in the browser
const VTurtle = new Turtle('VTurtle')

//___put the turtle on the starting element
field[VTurtle.position.y][VTurtle.position.x].classList.add('p6TurtleStyle')

//_____browser button listeners
const buttonUp = document.querySelector('.p6BtnUp')
const buttonDown = document.querySelector('.p6BtnDown')
const buttonLeft = document.querySelector('.p6BtnLeft')
const buttonRight = document.querySelector('.p6BtnRight')
const moveUp = buttonUp.addEventListener('click', () => VTurtle.move('up'))
const moveDown = buttonDown.addEventListener('click', () => VTurtle.move('down'))
const moveLeft = buttonLeft.addEventListener('click', () => VTurtle.move('left'))
const moveRight = buttonRight.addEventListener('click', () => VTurtle.move('right'))

//_____keyboard listener
const KeyboardListner = document.addEventListener('keydown', (event)=> {
  if(event.code == 'ArrowUp') {
    VTurtle.move('up')
  }
  if(event.code == 'ArrowDown') {
    VTurtle.move('down')
  }
  if(event.code == 'ArrowLeft') {
    VTurtle.move('left')
  }
  if(event.code == 'ArrowRight') {
    VTurtle.move('right')
  }
})