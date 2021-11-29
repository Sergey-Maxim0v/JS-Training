
// click homeListBtn" - "homeListCode" : height: 'auto'; padding: '20px';
// hover homeListBtn" - "homeListCode" : box-shadow: '$shadow-hover__dark';

// batton code

const codes = document.querySelectorAll('.homeListCode');
const buttonsArr = document.querySelectorAll('.homeListBtn');
const buttonsOnn = new Map()
const buttonsOff = new Map()

arrInMap(buttonsArr, buttonsOnn)

function buttonCode(){
    
}



console.log(buttonsOnn)
console.log(buttonsOff)

// функция заполнения map кнопок из массива
function arrInMap(arr, map){
    for(let i = 0; i < arr.length;i++) map.set(i, arr[i])
}

