// class Dog {
//   name = "旺财";
//   age = 12;

//   bark() {
//     alert("汪汪汪");
//   }
// }

// const dog = new Dog();
// const dog2 = new Dog();
// const dog3 = new Dog();
// console.log(dog);
// console.log(dog2);
// console.log(dog3);

class Dog {
  name: string;
  age: number;

  // constructor 构造函数
  // 构造函数会在对象创建时调用(每次都会)
  // new Dog(参数) 就相当于调用 constructor(参数)
  constructor(name: string, age: number) {
    // 实例方法中的 this 指向当前的实例
    // 在构造函数中 当前对象就是新建的那个对象
    // 可以通过 this 向新建的对象中添加属性
    this.name = name;
    this.age = age;
  }

  bark() {
    // 实例方法中 this 指向调用者
    console.log(this);
  }
}

const dog = new Dog("小黑", 1);
const dog2 = new Dog("小白", 2);
dog2.bark();
