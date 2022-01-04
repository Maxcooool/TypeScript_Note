(function () {
  class Person {
    public name: string;
    private _age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this._age = age;
    }

    // 设置私有属性后  向外界暴露获取私有属性和修改私有属性的方法
    // 我们称之为 属性的存取器  这能间接修改  主动权在我们这里
    // getAge() {
    //   return this.age;
    // }

    // setAge(value: number) {
    //   if (value >= 0) {
    //     this.age = value;
    //   } else {
    //     throw new Error("年龄不能为负数");
    //   }
    // }
    get age() {
      console.log("调用了 getter");
      return this._age;
    }

    set age(value: number) {
      console.log("调用了 setter");
      if (value >= 0) {
        this._age = value;
      } else {
        throw new Error("年龄不能为负数");
      }
    }
  }

  const per = new Person("xiaoming", 2);
  // 可以直接通过 .属性名访问 但是事实上调用了 age()
  console.log(per.age);
  // 修改类似
  per.age = 999;
  console.log(per); //  {name: 'xiaoming', _age: 999}

  class Father {
    protected _name: string;
    constructor(name: string) {
      this._name = name;
    }
  }

  class Son extends Father {
    hi() {
      // protected 代表可以在子类中访问
      console.log(this._name);
    }
  }

  const son = new Son("小明");

  // 类声明属性的简写
  class Shorthand {
    constructor(public name: string, public age: number) {}
  }

  const short = new Shorthand("xiaoming", 19);
  console.log(short); //{name: 'xiaoming', age: 19}
})();
