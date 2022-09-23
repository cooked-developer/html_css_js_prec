// false: 0, -0, '' (비어있는 문자열), null, undefined, let age; (선언만 하고 값이 할당되지 않는 것)
// true: -1, 'hello', [] (배열은 object여서 object는 값이 있든 없든 object 자체가 만들어 진 것이기 떄문에 true이다.)
let obj; // false
console.log(obj); // undefined

let obj2 = {
    name: 'ellie'
};

if(obj2) {
    console.log(obj2.name); // ellie
}
// : 위와 아래는 똑같다. 아래가 훨씬 깔끔하고 한줄로 되어서 && 연산자를 많이 사용한다.
obj2 && console.log(obj2.name); // ellie // obj2가 true여야 && 오른쪽 코드가 실행된다. 
