class Counter {
    constructor(runEveryFiveTimes) { // 생성자인 coolCounter의 인자인 printSomething를 콜백함수로 받는다. // 생성자에서 인자가 없으면 runEveryFiveTimes은 undefined가 된다.
        this.counter = 0;
        this.callback = runEveryFiveTimes; // 변수 callback으로 전달되서 increase함수의 if문에서 호출된다.
    }

    increase() { // class 안에서 함수를 선언 할 때는 function을 안적어도 된다.
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter); // 숫자도 알고싶다면 this.counter를 보낸다.
            // 그냥 this.callback(this.counter); 이렇게만 하면 this.callback 이 undefined가 되었을 때 에러가 난다. 그래서 인자가 없을 떄도 프로그램이 가동할 수 있도록 && 연산자로 처리해준다.
        }
    }
}
function printSomething(num) {
    console.log(`Wow! ${num}`); // this.counter를 인자로 num이라는 변수로 받을 수 있다.
}
function alerNum(num) {
    alert(`Wow! ${num}`);
}

// new라는 키워드를 통해서 object를 만들게 되면 class의 constructor가 실행이 되서 this.counter = 0; 이다.
// 생성자를 만들 떄 원하는 콜백함수를 전달해준다.
const printCounter = new Counter(printSomething); // 
const alertCounter = new Counter(alerNum); // 
// 하나의 class로 서로 다른 기능을 하는 다양한 object를 만들 수 있다. 이렇게 하면 class의 재사용 가능성이 높아진다.
// keypoint! : 이 예제처럼 가능하면 class를 하나의 완전히 다 만들어진 완전체로 만들기 보다는 우리가 레고로 조립해서 원하는 것을 만들 수 있는 것처럼,
//            우리가 원하는 기능을 끼워 맞춰서 재조립이 가능하도록 만드는 것이 좋다. 
//            그렇기 때문에 이렇게 콜백 함수를 등록을 받는거다.  

printCounter.increase(); // 1 // 호출할 떄 마다 counter가 하나씩 증가함
printCounter.increase(); // 2
printCounter.increase(); // 3 
printCounter.increase(); // 4
printCounter.increase(); // 5 // wow! 5

printCounter.increase(); // 6 
printCounter.increase(); // 7
printCounter.increase(); // 8 
printCounter.increase(); // 9
printCounter.increase(); // 10 // Wow! 10





