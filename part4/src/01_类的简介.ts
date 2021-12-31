// 使用class关键字定义类
class Person {
  // 定义实例属性 通过对象的实例访问
  name: string = "MonkeyKing";
  age: number = 18;
  // 使用static关键字 定义类属性（静态属性）通过类直接访问
  static height: number = 24;

  // readonly 表示只读 不能修改
  readonly air = "long";

  // 实例方法
  sayHello() {
    console.log("hello");
  }

  // 静态方法
  static hola() {
    console.log("我是静态方法");
  }
}

const xiaoming = new Person();
console.log(xiaoming);
console.log(xiaoming.name, xiaoming.age);

console.log(Person.height);
// console.log(Person.age); // error
// console.log(xiaoming.height); //error
console.log(xiaoming.air);
// xiaoming.air = "short";
// console.log(xiaoming.air);

xiaoming.sayHello();

Person.hola();
