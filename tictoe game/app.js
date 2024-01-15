let autoTurn,autoTurnSymbol, x;
let userTurn,userTurnSymbol;

// code for toss section

// code for if user selected head
function tossHead(){
  let z = Math.random()
  if(z >0.5){
    alert(`You win the toss and your symbol is : ${String.fromCharCode(10004)}`)
    userTurnSymbol=String.fromCharCode(10004)
    autoTurnSymbol="X"
  }else{
    alert("You loss the toss and your symbol is : X")
    userTurnSymbol="X"
    autoTurnSymbol=String.fromCharCode(10004)
  }
}

// Code for if user selected tail 
function tossTail(){
  let z = Math.random()
  if(z >0.5){
    alert(`You win the toss and your symbol is : X`)
    autoTurnSymbol=String.fromCharCode(10004)
    userTurnSymbol="X"
  }else{
    alert(`You loss the toss and your symbol is : ${String.fromCharCode(10004)}`)
    userTurnSymbol=String.fromCharCode(10004)
    autoTurnSymbol="X"
  }
}

// If toss is not played
function checkForUndefined(){
  if(userTurnSymbol==undefined || autoTurnSymbol==undefined){
    alert("Please make sure to play the toss")
  }
}

function gameWinner(){
  let box1=document.querySelector(".box1").innerHTML,
  box2=document.querySelector(".box2").innerHTML,
  box3=document.querySelector(".box3").innerHTML,
  box4=document.querySelector(".box4").innerHTML,
  box5=document.querySelector(".box5").innerHTML,
  box6=document.querySelector(".box6").innerHTML,
  box7=document.querySelector(".box7").innerHTML,
  box8=document.querySelector(".box8").innerHTML,
  box9=document.querySelector(".box9").innerHTML;
  // if(box1.innerHTML !="." && box2.innerHTML !="." && box3.innerHTML !="." && box4.innerHTML !="." && box5.innerHTML !="." && box6.innerHTML !="." && box7.innerHTML !="." && box8.innerHTML !="." && box9.innerHTML !=".")
  if((box1 == box2 && box1==box3) || (box1 == box5 && box1==box9) || (box1 == box4 && box1==box7) || (box4 == box5 && box5==box6) || (box7 == box8 && box8==box9) || (box2 == box5 && box5==box8) || (box3 == box6 && box6==box9) || (box3 == box5 && box5==box7)){
      alert("you win")
  }
}

// the computer turn code 
function computerTurn() {
  autoTurn = Math.trunc(Math.random() * 9 + 1);
  checkFillBox();
}

// check the boxes if already fill the computer turn function will be recalled
function checkFillBox() {
  if (document.querySelector(`.box${autoTurn}`).innerHTML == "1" || document.querySelector(`.box${autoTurn}`).innerHTML == "2" || document.querySelector(`.box${autoTurn}`).innerHTML == "3" || document.querySelector(`.box${autoTurn}`).innerHTML == "4" || document.querySelector(`.box${autoTurn}`).innerHTML == "5" || document.querySelector(`.box${autoTurn}`).innerHTML == "6" || document.querySelector(`.box${autoTurn}`).innerHTML == "7" || document.querySelector(`.box${autoTurn}`).innerHTML == "8" || document.querySelector(`.box${autoTurn}`).innerHTML == "9") {
    x = document.querySelector(`.box${autoTurn}`).innerHTML = autoTurnSymbol;
  } else computerTurn();
}

// human turn function code for the box number 1
function humanTurnBox1() {
  checkForUndefined()
  let d = document.querySelector(`.box1`).innerHTML;
  if(d == "1"){
    document.querySelector(`.box1`).innerHTML= userTurnSymbol
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn();
  gameWinner();
}

// human turn function code for the box number 2
function humanTurnBox2() {
  let d = document.querySelector(`.box2`).innerHTML;
  console.log(d)
  if(d == "2"){
    document.querySelector(`.box2`).innerHTML= userTurnSymbol
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn();
  gameWinner();
}

// human turn function code for the box number 3
function humanTurnBox3() {
  let d = document.querySelector(`.box3`).innerHTML;
  console.log(d)
  if(d == "3"){
    document.querySelector(`.box3`).innerHTML= userTurnSymbol
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn();
  gameWinner();
}

// human turn function code for the box number 4
function humanTurnBox4() {
  let d = document.querySelector(`.box4`).innerHTML;
  console.log(d)
  if(d == "4"){
    document.querySelector(`.box4`).innerHTML= userTurnSymbol
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn();
  gameWinner();
}

// human turn function code for the box number 5
function humanTurnBox5() {
  let d = document.querySelector(`.box5`).innerHTML;
  console.log(d)
  if(d == "5"){
    document.querySelector(`.box5`).innerHTML= userTurnSymbol
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn();
  gameWinner();
}

// human turn function code for the box number 6
function humanTurnBox6() {
  let d = document.querySelector(`.box6`).innerHTML;
  console.log(d)
  if(d == "6"){
    document.querySelector(`.box6`).innerHTML= userTurnSymbol
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn();
  gameWinner();
}

// human turn function code for the box number 7
function humanTurnBox7() {
  let d = document.querySelector(`.box7`).innerHTML;
  console.log(d)
  if(d == "7"){
    document.querySelector(`.box7`).innerHTML= userTurnSymbol
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn();
  gameWinner();
}

// human turn function code for the box number 8
function humanTurnBox8() {
  let d = document.querySelector(`.box8`).innerHTML;
  console.log(d)
  if(d == "8"){
    document.querySelector(`.box8`).innerHTML= userTurnSymbol
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn();
  gameWinner();
}

// human turn function code for the box number 9
function humanTurnBox9() {
  let d = document.querySelector(`.box9`).innerHTML;
  console.log(d)
  if(d == "9"){
    document.querySelector(`.box9`).innerHTML= userTurnSymbol
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn();
  gameWinner();
}
