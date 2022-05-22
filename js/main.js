
// task1

document.querySelector('#button').addEventListener('click', calculate);

function calculate () {
    let input = document.querySelector("#input_dots").value;
    let inputFirst = input.slice(0, input.indexOf(' ')).length;
    let inputSecond = input.slice(input.lastIndexOf(' ') + 1, input.length).length;
    let action = input.slice(input.indexOf(' ') + 1, input.lastIndexOf(' '));
    let result;

        switch (action) {
          case "+":
            result = inputFirst + inputSecond;
            break;
          case "-":
            result = inputFirst - inputSecond;
            break;
          case "*":
            result = inputFirst * inputSecond
            break;
            case "//":
              result = Math.floor(inputFirst / inputSecond)
            break;
          default: alert("Enter dots in format: ..... + ..")
        }
    
    if (result < 1) return (document.querySelector("#output").innerHTML = '');

    let output = new Array ();
    for (let i=0; i<result; i++) {
        output[i] = '.';
    }

    document.querySelector("#output").innerHTML = output.join('');
};



// task2

let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

function grid(size){
    let arr = new Array();
    for(let i=0; i<size; i++){
      arr[i] = new Array();
      for(let j=0; j<size; j++){
        let letterNumber = i+j;
        for (let x=0; letterNumber >= 26; x++) {letterNumber=letterNumber-26};
        arr[i][j] = alphabet[letterNumber];
      }
    }
    return arr;
  }

  console.log(grid(50));


  // task3

function parentheses(string){
  let arr = string.split('');
  let result=0;
  for (let i=0; i<arr.length; i++) {
      if (arr[i]==='(') {result++} else 
      if (arr[i]===')') {result--};
      if (result < 0) {return false};
  }
      if(result > 0) {return false} else return true;
}
console.log(parentheses("(())((()())())"));
