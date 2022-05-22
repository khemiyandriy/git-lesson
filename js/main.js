
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


