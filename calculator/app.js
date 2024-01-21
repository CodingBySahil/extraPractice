let zero = document.querySelector("#zero").innerHTML,
  one = document.querySelector("#one").innerHTML,
  two = document.querySelector("#two").innerHTML,
  three = document.querySelector("#three").innerHTML,
  four = document.querySelector("#four").innerHTML,
  five = document.querySelector("#five").innerHTML,
  six = document.querySelector("#six").innerHTML,
  seven = document.querySelector("#seven").innerHTML,
  eight = document.querySelector("#eight").innerHTML,
  nine = document.querySelector("#nine").innerHTML;
let result=[],oprators=[],operands=[];
  // code for opration
  function equalCalculationFun(){
    for (let i = 0; i<result.length;i++){
      if(result[i] == "+"){
        oprators.push("+")
      }else if(result[i] == "-"){
        oprators.push("-")
      }else if(result[i] == "*"){
        oprators.push("*")
      }else{
        operands.push(result[i])
      }
    }
    let answer=[...operands];
    for (let i = 0; i < operands.length; i++) {
      Number(answer[i])
      switch (oprators[i]) {
        case "*":
          answer[0] = answer[0] * answer[1];
          answer.splice(1, 1);
          break;
        case "/":
          answer[0] = answer[0] / answer[1];
          answer.splice(1, 1);
          break;
        case "+":
          // Number(answer[0])
          // Number(answer[1])
          answer[0] = answer[0] + answer[1];
          answer.splice(1, 1);
          break;
        case "-":
          answer[0] = answer[0] - answer[1];
          answer.splice(1, 1);
          break;
      }
    }

    // let [answer] = operands;
    // document.querySelector("#result").innerHTML = answer;
    console.log(operands)
    console.log(oprators)
    console.log(answer)











  }
  

    // Code for zero funtion
  function zeroFun(){
    result.push(document.querySelector("#zero").innerHTML)
    document.querySelector("#result").innerHTML += 0
    // result.push(0)
  }

    // Code for one funtion
  function oneFun(){
    result.push(document.querySelector("#one").innerHTML);
    document.querySelector("#result").innerHTML += 1
    // result.push(1);
  }

    // Code for two funtion
  function twoFun(){
    result.push(document.querySelector("#two").innerHTML);
    document.querySelector("#result").innerHTML += 2
    // result.push(2);
  }

    // Code for three funtion
  function threeFun(){
    result.push(document.querySelector("#three").innerHTML);
    document.querySelector("#result").innerHTML += 3
    // result.push(3);
  }

    // Code for four funtion
  function fourFun(){
    result.push(document.querySelector("#four").innerHTML);
    document.querySelector("#result").innerHTML += 4
    // result.push(4);
  }

    // Code for five funtion
  function fiveFun(){
    result.push(document.querySelector("#five").innerHTML);
    document.querySelector("#result").innerHTML += 5
    // result.push(5);
  }

    // Code for six funtion
  function sixFun(){
    result.push(document.querySelector("#six").innerHTML);
    document.querySelector("#result").innerHTML += 6
    // result.push(6);
  }

    // Code for seven funtion
  function sevenFun(){
    result.push(document.querySelector("#seven").innerHTML);
    document.querySelector("#result").innerHTML += 7
    // result.push(7)
  }

    // Code for eight funtion
  function eightFun(){
    result.push(document.querySelector("#eight").innerHTML);
    document.querySelector("#result").innerHTML += 8
    // result.push(8);
  }

    // Code for nine funtion
  function nineFun(){
    result.push(document.querySelector("#nine").innerHTML);
    document.querySelector("#result").innerHTML += 9
    // result.push(9);
  }

    // Code for plus funtion
  function plusFun(){
    result.push(document.querySelector("#plus").innerHTML);
    document.querySelector("#result").innerHTML += '+'
    // result.push("+");
  }

    // Code for minus funtion
  function minusFun(){
    result.push(document.querySelector("#minus").innerHTML);
    document.querySelector("#result").innerHTML += '-'
    // result.push("-");
  }

    // Code for multiply funtion
  function multiplyFun(){
    result.push(document.querySelector("#multiply").innerHTML);
    document.querySelector("#result").innerHTML += '*'
    // result.push("*")
  }
