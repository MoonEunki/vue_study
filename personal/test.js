class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
}

// 예전방식
// function Person(name, job) {
//     this.name = name;
//     this.job = job;
//   }

const a = new Person("문은기", "개발자");

console.log(a);
