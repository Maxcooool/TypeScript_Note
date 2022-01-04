// function fn(a: any): any {
//   return a;
// }

/**
 *  在定义函数或者类的时候 有不清楚的类型就可以使用泛型
 *  需要在函数定义时 定义代表泛型的变量  常用 T
 */

function fn<X>(a: X): X {
  return a;
}

// 泛型的使用
// 不指定泛型  ts会自动推断
let a = fn("hello");
// 指定泛型  可能某个类型十分复杂 ts不能推断出来
let a2 = fn<Number>(123);

// 多个泛型
function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}

let res = fn2<string, number>("1", 2);

interface inter {
  length: number;
}
// 约束泛型  inter是T必须实现的类或者说子类
function fn3<T extends inter>(a: T): number {
  return a.length;
}

fn3({ length: 2 });
fn3("12312");
// fn3(123); //error

// 在类中使用泛型
class Student<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

const s = new Student<string>("小红");
