// Don't give up

// 함수 선언
function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출

// doSomething(add);

const addFun = add; // 함수도 변수에서 배운 object 타입이라서 값을 바라보고있는 ref가 복사되는 것이다.
const result = addFun(1, 5);
console.log(result); // 6
const result2 = add(2, 3);
console.log(result2); // 5

// : 여기까지 기본을 잘 이해해야 콜백함수에서 무너지지 않는다.

function print() { // 아무런 인자를 받지 않는 함수는 인풋print(3, 5)을 받지 않는다. 
    console.log('print');
}
print(3, 5); // 'print' // 함수에 인자가 없어서 (3, 5)는 무시되고 print만 출력된다.

function print2(a, age) {  // 인자는 함수를 호출하는 사람으로부터 필요한 데이터를 받아오기 위한 것 
    console.log(`${a} ${age}`); // 인자는 우리가 정의한 단어이기 떄문에 의미없는 a보다 age처럼 조금 의미있는 단어를 쓰는게 좋다
}
print2(2, 3); // 2 3 
// : 함수 이름은 함수 자체를 가르키는 주소를 가진 아이이다.
// : 함수를 호출하기 위해서는 이렇게 괄호를 이용해서 print2() 
// : 필요한 데이터가 있다면 데이터도 전달하면 된다.

function add2(num1, num2) {
    return num1 + num2;
}

function surprise(operator) { // operator라는 변수 인자에 add2라는 함수의 ref가 전달이 된 것이다.
    const result = operator(5, 8); // add2(5, 8) 를 호출한 것이랑 똑같다. 함수의 ref를 전달한 것이기 떄문.
    console.log(result);
}

surprise(add2); // 13

function divide(num1, num2) {
    return num1 / num2;
}

function suprise2(gogogo) {
    const result = gogogo(8, 2); // divide(8, 2)
    console.log(result);
}

suprise2(divide); // 4
// const result = gogogo(8, 2); : suprise2(divide); 이렇게 하거나
// const result = gogogo; : suprise2(divide(8, 2)); 이렇게 하거나. 둘중 한 곳에서만 파라미터를 보내야한다. 

