
// click homeListBtn" - "homeListCode" : height: 'auto'; padding: '20px';
// hover homeListBtn" - "homeListCode" : box-shadow: '$shadow-hover__dark';

// button code

const codes = document.querySelectorAll('.homeListCode');
const buttonsArr = document.querySelectorAll('.homeListBtn');
const buttonsOnn = new Map()
const buttonsOff = new Map()

arrInMap(buttonsArr, buttonsOnn)

function buttonHover(){
    for(let i = 0; i < buttonsArr.length; i++){
        buttonsArr[i].addEventListener ('mouseover', ()=>{
            codes[i].style.transition = "all 0.3s"
            codes[i].style.boxShadow = "0 0 20px #663300"
        })
        buttonsArr[i].addEventListener ('mouseout', ()=>{
            codes[i].style.boxShadow = "0 0 0px #663300"
        })
    }

}

// функция заполнения map из массива
function arrInMap(arr, map){
    for(let i = 0; i < arr.length;i++) map.set(i, arr[i])
}

buttonHover()