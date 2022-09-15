// 1. String concatenation // +
console.log("my" + " cat"); // my cat
console.log("1" + 2); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3

// --------------------------
// 2. Numeric operators
console.log(1 + 1); // add // 2
console.log(1 - 1); // substract // 0
console.log(1 / 1); // divide // 1
console.log(1 * 1); // multiply // 1
console.log(5 % 2); // remainder // 나누고 나머지 값 // 1
console.log(2 ** 3); // exponentiation // 2의 3승 // 8

// --------------------------------------------------
// 3. Increment and decrement operators // ++, --
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 3, counter: 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // postIncrement: 3, counter: 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // preDecrement: 3, counter: 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // preDecrement: 3, counter: 2

// -------------------------------------------
// 4. Assignment operators // = operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// --------------------------------------------
// 5. Comparison operators // <= operators
console.log(10 < 6); // less than // false
console.log(10 <= 6); // less than or equal // false
console.log(10 > 6); // greater than // true
console.log(10 >= 6); // greater than or equal // true

// ----------------------------------------------------
// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// (1) || (or), finds the first truthy value // 하나만 true면 true이다.
console.log(`or: ${value1 || value2 || check()}`); // or: true
// 아무거나 하나만 true면 true가 된다. 단 처음에 적힌 것이 true면 동작을 멈추기 때문에
// 가벼운 value 같은 것을 앞에 배치하고 check() 같은 무거운 함수들을 맨 마지막에 배치하여
//  마지못해 마지막으로 check() 함수가 호출하게 끔 배치하는 것이 좋다.
// 신입들이 이 실수로 많이 깨진다. 무거운 걸 앞에 배치해서...

//  (2) && (and), finds ther first falsy value // 3개가 다 true면 true이다.
console.log(`and: ${value1 && value2 && check()}`); // and: false
// and도 or와 마찬가지로 처음 것이 false면 바로 게임 끝이다.
// 뒤에것들은 실행을 안하고 바로 false 때리고 끝이다.

// oftern used to compress long if-statement // 그리고 간단하게 null 체크 할 때도 많이 쓰인다.
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😱");
  }
  return true;
}

// (3) ! (not) // 값을 반대로 바꿔준다. true는 false로
console.log(!value1); // true

// ------------------------------
// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion // 타입을 변경해서 검사를 한다.
console.log(stringFive == numberFive); // true // string 5 와 number 5는 string 안에 5가 number니 타입을 바꿔서 같다고 나온다.
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion // 타입을 신경써서 타입이 다르면 넌 다른애들이야 하는거다.
console.log(stringFive === numberFive); // false // string과 number는 타입이 다르니 false
console.log(stringFive !== numberFive); // true
// 코딩할때는 왠만하면 strict equality를 사용해서 검사를 하는게 좋다.

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false // 타입에 상관없이 reference가 다르기 때문에 false다.
console.log(ellie1 === ellie3); // true
// ellie1과 ellie2는 똑같은 데이터를 저장하지만 메모리에는 서로다른 reference를 갖고 있고 서로 다른 object를 가리키고 있다.
// ellie3은 ellie1의 reference가 할당되어 있으니까 똑같은 reference를 가지고 있게 되는 거다.

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // boolean이 아닌 다른 타입이여서 false
console.log("" == false); // true
console.log("" === false); // 다른 타입이여서 false
console.log(null == undefined); // true
console.log(null === undefined); // 다른 타입이여서 false

// --------------------------------
// 8. Conditional operators: if
// if, else if, else
const name = "lala";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are coder");
} else {
  console.log("who are you?"); // who are you?
}

// -------------------------------
// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no"); // no
// : 간단할 때만 이렇게 쓰는게 좋다.

// -----------------------------------
// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "Chrome";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!"); // love you!
    break;
  default:
    console.log("same all!");
    break;
}
// 출력 값이 같은 경우에는 case를 연달아서 붙여놓으면 자동적으로 묶어서 출력된다.

// ----------------------------
// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`); // while: 3, while: 2, while: 1
  i--;
}

//do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`); // do while: 0
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`); // for: 3, for: 2, for: 1
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration // 위처럼 선언된 i를 사용하기도 하고, 이렇게 for문 안에서 지역변수를 선언해서 작성하는 것도 좋다.
  console.log(`inline variable for: ${i}`); // inline variable for: 3, inline variable for: 1
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
// : i가 0일 때 j를 0~9까지, i가 1일때 j를 0~9까지, i가 9까지 반복이다.
// : 이런건 Cpu에 좋지 않아서 되도록이면 피하는 것이 좋다.

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
