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
// : 위에 '1', '3'과 여기의 'hello'가 동기적으로 바로 출력이 되고 
// '2'는 1초뒤에 비동기적으로 출력이 된다. 

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 비동기
// : 위에 '1', '3', 'hello'가 동기적으로 바로 출력이 되고 
// '2'는 1초뒤에 그리고 'async callback'는 2초뒤에 비동기적으로 나중에 출력이 된다.

// 3. Callback Hell example
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

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you hava a ${userWithRole.role} role`);
            }, 
            error => {
                console.log(error);
            }
            )
    }, 
    error => {
        console.log(error)
    }
    );

// 4. 콜백 체인의 문제점 // 콜백 안에 또 콜백이 그리고 그안에 또 콜백이...
// : 읽기가 불편하다. 가독성이 떨어진다.
// 디버깅하고 유지보수 하기가 어렵다. 어디서 잘못된지 찾기가 어려워서
// 이런 이유로 콜백지옥이라는 말이 많이 나오게 된다. 이런식으로 코딩을 하는 것은 좋지 않다.













