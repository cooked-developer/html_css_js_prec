'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name); // ellie
console.log(ellie.age); // 20
ellie.speak(); // ellie: hello!

// 2. Getter and setters 
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
            // throw Error('no way age!!!');
        // }
        this._age = value < 0 ? 0 : value;
    }
    // get, set 안에 age는 변수를 다르게 해야 RangeError: Maximum call stack size exceeded에서 벗어날 수 있다. 
    // 보통 _변수명을 많이 사용한다.
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); // 0

// : age가 -1이면 말이 안되잖아. 근데 고객이 그런 바보같은 실수를 할 수 있어. 
// : 그걸 개발자 입장에서 미리 방지하려고 getter와 setter를 쓰는거다.
// : user1._age가 아닌 user1.age를 쓸수 있는 것도 getter와 setter 덕분이다.

// 3. Fields (public, private)
// Too soon! 너무 최신이라 아직 사파리에서도 지원안하고 있어서 지금 쓰기에는 이른 것 같다. 
// mdn 사이트 참조
class Experiment {
    publicField = 2;
    #privateField = 0;  
}   
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const publisher2 = new Article(222);
console.log(publisher2.publisher); // undefined // static은 object에 붙어있는 것이 아니여서 내용을 알 수 없다.
console.log(Article.publisher); // Dream Coding // static은 이렇게 class에 붙어있어서 class. 을 해서 내용을 알 수 있다.
// printPublisher(); // error
Article.printPublisher(); // Dream Coding // 함수를 호출 할 때도 class. 을 사용하여야 한다.
// : static은 object에 붙어있는 것이 아니라 class에 붙어있기 때문에 
// : class 명을 입력하고 .publisher라고 해야 알 수 있다.
// : typescript에서도 많이사용됨. 
// : 언제사용하면 좋을까? object에 상관없이, 들어오는 데이터에 상관없이 
// : 공통적으로 class에서 쓸 수 있는거라면 static과 static methods를 이용해서 작성하는 것이 메모리의 사용을 조금 더 줄일 수 있다.

// 5. Inheritance // 상속과 다양성
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape { 
    draw() {
        super.draw();
        console.log('🔼'); 
    }
    getArea() { 
        return (this.width * this.height) / 2; 
    }
    // 오버라이딩. 필요한 것만 이렇게 오버라이딩 해서 사용한다.

    toString() {
        return `toString사용가능 color: ${this.color}`; // 모든 object는 javascript의 Object를 상속받아서 이런게 사용이 가능하다.
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(10, 10, 'red');
triangle.draw(); // drawing red color of  // 오버라이딩: super로 부모의 drawing red color! 삼각형 이모지 둘 다 차례로 출력됨.
console.log(triangle.getArea()); // 100 // 오버라이딩: 근데 삼각형은 2로 나누는 걸 추가해야하잖아! 나누기 2를 추가해서 50이 출력됨.

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true // 상속 받은 거니까 맞지
console.log(triangle instanceof Object); // true  // 모든 object는 javascript의 Object를 상속받은 거니 맞지 
console.log(triangle.toString()); // toString사용가능 color: red // 또 Object를 상속받은 거니 이런 Object에 있는 것들을 사용할 수 있는거지.

