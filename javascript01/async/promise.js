'use strict';

// Promise
// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer (promise 만들기)
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally (promise 사용하기) 
promise
.then(value => {  // resolve 했을 떄 호출되는 아이
    console.log(value);
})
.catch(error => { // reject 했을 때 호출되는 아이
    console.log(error);
})
.finally(() => {
    console.log('finally');
}) // resolve, reject 상관없이 무조건 호출되는 아이

// : then, catch, finally의 return 값이 promise여서 한번에 다 같이 쓸 수 있는 것이다.

// 3. Promise chaining (promise 연결하기)
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num *3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    })
})
.then(num => console.log(num)); // 5 // 2초 걸림
// : 이렇게 then, then, then, then 처럼 여러가지를 묶어서
// 다른 비동기적인 아이들을 묶어서 처리할 수 있다.

// 4. Error Handling (오류를 잘 처리하자)
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen() // 
    // .then(hen => getEgg(hen)) // 한가지 받을 땐 생략가능
    .then(getEgg) 
    .catch(error => { // egg를 받아오는 걸 실패했기 때문에 error대신 '🌭'으로 대체해서 진행됨.
        return '🌭';
    })
    .then(cook) 
    .then(console.log) // 🌭 => 🍳 
    .catch(console.log);


