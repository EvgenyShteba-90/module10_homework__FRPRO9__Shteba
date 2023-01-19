// ! Задание 1

let str = prompt("enter number");

let numb = +str;

if (str == "" || numb !== numb) {
  console.log("oops wrong");
} else if (numb % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}


// ! Задание 2

let x = {};

let res = typeof(x);

switch (res) {
    case "number":
        console.log('x - is number');
        break;
    case "boolean":
        console.log('x - logic type');
        break;
    case "string":
        console.log('x - is string');
        break;
    default:
        console.log('type of x - is undefined');
}

