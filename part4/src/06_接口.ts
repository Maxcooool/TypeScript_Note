(function () {
  // 描述一个对象的类型
  type myType = {
    name: string;
    age: number;
  };

  // 接口 定义类的结构  定义一个类中包含哪些属性和方法
  // 也可以当成类型声明去使用
  interface myInterface {
    name: string;
    age: number;
  }

  // 接口可以声明多个  同名接口会进行合并  type 不行只能声明一次
  interface myInterface {
    gender: string;
  }

  const obj: myInterface = {
    name: "xiaoming",
    age: 2,
    gender: "male",
  };

  /**
   * 接口可以在声明的时候限制类的结构
   * 接口中只类型, 不考虑实际值
   * 接口中的方法都是抽象方法
   *
   */

  interface PersonNeed {
    name: string;
    hi(): void;
  }

  /**
   * 定义类的时候, 可以让类去实现一个接口
   */
  class Person implements PersonNeed {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    hi(): void {
      console.log("hi");
    }
  }
})();
