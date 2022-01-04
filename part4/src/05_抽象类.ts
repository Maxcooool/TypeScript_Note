+(function () {
  // 定义一个抽象类
  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // 定义一个抽象方法
    // 定义在抽象类中  没有方法体 子类必须对其重写
    abstract sayHello(): void;
  }

  // 继承抽象类
  class Dog extends Animal {
    // 抽象方法的重写
    sayHello(): void {
      console.log("汪汪汪!");
    }
  }

  class Snack extends Animal {
    sayHello() {
      console.log("nihao ");
    }
  }

  const dog = new Dog("feifei");
  dog.sayHello();
})();
