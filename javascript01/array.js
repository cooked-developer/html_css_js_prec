'use strict';

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍉'];
console.log(fruits); // 사과, 수박
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 수박
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length -1]); // 수박 : 맨 마지막 index의 값이 나옴. index는 0부터 시작하니까

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // 사과, 수박
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit); // 사과, 수박
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit)); // 사과, 수박

// **프로그래밍 실력 팍 늘리는 좋은 습관!!** 
// : 그냥 그렇구나 하고 바로 넘기지 말고
// : forEach를 ctrl누르고 클릭해서 들어가 api를 오래걸리더라도 영어를 직접 읽어보면서 이해하고 넘어가라.
// : 영어도 처음만 시간이 걸리고 어렵지 비슷한 단어들의 반복이라 점점 빨라진다. 
// : 이 좋은 방법을 처음부터 습관화 시켜나가자!  


// 4. Additon, deletion, copy
// push: add an item to the end
fruits.push('🍌', '🫐');
console.log(fruits); // 사과, 수박, 바나나, 블루베리

// pop: remove and item from the end
fruits.pop();
console.log(fruits); // 사과, 수박, 바나나
fruits.pop();
console.log(fruits); // 사과, 수박

// unshift: add an item to the benigging
fruits.unshift('🍍', '🍅');
console.log(fruits); // 파인애플, 감, 사과, 수박

// shift: remove and item from the benigging
fruits.shift();
console.log(fruits); // 감, 사과, 수박
fruits.shift();
console.log(fruits); // 사과, 수박

// note!! shift, unshift are slower than pop, push 
// : shift, unshift를 사용하면 배열의 자리를 옮기고 추가하고, 삭제하고 자리를 옮기고 해서 느리다. 배열의 길이가 길면 길수록 더욱 느리다.
// : 배열의 맨 뒤에서 넣고 빼고 하거나, index 자리를 변경하는 건 빠르다. 
// : 그래서 되도록 pop과 push를 사용하는게 좋다.

// splice: remove and item by index position
fruits.push('🍍', '🫐', '🍌');
console.log(fruits); // 사과, 수박, 파인애플, 블루베리, 바나나
fruits.splice(1); // 뒤에 몇개 지울 건지 안적으면 index 1번 부터 뒤에가 다 지워짐
console.log(fruits); // 사과
fruits.push('🍍', '🫐', '🍌');
console.log(fruits); // 사과, 파인애플, 블루베리, 바나나
fruits.splice(1, 2); // index 1번 부터 2개를 지워라
console.log(fruits); // 사과, 바나나
fruits.push('🍍', '🫐');
console.log(fruits); // 사과, 바나나, 파인애플, 블루베리
// 지정된 자리를 지우고 그 자리에 추가할 수도 있다.
fruits.splice(1, 1, '🍉', '🍑'); // index 1번부터 1개를 지우고 그 자리에 수박, 복숭아를 추가해라
console.log(fruits); // 사과, 수박, 복숭아, 파인애플, 블루베리
// 지정된 자리를 지우지않고 그 자리에 추가할 수도 있다.
// console.log(fruits); // 사과, 바나나, 파인애플, 블루베리
// fruits.splice(1, 0, '🍉', '🍑'); // index 1번부터 지우지는 않고 그 자리에 수박, 복숭아를 추가해라
// console.log(fruits); // 사과, 수박, 복숭아, 바나나, 파인애플, 블루베리

// combine two arrays
const fruits2 = ['🥭', '🍒']; // 망고, 체리
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // 사과, 수박, 복숭아, 파인애플, 블루베리, 망고, 체리

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits); // 사과, 수박, 감, 파인애플, 블루베리
console.log(fruits.indexOf('🍑')); // 2
console.log(fruits.indexOf('🍉')); // 1
console.log(fruits.indexOf('🍌')); // -1 // 없는 것을 배열에서 찾으면 -1이 출력된다.

// includes
console.log(fruits.includes('🍎')); // true
console.log(fruits.includes('🍒')); // false

// lastIndexOf
console.clear();
console.log(fruits); // 사과, 수박, 감, 파인애플, 블루베리
fruits.push('🍎');
console.log(fruits); // 사과, 수박, 감, 파인애플, 블루베리, 사과
console.log(fruits.indexOf('🍎')); // 0 
console.log(fruits.lastIndexOf('🍎')); // 5 
// : 이런것도 알고 있으면 나중에 프로젝트 할 떄 너무 유용하다.

// 숙제 
// indexof를 ctrl누르고 들어가서 api 선언된 곳에서 위를 올려보면 
// interface Array<T> {} 가 선언되어있고 api들이 있는데 그거를 하나씩 읽어보면서 직접 확인해보고 사용해보는 시간을 가져봐라.
// ex) pop() 은 지우기만 하는게 아니고 지운 값을 return 해주기도 하네?
//     그러면 const poped = fruits.pop(); 이라고 하면 poped에 나간아이가 할당이 되겠구나?
// 그리고 내려보며 읽어보면서 sort라는 애가 있구나, every 라는 애가 있구나 이렇게 알아나가면 된다.

