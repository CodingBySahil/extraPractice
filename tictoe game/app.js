let autoTurn,autoTurnSymbol, x;
let userTurn,userTurnSymbol;
// code for toss section
let tossSelectHead,tossSelectTail,toss
tossSelectHead = document.querySelector(".head").innerHTML
tossSelectTail = document.querySelector(".tail").innerHTML
console.log(tossSelectHead)
console.log(tossSelectTail)
function tossHead(){
  let z = Math.trunc(Math.random()*10000)%2
  if(z == 0){
    alert(`You win the toss and your symbol is : ${String.fromCharCode(10004)}`)
    userTurnSymbol=String.fromCharCode(10004)
    autoTurnSymbol="X"
  }else{
    alert("You loss the toss and your symbol is : X")
    userTurnSymbol="X"
    autoTurnSymbol=String.fromCharCode(10004)
  }
  console.log(z)
}
function checkForUndefined(){
  if(userTurnSymbol==undefined || autoTurnSymbol==undefined){
    alert("Please make sure to play the toss")
  }
  
}
function computerTurn() {
  autoTurn = Math.trunc(Math.random() * 9 + 1);
  checkFillBox();
}
function checkFillBox() {
  if (document.querySelector(`.box${autoTurn}`).innerHTML == ".") {
    x = document.querySelector(`.box${autoTurn}`).innerHTML = autoTurnSymbol;
  } else computerTurn();
}
// function tryone() {
//   computerTurn();

//   console.log(autoTurn);
//   console.log(x);
// }
function humanTurnBox1() {
  checkForUndefined()
  let d = document.querySelector(`.box1`).innerHTML;
  console.log(d)
  if(d == "."){
    document.querySelector(`.box1`).innerHTML= userTurnSymbol
    console.log(d)
    console.log(userTurnSymbol)
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn()
}
function humanTurnBox2() {
  let d = document.querySelector(`.box2`).innerHTML;
  console.log(d)
  if(d == "."){
    document.querySelector(`.box2`).innerHTML= userTurnSymbol
    console.log(d)
    console.log(userTurnSymbol)
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn()
}
function humanTurnBox3() {
  let d = document.querySelector(`.box3`).innerHTML;
  console.log(d)
  if(d == "."){
    document.querySelector(`.box3`).innerHTML= userTurnSymbol
    console.log(d)
    console.log(userTurnSymbol)
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn()
}
function humanTurnBox4() {
  let d = document.querySelector(`.box4`).innerHTML;
  console.log(d)
  if(d == "."){
    document.querySelector(`.box4`).innerHTML= userTurnSymbol
    console.log(d)
    console.log(userTurnSymbol)
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn()
}
function humanTurnBox5() {
  let d = document.querySelector(`.box5`).innerHTML;
  console.log(d)
  if(d == "."){
    document.querySelector(`.box5`).innerHTML= userTurnSymbol
    console.log(d)
    console.log(userTurnSymbol)
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn()
}
function humanTurnBox6() {
  let d = document.querySelector(`.box6`).innerHTML;
  console.log(d)
  if(d == "."){
    document.querySelector(`.box6`).innerHTML= userTurnSymbol
    console.log(d)
    console.log(userTurnSymbol)
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn()
}
function humanTurnBox7() {
  let d = document.querySelector(`.box7`).innerHTML;
  console.log(d)
  if(d == "."){
    document.querySelector(`.box7`).innerHTML= userTurnSymbol
    console.log(d)
    console.log(userTurnSymbol)
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn()
}
function humanTurnBox8() {
  let d = document.querySelector(`.box8`).innerHTML;
  console.log(d)
  if(d == "."){
    document.querySelector(`.box8`).innerHTML= userTurnSymbol
    console.log(d)
    console.log(userTurnSymbol)
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn()
}
function humanTurnBox9() {
  let d = document.querySelector(`.box9`).innerHTML;
  console.log(d)
  if(d == "."){
    document.querySelector(`.box9`).innerHTML= userTurnSymbol
    console.log(d)
    console.log(userTurnSymbol)
  }else if (d == "X" || d == "x" || d == String.fromCharCode(10004)){
    alert("This box is already full")
  }
  computerTurn()
}
