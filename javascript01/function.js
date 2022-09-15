// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration // Function 선언
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello");
}
printHello(); // Hello

function log(message) {
  console.log(message);
}
log("marry"); // marry
log(1234); // 1234
// : 그런데 javascript에는 타입이 없어서 message가 string인지 number인지 모르기 때문에 난해할 수 있다.
// : 다행히 1234라는 숫자가 문자열로 변환이 되어서 출력이 되기 때문에 상관없지만,
// : 다른 함수에서 타입이 중요한 경우에는 자바스크립트는 조금 난해할 수 있다.

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
console.log(ellie); // {name: 'ellie'}
changeName(ellie);
console.log(ellie); // {name: 'coder'}

// 3. Default parameters (added in ES6)
function showMessage(message, from = "hehe") {  // 여기에서 from의 값을 정의할 수 있다.
  console.log(`${message} by ${from}`);
}
showMessage("haha"); // from의 parameter 값을 안적은 상황
// haha by hehe 가 출력됨

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]); // dog , cat, fish
  }

  // 위와 같지만 더 간단하게
  for (const arg of args) {
    console.log(arg); // dog , cat, fish
  }

  // 위와 같지만 더더 간단하게
  args.forEach((arg) => console.log(arg)); // dog , cat, fish
}
printAll("dog", "cat", "fish");

// 5. Local scope // 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello"; // local variable
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "bye";
  }
  //   console.log(chidMessage); // 자식 함수안에서 선언한 것을 부모 함수 안에서 출력하면 error가 남
  return undefined;
}
printMessage();
// console.log(message); // 지역변수를 밖에서 출력하면 error가 남

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);
// return 타입이 적혀있지 않은 모든 함수에는 return undefined;가 생략되어 있는 것이다. 

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {  
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}
// : 조건이 맞지 않을 떄는 빨리 함수를 종료하고
// : 조건에 맞을 떄만 필요한 로직들을 쭉~ 실행하는 것이 더 좋다.


//-------------------------------------------------------------------------------


// Fist-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression 
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function // 이름 없는 함수 : 기능만 간단히 사용할 때
    console.log('print');
}
print(); // print 변수를 함수처럼 호출하게 되면 print라고 출력이 됨.
const printAgain = print;
printAgain(); // print가 출력됨
const sumAgain = sum;
console.log(sumAgain(1, 3)); // 4

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { // 콜백함수 : 상황에 맞으면 전달된 함수를 불러
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
} 
// anonymous function
const printYes = function () {
    console.log('yes!');
}

// named function 
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    // print();
}
randomQuiz('wrong', printYes, printNo); // no!
randomQuiz('love you', printYes, printNo); // yes!

// Arrow function 
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
}
// 간결하게 작성 가능
const simplePrint2 = () => console.log('simplePrint2!');
const add = (a, b) => a + b; // a, b를 파라미터로 받고, a + b를 return 한다. 
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
function hello() {
    console.log('IIFE');
}
hello(); // IIFE
// 간결하게...한방으로 선언과 호출까지
(function hello2() {
    console.log('IIFE2!');
})(); // IIFE2!

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case "add":
          console.log(a + b);
          break;
        case "substract":
            console.log(a - b);
          break;
        case "divide":
          console.log(a / b); 
          break;
          case "multiply":
          console.log(a  * b); 
          break;
          case "remainder":
          console.log(a % b); 
          break;
        default:
          console.log();
          break;
      }
}
calculate('substract', 3, 5);




