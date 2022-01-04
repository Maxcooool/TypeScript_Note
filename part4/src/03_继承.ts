(function () {
  // 动物类
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    bark() {
      console.log("动物在咆哮~");
    }
  }

  // 定义一个🐕的类  继承 Animal类   extends 有扩展的意思
  // 继承后 Animal 称为 父类 Dog为子类
  // 继承后 子类拥有父类所有的属性和方法
  class Dog extends Animal {
    // 扩展(增加父类中没有实现的方法)
    run() {
      console.log(`${this.name}已经在跑了~`);
    }
    // 重写(实现自己的同名方法)
    bark() {
      console.log("汪汪汪");
    }
  }

  // 定义一个🐱的类  继承 Animal类
  class Cat extends Animal {}

  const dog = new Dog("Wangcai", 2);
  dog.bark();
  dog.run();

  const cat = new Cat("Mimi", 2);
  cat.bark();
})();
