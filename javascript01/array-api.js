// Quiz 10
// Q1. make a string out of an array
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
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';

    // mine === ellie
    const result = fruits.split(',');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];

    // mine === ellie
    const result = array.reverse(); 
    console.log(result); // [5, 4, 3, 2, 1]
    console.log(array); // [5, 4, 3, 2, 1]
    // : reverse() 는 배열 자체를 거꾸로 바꾼다.
    
  }
  
  // Q4. make new array without the first two elements
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
  
  // Q5. find a student with the score 90
  {
    // mine === ellie
    const result = students.find((students) => students.score === 90); 
    console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}
    // : find 함수는 (true)가 될 때까지 찾다가 (true)인 것을 1가지 찾으면 거기서 끝이난다.
  }
  
  // Q6. make an array of enrolled students
  {
    const array2 = students.filter(students => students.enrolled === true);
    console.log(array2); // (3) [Student, Student, Student]
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    // const array = students.filter(students.score);
    // console.log(array);

  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    console.log(students.includes(students.score < 50));
  }
  
  // Q9. compute students' average score
  {
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
  }
