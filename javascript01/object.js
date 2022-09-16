// Objects
// one of the JavaScript's data types. 
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
// object 사용 안했을 때
const name = 'ell';
const age = 3;
print(name, age); // ell, 3
function print(name, age) {
    console.log(name);
    console.log(age);
}
// : address, phone, 등등 인자가 많아지면 추가해야하는 것도 많아지고 관리가 힘들다.
// : 또 로지컬하게 그룹으로 묶어서 생각할 수 없기 떄문에 힘들다.   
// : 그래서 이것을 개선하고자 Object를 사용한다. 

// object 사용 했을 때
function print2(person) {
    console.log(person.name);
    console.log(person.age);
}
const ellie = { name: 'ellie', age: 4 }; // 'object literal' syntax : javascript에서는 class가 없어도 브라켓을 이용해서 바로 object를 생성할 수 있다.
print2(ellie); // ellie, 4


//object를 만드는 방법 
const obj1 = {}; // 'object literal' syntax : 브라켓 이용해서 object를 만든다.
const obj2 = new Object(); // 'object constructor' syntax : class를 이용해서 object를 만든다.

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob); // true
// : 뒤 늦게 추가도 가능한 이런 미친짓이 가능. 그런데 이렇게 동적으로 만들면 유지보수가 힘들기 때문에 
// : 왠만하면 안하는게 좋다.

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined
// : 삭제도 가능한 이런 미친짓이 가능. 

// 2. Computed properties : []
// key should be always string
console.log(ellie.name); // ellie
console.log(ellie['name']); // ellie
// : .을 써도 되고 []을 써도 된다. 단 'name'처럼 string으로 써야한다.
ellie['hasJob'] = true;
console.log(ellie.hasJob); // true

//언제 .을 쓰고, 언제 []을 사용하는가?
// . : 코딩을 하는 그 순간 해당하는 값을 받아오고 싶을 때 .을 사용해서 코딩을 한다. 
// [] : 코딩을 하는 그 순간 정확히 어떤 키가 필요하고 써야할지 모를 때, 즉 런타임에서 결정될 때 Computed properties를 사용한다.   
function printValue(obj, key) {
    // console.log(obj.key); // .을 여기서 사용하면 undefined가 출력된다.
    console.log(obj[key]); // []을 써야 key값을 받을 수 있다.
    // 실시간으로 원하는 key의 값을 받아오고 싶다면 computed properties를 쓰면된다.
}
printValue(ellie, 'name'); // ellie
printValue(ellie, 'age'); // 4
// [] : 다양한 키들을 변경해서 출력할 수 있다. 
// [] : 나중에 동적으로 key에 관련된 value를 받아와야 될 떄 유용하게 쓸 수 있다.

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// 'person4를 만들려니 일일이 위처럼 계속 적어주기가 너무 귀찮다. 
// object를 만들어주는 함수를 만들어서 사용할까?' 라고 생각해서 밑에 만들었어.
const person4 = makePerson('ellie', 30);

function makePerson(name, age) { 
    return {
        // name: name, 
        name,
        // property value shorthand 
        // key와 value가 동일하다면 생략가능한 javascript의 기능
        // age: age
        age
    }
}
// object를 만들어주는 함수
// javaScript에 class가 없었을 떄 이런식으로 많이 작성되었었다.
console.log(person4); // {name: 'ellie', age: 30}

const person5 = new Person('ellie', 30); 
console.log(person5); // Person {name: 'ellie', age: 30}

// 4. Constructor Function
function Person(name, age) { 
    // this = {}; // 생략
    this.name = name;
    this.age = age;
    // return this; //생략
}
// 다른 계산을 하지 않고 순수하게 object를 생성하는 함수들은 보통 첫글자를 대문자로 하여 만든다.
// class에서 object를 만드는 것처럼 만든다.

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // true
console.log('address' in ellie); // false
console.log(ellie.address); // undefined
// : in keyword를 통해서 obj안에 key가 있는지 없는지 간단히 확인할 수 있다.

// 6. for..in vs for..of
// : 나중에 프로젝트 할 떄 굉장히 유용하게 쓸 수 있는 아이

// for (key in obj)
console.clear(); // console에 찍힌 이전것들 지우기
for (key in ellie) {  // 모든 key를 받아온다.
    console.log(key); // name, age, hasJob
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for..of 사용 안했을 떄
for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // 1, 2, 4, 5
}
// for..of 사용 했을 때 : 훨씬 간결하게 사용가능(let i=0; 이런거 안적어도 되고...)
for (value of array) { // array에 있는 모든 값들이 value에 할당된다.
    console.log(value); // 1, 2, 4, 5
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); // {name: 'coder', age: '20'}
// : user1이 바라보는 ref를 user2에도 할당해서 바라보는 메모리가 같다. 
// : 그래서 user2.name을 변경하면 user1.name도 변경되는 것이다.

// Q) ref를 할당해서 같은 obj를 바라보는 것이 아니라 진짜로 obj를 복제하는 방법이 있나요? Yes!
// 1) old way
const user3 = {};
for (key in user) {
    user3[key] = user[key]; // for문을 돌려서 차례로 할당된다. (1) user3[name] = user[name] , (2) user3[age] = user[age]
}
console.log(user3); // {name: 'coder', age: '20'}

// 2) Object.assign(); 함수를 이용한 방법
const user4 = {};
Object.assign(user4, user); // (target: {}, source: any)
const user5 = Object.assign({}, user); // 위처럼 해도 되고, 이렇게 줄여서 해도 됨
console.log(user4); // {name: 'coder', age: '20'}
console.log(user5); // {name: 'coder', age: '20'}

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 나오는 아이일 수록 앞에 동일한 property가 있다면 값을 계속 덮어씌운다. 
console.log(mixed.color); // blue // fruit1의 color: 'red'를 fruit2의 color: 'blue'로 덮어씌웠다.
console.log(mixed.size); // big

