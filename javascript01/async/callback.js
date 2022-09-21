'use strict';

// 1. 동기와 비동기
// JavaScript is synchronous. // 동기
// Execute the code block in order after hoisting. // hoisting이 된 이후부터 코드가 나타나는 순서대로 자동적으로 실행이 된다. 
// hoisting: var, function declaration // 선언들이 제일 위로 올라가는 것 

// 동기적(synchronous) 실행방식
console.log('1');
console.log('2');
console.log('3');

// 비동기적(Asynchronous) 실행방식
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기, setTimeout 함수는 브라우저의 api이다. 1000 밀리새컨즈(1초) 뒤에 출력해줘
console.log('3'); // 동기
// 1, 3 이 먼저 출력이 되고 1초 뒤에 2가 출력이 된다.

// 2. 콜백 마지막 정리
// setTimeout(function())여기에서 우리가 전달하는 이 함수는 바로 실행되는 것이 아니라 
// setTimeout 이라는 함수 안에서 하나의 파라미터 인자로 우리가 만든 함수를 전달해준다. 
// 그래서 지금 당장 실행 하진 않고, 니가 나중에 1초가 지난 다음에 내 함수를 실행해줘
// 내 함수를 나중에 콜 불러줘 이렇게 해서 Callback. 
// 나중에 다시 불러줘 라고 해서 전달하는 이런 함수들을 콜백함수라고 한다.

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello')); // 동기
// : 위에 1, 3과 여기의 hello가 동기적으로 바로 출력이 되고 
// 2는 1초뒤에 비동기적으로 출력이 된다. 

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('bye'), 2000); // 비동기
// : 위에 1, 3, hello가 동기적으로 바로 출력이 되고 
// 2는 1초뒤에 그리고 bye는 2초뒤에 비동기적으로 나중에 출력이 된다.

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')  
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) { 
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const user = new UserStorage();
// user.loginUser();
// user.loginUser('ellie', );
const id = user.loginUser();
















