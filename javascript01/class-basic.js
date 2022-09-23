class Counter {
    constructor() {
        this.counter = 0;
    }

    increase() { // class 안에서 함수를 선언 할 때는 function을 안적어도 된다.
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            console.log('5배수');
        }
    }
}

const coolCounter = new Counter(); 
// new라는 키워드를 통해서 object를 만들게 되면 class의 constructor가 실행이 되서 this.counter = 0; 이다.

coolCounter.increase(); // 1 // 호출할 떄 마다 counter가 하나씩 증가함
coolCounter.increase(); // 2
coolCounter.increase(); // 3 
coolCounter.increase(); // 4
coolCounter.increase(); // 5 
// 5배수 출력 
coolCounter.increase(); // 6 



