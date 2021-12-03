import field from './field';

//_____Turtle
export class Turtle {
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
