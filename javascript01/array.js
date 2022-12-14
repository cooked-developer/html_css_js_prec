'use strict';

// Array๐

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['๐', '๐'];
console.log(fruits); // ์ฌ๊ณผ, ์๋ฐ
console.log(fruits[0]); // ์ฌ๊ณผ
console.log(fruits[1]); // ์๋ฐ
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length -1]); // ์๋ฐ : ๋งจ ๋ง์ง๋ง index์ ๊ฐ์ด ๋์ด. index๋ 0๋ถํฐ ์์ํ๋๊น

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // ์ฌ๊ณผ, ์๋ฐ
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit); // ์ฌ๊ณผ, ์๋ฐ
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit)); // ์ฌ๊ณผ, ์๋ฐ

// **ํ๋ก๊ทธ๋๋ฐ ์ค๋ ฅ ํ ๋๋ฆฌ๋ ์ข์ ์ต๊ด!!** 
// : ๊ทธ๋ฅ ๊ทธ๋ ๊ตฌ๋ ํ๊ณ  ๋ฐ๋ก ๋๊ธฐ์ง ๋ง๊ณ 
// : forEach๋ฅผ ctrl๋๋ฅด๊ณ  ํด๋ฆญํด์ ๋ค์ด๊ฐ api๋ฅผ ์ค๋๊ฑธ๋ฆฌ๋๋ผ๋ ์์ด๋ฅผ ์ง์  ์ฝ์ด๋ณด๋ฉด์ ์ดํดํ๊ณ  ๋์ด๊ฐ๋ผ.
// : ์์ด๋ ์ฒ์๋ง ์๊ฐ์ด ๊ฑธ๋ฆฌ๊ณ  ์ด๋ ต์ง ๋น์ทํ ๋จ์ด๋ค์ ๋ฐ๋ณต์ด๋ผ ์ ์  ๋นจ๋ผ์ง๋ค. 
// : ์ด ์ข์ ๋ฐฉ๋ฒ์ ์ฒ์๋ถํฐ ์ต๊ดํ ์์ผ๋๊ฐ์!  


// 4. Additon, deletion, copy
// push: add an item to the end
fruits.push('๐', '๐ซ');
console.log(fruits); // ์ฌ๊ณผ, ์๋ฐ, ๋ฐ๋๋, ๋ธ๋ฃจ๋ฒ ๋ฆฌ

// pop: remove and item from the end
fruits.pop();
console.log(fruits); // ์ฌ๊ณผ, ์๋ฐ, ๋ฐ๋๋
fruits.pop();
console.log(fruits); // ์ฌ๊ณผ, ์๋ฐ

// unshift: add an item to the benigging
fruits.unshift('๐', '๐');
console.log(fruits); // ํ์ธ์ ํ, ๊ฐ, ์ฌ๊ณผ, ์๋ฐ

// shift: remove and item from the benigging
fruits.shift();
console.log(fruits); // ๊ฐ, ์ฌ๊ณผ, ์๋ฐ
fruits.shift();
console.log(fruits); // ์ฌ๊ณผ, ์๋ฐ

// note!! shift, unshift are slower than pop, push 
// : shift, unshift๋ฅผ ์ฌ์ฉํ๋ฉด ๋ฐฐ์ด์ ์๋ฆฌ๋ฅผ ์ฎ๊ธฐ๊ณ  ์ถ๊ฐํ๊ณ , ์ญ์ ํ๊ณ  ์๋ฆฌ๋ฅผ ์ฎ๊ธฐ๊ณ  ํด์ ๋๋ฆฌ๋ค. ๋ฐฐ์ด์ ๊ธธ์ด๊ฐ ๊ธธ๋ฉด ๊ธธ์๋ก ๋์ฑ ๋๋ฆฌ๋ค.
// : ๋ฐฐ์ด์ ๋งจ ๋ค์์ ๋ฃ๊ณ  ๋นผ๊ณ  ํ๊ฑฐ๋, index ์๋ฆฌ๋ฅผ ๋ณ๊ฒฝํ๋ ๊ฑด ๋น ๋ฅด๋ค. 
// : ๊ทธ๋์ ๋๋๋ก pop๊ณผ push๋ฅผ ์ฌ์ฉํ๋๊ฒ ์ข๋ค.

// splice: remove and item by index position
fruits.push('๐', '๐ซ', '๐');
console.log(fruits); // ์ฌ๊ณผ, ์๋ฐ, ํ์ธ์ ํ, ๋ธ๋ฃจ๋ฒ ๋ฆฌ, ๋ฐ๋๋
fruits.splice(1); // ๋ค์ ๋ช๊ฐ ์ง์ธ ๊ฑด์ง ์์ ์ผ๋ฉด index 1๋ฒ ๋ถํฐ ๋ค์๊ฐ ๋ค ์ง์์ง
console.log(fruits); // ์ฌ๊ณผ
fruits.push('๐', '๐ซ', '๐');
console.log(fruits); // ์ฌ๊ณผ, ํ์ธ์ ํ, ๋ธ๋ฃจ๋ฒ ๋ฆฌ, ๋ฐ๋๋
fruits.splice(1, 2); // index 1๋ฒ ๋ถํฐ 2๊ฐ๋ฅผ ์ง์๋ผ
console.log(fruits); // ์ฌ๊ณผ, ๋ฐ๋๋
fruits.push('๐', '๐ซ');
console.log(fruits); // ์ฌ๊ณผ, ๋ฐ๋๋, ํ์ธ์ ํ, ๋ธ๋ฃจ๋ฒ ๋ฆฌ
// ์ง์ ๋ ์๋ฆฌ๋ฅผ ์ง์ฐ๊ณ  ๊ทธ ์๋ฆฌ์ ์ถ๊ฐํ  ์๋ ์๋ค.
fruits.splice(1, 1, '๐', '๐'); // index 1๋ฒ๋ถํฐ 1๊ฐ๋ฅผ ์ง์ฐ๊ณ  ๊ทธ ์๋ฆฌ์ ์๋ฐ, ๋ณต์ญ์๋ฅผ ์ถ๊ฐํด๋ผ
console.log(fruits); // ์ฌ๊ณผ, ์๋ฐ, ๋ณต์ญ์, ํ์ธ์ ํ, ๋ธ๋ฃจ๋ฒ ๋ฆฌ
// ์ง์ ๋ ์๋ฆฌ๋ฅผ ์ง์ฐ์ง์๊ณ  ๊ทธ ์๋ฆฌ์ ์ถ๊ฐํ  ์๋ ์๋ค.
// console.log(fruits); // ์ฌ๊ณผ, ๋ฐ๋๋, ํ์ธ์ ํ, ๋ธ๋ฃจ๋ฒ ๋ฆฌ
// fruits.splice(1, 0, '๐', '๐'); // index 1๋ฒ๋ถํฐ ์ง์ฐ์ง๋ ์๊ณ  ๊ทธ ์๋ฆฌ์ ์๋ฐ, ๋ณต์ญ์๋ฅผ ์ถ๊ฐํด๋ผ
// console.log(fruits); // ์ฌ๊ณผ, ์๋ฐ, ๋ณต์ญ์, ๋ฐ๋๋, ํ์ธ์ ํ, ๋ธ๋ฃจ๋ฒ ๋ฆฌ

// combine two arrays
const fruits2 = ['๐ฅญ', '๐']; // ๋ง๊ณ , ์ฒด๋ฆฌ
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ์ฌ๊ณผ, ์๋ฐ, ๋ณต์ญ์, ํ์ธ์ ํ, ๋ธ๋ฃจ๋ฒ ๋ฆฌ, ๋ง๊ณ , ์ฒด๋ฆฌ

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits); // ์ฌ๊ณผ, ์๋ฐ, ๊ฐ, ํ์ธ์ ํ, ๋ธ๋ฃจ๋ฒ ๋ฆฌ
console.log(fruits.indexOf('๐')); // 2
console.log(fruits.indexOf('๐')); // 1
console.log(fruits.indexOf('๐')); // -1 // ์๋ ๊ฒ์ ๋ฐฐ์ด์์ ์ฐพ์ผ๋ฉด -1์ด ์ถ๋ ฅ๋๋ค.

// includes
console.log(fruits.includes('๐')); // true
console.log(fruits.includes('๐')); // false

// lastIndexOf
console.clear();
console.log(fruits); // ์ฌ๊ณผ, ์๋ฐ, ๊ฐ, ํ์ธ์ ํ, ๋ธ๋ฃจ๋ฒ ๋ฆฌ
fruits.push('๐');
console.log(fruits); // ์ฌ๊ณผ, ์๋ฐ, ๊ฐ, ํ์ธ์ ํ, ๋ธ๋ฃจ๋ฒ ๋ฆฌ, ์ฌ๊ณผ
console.log(fruits.indexOf('๐')); // 0 
console.log(fruits.lastIndexOf('๐')); // 5 
// : ์ด๋ฐ๊ฒ๋ ์๊ณ  ์์ผ๋ฉด ๋์ค์ ํ๋ก์ ํธ ํ  ๋ ๋๋ฌด ์ ์ฉํ๋ค.

// ์์  
// indexof๋ฅผ ctrl๋๋ฅด๊ณ  ๋ค์ด๊ฐ์ api ์ ์ธ๋ ๊ณณ์์ ์๋ฅผ ์ฌ๋ ค๋ณด๋ฉด 
// interface Array<T> {} ๊ฐ ์ ์ธ๋์ด์๊ณ  api๋ค์ด ์๋๋ฐ ๊ทธ๊ฑฐ๋ฅผ ํ๋์ฉ ์ฝ์ด๋ณด๋ฉด์ ์ง์  ํ์ธํด๋ณด๊ณ  ์ฌ์ฉํด๋ณด๋ ์๊ฐ์ ๊ฐ์ ธ๋ด๋ผ.
// ex) pop() ์ ์ง์ฐ๊ธฐ๋ง ํ๋๊ฒ ์๋๊ณ  ์ง์ด ๊ฐ์ return ํด์ฃผ๊ธฐ๋ ํ๋ค?
//     ๊ทธ๋ฌ๋ฉด const poped = fruits.pop(); ์ด๋ผ๊ณ  ํ๋ฉด poped์ ๋๊ฐ์์ด๊ฐ ํ ๋น์ด ๋๊ฒ ๊ตฌ๋?
// ๊ทธ๋ฆฌ๊ณ  ๋ด๋ ค๋ณด๋ฉฐ ์ฝ์ด๋ณด๋ฉด์ sort๋ผ๋ ์ ๊ฐ ์๊ตฌ๋, every ๋ผ๋ ์ ๊ฐ ์๊ตฌ๋ ์ด๋ ๊ฒ ์์๋๊ฐ๋ฉด ๋๋ค.

