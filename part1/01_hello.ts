console.log("hello typescript!");
(function () {
  enum Color {
    Red,
    Green,
  }

  console.log(Color, "zzz");

  class Student {
    constructor(public name: string, public age: number) {}

    sayHi() {
      let hiString: string = `Hello, my name is ${this.name}.\nI'll be ${
        this.age + 1
      } years old next month.`;
      console.log(hiString);
    }
  }

  let s = new Student("XiaoHu", 12);
  s.sayHi();
})();
