
//set the Red button Click
function makeRed(){
    document.body.style.backgroundColor='red'
}


//Set the Blue button Click
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue'
}

//Set the Green button Click
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor='green'
}


//Set the Hot Pink button Click
const hotPinkButton = document.getElementById('make-hotPink-button');
hotPinkButton.addEventListener('click' , makeHotPink);
function makeHotPink(){
    document.body.style.backgroundColor='hotPink'
}

//Set the Golden Rod button Click
const goldenRodButton = document.getElementById('make-goldenRod-button');
goldenRodButton.addEventListener('click' , function makeGoldenRod(){
    document.body.style.backgroundColor='goldenrod'
})