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
    const fruits = '๐, ๐ฅ, ๐, ๐';

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
    // : reverse() ๋ ๋ฐฐ์ด ์์ฒด๋ฅผ ๊ฑฐ๊พธ๋ก ๋ฐ๊พผ๋ค.
    
  }
  
  // Q4. make new array without the first two elements   // slice
  {
    const array = [1, 2, 3, 4, 5];

    // mine
    // const array2 = array.splice(2, 3); 
    // console.log(array2);  // [3, 4, 5]
    // console.log(array); // [1, 2]  // array๋ ๊ฑด์ฌํด์ผํ๋๋ฐ 3, 4, 5๊ฐ ์ญ์ ๋์ด์ splice ์ฐ๋ฉด ์๋๋ค.
    // : splice๋ ๋ฐฐ์ด์์ฒด๋ฅผ ์์ ํ๋ ์ 

    // ellie
    const result = array.slice(2, 5);
    console.log(result); // [3, 4, 5]
    console.log(array); // [1, 2, 3, 4, 5]  // array ๊ฑด์ฌ!
    // : slice๋ ๋ฐฐ์ด์์ ์ํ๋ ๋ถ๋ถ๋ง returnํด์ ์ฐ๋ฉด๋๋ค.
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
    console.log(result); // Studentย {name: 'C', age: 30, enrolled: true, score: 90}
    // : find๋ ์ฒซ๋ฒ์งธ๋ก true๊ฐ ๋์ค๋ฉด ํด๋นํ๋ ๊ทธ ๋ฐฐ์ด์ ์์๋ฅผ return ํด์ฃผ๋ api ์ด๋ค. ์ฒซ๋ฒ์งธ๋ง ์ฐพ๊ณ  ๋ฉ์ถ๋ค. 
  }
  
  // Q6. make an array of enrolled students   // filter
  {
    // mine === ellie
    const result = students.filter((student) => student.enrolled); // true๋ ๊ฐ๋ง ์ฐพ์์ค๋๊ฑฐ๋ student.enrolled === true์์ === true๋ ์๋ตํด๋ ๋๋ค.
    console.log(result); // (3) [Student, Student, Student]
  }
  
  // Q7. make an array containing only the students' scores   // map
  // result should be: [45, 80, 90, 66, 88]
  {
    // mine : ๋ชปํ 
    // ์์ง api ์์ด๋ก ์ฝ์ด๋ ์ ์์๋ฟ์์ map์ ์ฝ์ด๋ณด๊ณ ๋ ์ฌ์ฉ ๋ชปํจ...
    // filter๋ฅผ ์ ํํ ํ์ ๋ชปํด์ ๊ทธ๋ฐ์ง filter๋ก ์ฐพ์ผ๋ ค๊ณ  ํ๋ค...
    // const result2 = students.filter(Student => Student.score);
    // const result = students.score;
    // const scoreResult = [];
    // for (let i = 0; i < students.length; i++) {
    //   scoreResult = students[i].score;
    // }
    // console.log(scoreResult);

    // ellie
       const result = students.map((student) => student.score); // student๋ฅผ ๋ฐ์์ score๋ก ๋ฆฌํด
       console.log(result); // [45, 80, 90, 66, 88]
    // : map์ ์๋์๋ students์ ๋ฐฐ์ด์ ์์๋ฅผ ์ง์ ํ ์ฝ๋ฐฑ ํ ์๋ฅผ ๊ฑฐ์ณ์ ๋ค์ ์๋ก์ด ๊ฐ์ผ๋ก ๋ณํํ๋ ๊ฒ
    // : function์ด 2๋ฅผ ๊ณฑํ๋ ๊ฒ์ด๋ผ๋ฉด ์๋์๋ ์์๋ค์ด function์ ๊ฑฐ์ณ์ 2๋ฅผ ๊ณฑํ ์๋ก์ด ์์๋ค๋ก ๋ณํ๋๋ ๊ฒ์ด๋ค.
    // : ์ด ๋ฌธ์ ์์๋ students๋ผ๋ object๋ฅผ score๋ก ๋ณํํด์ ๋ง๋ค๋ฉด ๋๋ค.
        // const result2 = students.map((student) => student); 
        // : ์ฃผ์ด์ง student๊ฐ ๋ค์ด์ค๋ฉด student๋ฅผ ๋ฆฌํดํด๋ณด๊ฒ ๋ค. ์ฆ ์์ (student)๋ ๋ค์ด์ค๋๊ฑฐ๊ณ  => ์ดํ์ ์ ๋๊ฒ์ return ๊ฐ์ธ๊ฑฐ๋ค.
        // console.log(result2); // (5)ย [Student, Student, Student, Student, Student]
    // ๋ฐฐ์ด์์ ์๋ ์์๋ค์ ์ํ๋ ํจ์๋ฅผ ์ด์ํด์ ๋ค๋ฅธ ๋ฐฉ์์ ๋ฐ์ดํฐ๋ฅผ ๋ง๋ค๊ณ  ์ถ์ ๋ map์ด ์ ์ฉํ๋ค.

    // ์ฝ๋ฐฑํจ์๋ก ์ ๋ฌ๋๋ ์ธ์์ ์ด๋ฆ์ ๋ํด์
    // ์ฝ๋ฐฑํจ์ ((student) => student.score) ์์ student 2๊ฐ๋ ์ธ์๋ค. student ๋์  ์๋ฌด ์ด๋ฆ์ผ๋ก ํด๋ ๋๋ค.
    // ๊ทธ๋ฐ๋ฐ ((item) => item.score) ๋๋ ((value) => value.score) ์ด๋ฐ์์ผ๋ก ์๋ฏธ์์ด ์ธ์๋ฅผ ์ฐ๋ ๊ฒ ๋ณด๋ค๋ 
    // ์ต๋ํ ์ดํดํ๊ธฐ ์ฝ๊ณ  ํ๋์ ์ ์ ์๋๋ก ((student) => student.score) ์ด๋ฐ์์ผ๋ก ํด์ฃผ๋ ๊ฒ์ด ์ข๋ค. 
    // ์ฌ๊ธฐ์๋ ํ์ค์ด๋ผ ์๊ด์์ง๋ง, ์ฝ๋๊ฐ ๊ธธ์ด์ง๋ฉด ์ธ์๋ฅผ value๋ผ๊ณ  ํ์ ๋ ์ด๊ฒ ๋ญ์ง ํ์์ด ํ๋ค๋ค. 
  }
  
  // Q8. check if there is a student with the score lower than 50   // some
  {
    // mine === ellie
    const result = students.some((student) => student.score < 50); 
    console.log(result); // true
    // some : ๋ฐฐ์ด์ ์์ ์ค์์ ์ด ์ฝ๋ฐฑํจ์๊ฐ ๋ฆฌํด์ด true๊ฐ ๋๋๊ฒ ์๋์ง ์๋์ง๋ฅผ ํ์ธํด์ค๋ค.
    // : ์ฆ ๋ฐฐ์ด์์ ํ๋๋ผ๋ ์ด ์กฐ๊ฑด์ ๋ง์กฑ๋๋ ์์๊ฐ ์๋ค๋ฉด true๊ฐ return์ด ๋๋ค. 
    
    const result2 = students.every((student) => student.score < 50); 
    console.log(result2); // false
    // every : some์ด๋ ๋น์ทํ๋ฐ ๋ฐฐ์ด์ ๋ชจ๋  ์์๋ค์ด ์ด ์กฐ๊ฑด์ ์ถฉ์กฑํด์ผ๋ง true๊ฐ return์ด ๋๋ค. 
    // : ๊ทธ๋์ every๋ฅผ ์ฐ๋ฉด false๊ฐ return์ด ๋๋ค.
  }
  
  // Q9. compute students' average score   // reduce
  {
    // mine : ๋ชปํ    // ๋ฐฐ์ด์ api๋ฅผ ์ด์ฉํ์ง ์๊ณ  ์ด์ํ๊ฒ ํ๋ค๊ฐ ์คํจํจ...
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
    console.log(result); // 369 // ํฉํ ๊ฐ
        // reduce : ๋ฐฐ์ด ํ๋ํ๋๋ฅผ ๋๋ฉด์ ๋ฌด์ธ๊ฐ ๊ฐ์ ๋์ ํ  ๋ ์ฐ๋ ๊ฑฐ๋ค.
        // prev : prev value๋ ์ด์ ์ ์ฝ๋ฐฑํจ์์์ return ๋ ๊ฐ์ด ์ ๋ฌ ๋์ด์ ธ ์ค๊ณ 
        // curr : curr value๋ ๋ฐฐ์ด์ ์์ดํ์ ์์ฐจ์ ์ผ๋ก ์ ๋ฌ ๋ฐ๋๋ค
        // 0 ์ ์์์ ์ด๋ค. 5๋ผ๊ณ  ํ๋ฉด prev๊ฐ 5๋ก ์์ํ๋ฏ๋ก 5๋ฅผ ๋ํ ๊ฐ์ธ 374์ ๊ฐ์ด ๋์จ๋ค.
    console.log(result / students.length); // 73.8 // ํ๊ท ๊ฐ    
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    // mine : ๋ชปํ
      // const result = students.toString();
      // console.log(result.score); //undefined 

    // ellie
    const score = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(score); // 45, 80, 90, 66, 88 (filter ์์ผ๋ฉด) // filter ์ถ๊ฐํ์ฌ 80, 90, 66, 88
    // map์ ์จ์ score๋ง ๋ค์ด์๋ ๋ฐฐ์ด๋ก ๋ง๋ค์ด์ฃผ๊ณ , 
    // filter๋ฅผ ์ฌ์ฉํ์ฌ 50์  ๋๋ ๊ฒ๋ง ์ฐพ์์ฃผ๊ณ ,
    // join์ ์จ์ string์ผ๋ก ๋ง๋ค์ด ์ค๋ค.
    // ์ด๋ฐ์์ผ๋ก ๋ฌถ์ด์ ์์ฑ์ด ๊ฐ๋ฅํ๋ค. (=== ํจ์ํ ํ๋ก๊ทธ๋๋ฐ) : ๊ฐ๋์ฑ๋ ์ข์์ง.
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90' 
  {
    // mine === ellie
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)  // 45,66,80,88,90 // ์์ ์๋ถํฐ ์ ๋ ฌ ascending 
    // a (์ด์  ๊ฐ), b(ํ์ฌ ๊ฐ) : -๋ฅผ returnํ๋ฉด ์ฒซ๋ฒ์งธ๊ฐ ๋ค์ ๊ฒ๋ณด๋ค ์๋ค๊ณ  ๊ฐ์ฃผ๋์ด์ ธ์ ์ ๋ ฌ์ด ๋
    // .sort((a, b) => b - a) // 90,88,80,66,45 // ํฐ ์๋ถํฐ ์ ๋ ฌ descending
    .join();
    console.log(result); // 45,66,80,88,90
    
  }
