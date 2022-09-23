'use strict';

// 💩 -> ✨✨✨✨✨
// Callback Hell example
// class UserStorage {
//     async loginUser(id, password) {
        
//             setTimeout(() => {
//                 if (
//                     (id === 'ellie' && password === 'dream') ||
//                     (id === 'coder' && password === 'academy')  
//                 ) {
//                     return (id);
//                 } else {
//                     return (new Error('not found'));
//                 }
//             }, 2000);
//     }

//     async getRoles(user) { 
//             setTimeout(() => {
//                 if (user === 'ellie') {
//                     return ({ name: 'ellie', role: 'admin'});
//                 } else {
//                     reject(new Error('no access'));
//                 }
//             }, 1000);
//     }
// }

async function delay(ms) {
    return setTimeout(ms);
}

async function loginUser(id, password) {
    await delay(2000);
    if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')  
    ) {
        return id;
    } else {
        return new Error('not found');
    }
}

async function getRoles(user) {
    await delay(1000);
    if (user === 'ellie') {
        return { name : 'ellie', role: 'admin'};
    } else {
        return new Error('no access');
    }
} 

async function playLogin() {
const id = prompt('whats your id');
const password = prompt('whats your password');
return loginUser(id, password)
.then(getRoles()
.then(alert(`Hello ${name}, you hava a ${role} role`)));
};
playLogin().then();

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage
//     .loginUser(id, password)
//     .then(userStorage.getRoles)
//     .then(user => alert(`Hello ${user.name}, you hava a ${user.role} role`))
//     .catch(console.log)
