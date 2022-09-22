// async & await
// clear style of using promise :)

// 1. async
// <async 사용 전>
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs...
//         resolve('ellie');
//     });
// }

// <async 사용 후>
async function fetchUser() {
    // do network request in 10 secs...
    return ('ellie');
};

const user = fetchUser(); 
user.then(console.log); // ellie
console.log(user); // Promise {<fulfilled>: 'ellie'}
// : async 키워드를 함수앞에 쓰면 promise를 쓰지 않아도 자동적으로 함수안에있는 코드블록들이 promise로 변환이 되어진다.
// async & await은 promise를 감싸고 있는, 조금 더 간편하게 쓸 수 있는 syntactic sugar 이다.

// 2. await (✨더 유용함) : 기다려
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000); // delay가 끝날 때 까지 기다려
    return '🍌'; // 기다렸다가 바나나를 return 한다. 
    // 이런식으로 동기적인 코드를 쓰는 것처럼 하면 더 쉽게 이해할 수 있다. 
}

// <promise 많은 중첩 === 콜백지옥>
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     }); 
// }
// : promise도 너무너무 중첩적으로 chaining을 하게되면 콜백지옥과 비슷한 문제점이 발생한다.

// <await 병렬 처리 전>
// async function pickFruits() {
//     const apple = await getApple(); // 1초 걸리고 사과를 가져옴
//     const banana = await getBanana(); // 사과를 가져올 때 까지 1초 기다렸다가, 바나나를 가져오는데 1초 걸려서 
//     return `${apple} + ${banana}`;    // 총 2초가 걸림. 
// }
// : 근데 바나나를 가져오는데 사과를 기다릴 필요가 없다. await 병렬 처리를 해주면 동시에 받아오게 된다.

// <await 병렬 처리 후>
async function pickFruits() {
    const applePromise = getApple(); 
    const bananaPromise = getBanana();
    const apple = await applePromise; 
    const banana = await bananaPromise;  
    return `${apple} + ${banana}`;  // 총 1초가 걸림. await 병렬 처리를 해줘서 동시에 받아오게 된다.   
}
// : 근데 코드를 이렇게 더럽게 작성하지 않는다. 아주 유용한 promise의 all api를 사용한다.
pickFruits().then(console.log); // 🍎 + 🍌

// 3. useful Promise API ✨
// Promise.all() : 병렬 처리
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => // ['', ''] : 배열처럼
        fruits.join(' + ') // make a string out of an array
        );
}
// : 병렬 처리로 총 1초가 걸림. 
pickAllFruits().then(console.log); // 🍎 + 🍌

// Promise.race() : 둘중 빠른 하나만 출력한다.
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
// : banana의 delay가 2초이고, apple의 delay가 3초라면 banana 하나만 출력이 된다. 
pickOnlyOne().then(console.log);

// Homework
// callback-to-promise 만든 것을 -> async & await을 사용하여 더 간단하게 바꿔보기
// promise-to-async로
