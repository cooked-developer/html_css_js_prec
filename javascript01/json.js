// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"] // '' 싱글 쿼트에서 -> "" : 더블 쿼트로 된다.

const rabbit = {
    name: 'ggangchong',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // Symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`);
    }
}

json = JSON.stringify(rabbit);
console.log(json); // {"name":"ggangchong","color":"white","size":null,"birthDate":"2022-09-21T05:37:47.043Z"}
// jump 처럼 함수는 object위에 있는 데이터가 아니기 때문에 json에 포함되지 않고, 
// symbol 같은 javaScript 위에만 있는 특별한 데이터도 json에 포함되지 않는다.

// json을 조금 세밀하게 통제하고 싶을 떄 : 원하는 프로폴티만 골라서 정의할 수 있다.
json = JSON.stringify(rabbit, ['name', 'color']); 
console.log(json); // {"name":"ggangchong","color":"white"}

// json을 조금 더 세밀하게 통제하고 싶을 떄 : 콜백함수를 이용해서 쓸 수 있다.
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
}); // 
console.log(json); // {"name":"ellie","color":"white","size":null,"birthDate":"2022-09-21T05:51:12.483Z"}
// name이 ellie로 변경됨

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json); //{"name":"ggangchong","color":"white","size":null,"birthDate":"2022-09-21T05:53:53.894Z"}
const obj = JSON.parse(json);
console.log(obj); // {name: 'ggangchong', color: 'white', size: null, birthDate: '2022-09-21T05:54:32.708Z'}
rabbit.jump(); // can jump!
// obj.jump(); // error, 유의할 점: object rabbit을 string json으로 바꿀 때 함수는 포함이 안되었다. 그걸 object로 변환 시켰으니 jump함수는 없던 것.

console.log(rabbit.birthDate.getDate()); // 21
// console.log(obj.birthDate.getDate()); // error, 유의할 점: birthDate의 value 값이 date라는 object였는데 이걸 json 형태로 바꾸어서 string이 되었다. 
// 그러니 object가 아닌 string인데 불러올려고 하니 error가 난 것.

// 그래서 세밀하게 다시 Date()로 변환하고 싶을 때 콜백함수를 이용할 수 있다.
json = JSON.stringify(rabbit);
const obj2 = JSON.parse(json, (key, value) => { 
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
}); 
console.log(rabbit.birthDate.getDate()); // 21
console.log(obj2.birthDate.getDate()); // 21
