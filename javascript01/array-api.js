// Quiz 10
// Q1. make a string out of an array   // join
{
    const fruits = ['apple', 'banana', 'orange'];

    // mine
    console.log(fruits.toString()); // apple, banana, orange

    // ellie
    const result = fruits.join(); 
    console.log(result); // apple, banana, orange
    // const result = fruits.join('|'); 
    // console.log(result); // apple|banana|orange
  }
  
  // Q2. make an array out of a string   // split   
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';

    // mine === ellie
    const result = fruits.split(',');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]   // reverse
  {
    const array = [1, 2, 3, 4, 5];

    // mine === ellie
    const result = array.reverse(); 
    console.log(result); // [5, 4, 3, 2, 1]
    console.log(array); // [5, 4, 3, 2, 1]
    // : reverse() 는 배열 자체를 거꾸로 바꾼다.
    
  }
  
  // Q4. make new array without the first two elements   // slice
  {
    const array = [1, 2, 3, 4, 5];

    // mine
    // const array2 = array.splice(2, 3); 
    // console.log(array2);  // [3, 4, 5]
    // console.log(array); // [1, 2]  // array도 건재해야하는데 3, 4, 5가 삭제되어서 splice 쓰면 안된다.
    // : splice는 배열자체를 수정하는 애

    // ellie
    const result = array.slice(2, 5);
    console.log(result); // [3, 4, 5]
    console.log(array); // [1, 2, 3, 4, 5]  // array 건재!
    // : slice는 배열에서 원하는 부분만 return해서 쓰면된다.
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90   // find
  {
    // mine === ellie
    const result = students.find((student) => student.score === 90); 
    console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}
    // : find는 첫번째로 true가 나오면 해당하는 그 배열의 요소를 return 해주는 api 이다. 첫번째만 찾고 멈춘다. 
  }
  
  // Q6. make an array of enrolled students   // filter
  {
    // mine === ellie
    const result = students.filter((student) => student.enrolled); // true된 값만 찾아오는거니 student.enrolled === true에서 === true는 생략해도 되네.
    console.log(result); // (3) [Student, Student, Student]
  }
  
  // Q7. make an array containing only the students' scores   // map
  // result should be: [45, 80, 90, 66, 88]
  {
    // mine : 못품 
    // 아직 api 영어로 읽어도 잘 안와닿아서 map을 읽어보고도 사용 못함...
    // filter를 정확히 파악 못해서 그런지 filter로 찾으려고 했네...
    // const result2 = students.filter(Student => Student.score);
    // const result = students.score;
    // const scoreResult = [];
    // for (let i = 0; i < students.length; i++) {
    //   scoreResult = students[i].score;
    // }
    // console.log(scoreResult);

    // ellie
       const result = students.map((student) => student.score); // student를 받아서 score로 리턴
       console.log(result); // [45, 80, 90, 66, 88]
    // : map은 원래있던 students의 배열의 요소를 지정한 콜백 할수를 거쳐서 다시 새로운 값으로 변환하는 것
    // : function이 2를 곱하는 것이라면 원래있던 요소들이 function을 거쳐서 2를 곱한 새로운 요소들로 변환되는 것이다.
    // : 이 문제에서는 students라는 object를 score로 변환해서 만들면 된다.
        // const result2 = students.map((student) => student); 
        // : 주어진 student가 들어오면 student를 리턴해보겠다. 즉 앞에 (student)는 들어오는거고 => 이후에 적는것은 return 값인거다.
        // console.log(result2); // (5) [Student, Student, Student, Student, Student]
    // 배열안에 있는 요소들을 원하는 함수를 이요해서 다른 방식의 데이터를 만들고 싶을 때 map이 유용하다.

    // 콜백함수로 전달되는 인자의 이름에 대해서
    // 콜백함수 ((student) => student.score) 에서 student 2개는 인자다. student 대신 아무 이름으로 해도 된다.
    // 그런데 ((item) => item.score) 또는 ((value) => value.score) 이런식으로 의미없이 인자를 쓰는 것 보다는 
    // 최대한 이해하기 쉽고 한눈에 알 수 있도록 ((student) => student.score) 이런식으로 해주는 것이 좋다. 
    // 여기서는 한줄이라 상관없지만, 코드가 길어지면 인자를 value라고 했을 때 이게 뭔지 파악이 힘들다. 
  }
  
  // Q8. check if there is a student with the score lower than 50   // some
  {
    // mine === ellie
    const result = students.some((student) => student.score < 50); 
    console.log(result); // true
    // some : 배열의 요소 중에서 이 콜백함수가 리턴이 true가 되는게 있는지 없는지를 확인해준다.
    // : 즉 배열에서 하나라도 이 조건의 만족되는 요소가 있다면 true가 return이 된다. 
    
    const result2 = students.every((student) => student.score < 50); 
    console.log(result2); // false
    // every : some이랑 비슷한데 배열의 모든 요소들이 이 조건을 충족해야만 true가 return이 된다. 
    // : 그래서 every를 쓰면 false가 return이 된다.
  }
  
  // Q9. compute students' average score   // reduce
  {
    // mine : 못품    // 배열의 api를 이용하지 않고 이상하게 하다가 실패함...
    // let averageScore;
    // const result = students.map((student) => {
    //   for (let i= 0; i < student.length; i++) {
    //     // let student = students;
    //     // console.log(student);
    //     let addScore =+ student.score[i]; 
    //     console.log(addScore);
    //   } 
    //   // averageScore = addScrore / (students.length - 1);
    //   // return averageScore;
    // });
    // // console.log(result); // 

    // ellie
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result); // 369 // 합한 값
        // reduce : 배열 하나하나를 돌면서 무언가 값을 누적할 때 쓰는 거다.
        // prev : prev value는 이전에 콜백함수에서 return 된 값이 전달 되어져 오고
        // curr : curr value는 배열의 아이템을 순차적으로 전달 받는다
        // 0 은 시작점이다. 5라고 하면 prev가 5로 시작하므로 5를 더한 값인 374의 값이 나온다.
    console.log(result / students.length); // 73.8 // 평균값    
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    // mine : 못품
      // const result = students.toString();
      // console.log(result.score); //undefined 

    // ellie
    const score = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(score); // 45, 80, 90, 66, 88 (filter 없으면) // filter 추가하여 80, 90, 66, 88
    // map을 써서 score만 들어있는 배열로 만들어주고, 
    // filter를 사용하여 50점 넘는 것만 찾아주고,
    // join을 써서 string으로 만들어 준다.
    // 이런식으로 묶어서 작성이 가능하다. (=== 함수형 프로그래밍) : 가독성도 좋아짐.
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90' 
  {
    // mine === ellie
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)  // 45,66,80,88,90 // 작은 수부터 정렬 ascending 
    // a (이전 값), b(현재 값) : -를 return하면 첫번째가 뒤에 것보다 작다고 간주되어져서 정렬이 되
    // .sort((a, b) => b - a) // 90,88,80,66,45 // 큰 수부터 정렬 descending
    .join();
    console.log(result); // 45,66,80,88,90
    
  }
