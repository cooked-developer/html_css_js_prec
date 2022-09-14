// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";

// -------------------------------------------------------------
// 2. Variable, rw(read/write)
// let (added in ES6)
let globalname = "global name";
{
  let name = "kyu";
  console.log(name);
  name = "won";
  console.log(name);
  console.log(globalname);
}
console.log(name);
console.log(globalname);

// var (don't ever user this!)
// var를 안쓰는 이유 1 : 변수를 선언하기도 전에 console, 값을 할당해도 에러가 안난다.
// var hoisting (move declaration from bottom to top)
console.log(age);
// var는 에러가 안남. 변수는 정의되어 있지만 값이 아직 안들어거있네?
// undefined
age = 4;
console.log(age);
var age;

// let은 에러남. 야임마 let을 선언하기 전에 값을 넣었잖아!
// Uncaught ReferenceError: Cannot access 'name' before initialization
// name = 4;
// let name;

// var를 안쓰는 이유 2 : has no block scope
{
  weight = 80;
  var weight;
}
console.log(weight);
// black scope를 무시하고 80이 출력 됨...
// : var를 썼을 때의 이런 위험부담이 있기 떄문에 let을 사용한다.

// -------------------------------------------------------------
// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types; all objects by default are mutable in JS
// favor immutable data type always for a few reasons :
// - security
// - thread safety
// - reduce human mistakes

//----------------------------------------------------------------
// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
// value: 17, type: number
// value: 17.1, type: number
// : javascript 에서 숫자는  number 한가지!(java는 short, long, int, float 등등)

// number - speicla numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2; // string / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + " type: " + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value:  ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true

// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // error 가 남
// Uncaught TypeError: Cannot convert a Symbol value to a string
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// .description을 붙여서 string으로 변환해서 출력해야함

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
console.log(ellie);
ellie.age = 21;
console.log(ellie);

// -------------------------------------------------------------
// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); //value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //value: 1, type: number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); //value: 75, type: string
// 앞에 '7'이라는 string을 보고 뒤에 number 5도 string으로 판단해서 '75'라는 string으로 타입이 변환되어 나오게된다.
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); //value: 4, type: number
// string을 string으로 나누는데 string안에 숫자가 있으니 number로 타입이 변환되어 나오게된다.
console.log(text.charAt(0)); // Uncaught ReferenceError: con is not defined
// 위에는 h라고 나왔던 text.charAt(0)의 값이 text의 변화로 인해 에러가 나게 된다.
// : 자바스크립트는 런타임에서 타입이 정해지기 때문에 이것 떄문에 에러가 런타임으로 발생하는 경우가 굉장히 많다.
// : 그래서 나온게 TypeScript이다.
