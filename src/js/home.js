
// Page Home
// batton code

const codes = document.querySelectorAll('.homeListCode');
const buttonsArr = document.querySelectorAll('.homeListBtn');

let buttonsOnn = new Map()
let buttonsOff = new Map()

function addButtonsOnn(){
  for(let i = 0; i < buttonsArr.length; i++){
    buttonsOnn.set(i,buttonsArr[i])
  }
}

function homeCodeOnnbtn() {
  const buttonsOnnKeys = buttonsOnn.keys()
  for (let KeyOnn of buttonsOnnKeys) {
    const buttonOnn = buttonsOnn.get(KeyOnn)
    buttonOnn.addEventListener('click', () => {
      codes[KeyOnn].classList.add('homeListCodeActive')
      buttonOnn.innerHTML = "Скрыть JS код"
      buttonsOff.set(KeyOnn, buttonOnn)
      buttonsOnn.delete(KeyOnn)
    })
  }
}

function homeCodeOffbtn() {
  const buttonsOffkeys = buttonsOff.keys()
  for (let keyOff of buttonsOffkeys) {
    const buttonOff = buttonsOff.get(keyOff)
    buttonOff.addEventListener('click', () => {
      codes[keyOff].classList.remove('homeListCodeActive')
      buttonOff.innerHTML = "Открыть JS код"
      buttonsOnn.set(keyOff, buttonOff)
      buttonsOff.delete(keyOff)
    })
  }
}


addButtonsOnn()
homeCodeOnnbtn()
homeCodeOffbtn()



