// super adj. 超级的;   我们的父类也叫超类

+(function () {
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log("动物在叫~");
    }
  }

  class Dog extends Animal {
    // 新增属性
    age: number;

    constructor(name: string, age: number) {
      // 为新增属性赋值前必须调用 super 并传参以初始化父类属性
      // 因为子类实现自己的constructor时  相当于重写了父类的 constructor 父类中的赋值操作被覆盖了
      super(name);
      this.age = age;
    }

    sayHello(): void {
      // 子类的方法中调用父类的方法
      // super 就是父类
      super.sayHello();
    }
  }

  const dog = new Dog("feifei", 2);
  dog.sayHello();
})();
