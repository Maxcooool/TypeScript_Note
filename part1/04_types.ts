// object 表示一个对象
let o: object;
o = {};
o = function () {};

// 事实上, 我们更想限制的是对象中的属性  注意是 :   不是 =
// 在属性后加上问号 表示可选
let o2: {
  name: string;
  age?: number;
};

o2 = {
  name: "xiaomei",
  age: 12,
};

// 如果只需要某个属性值 不关心其他类型
// [propName: string]: any 表示对其余对象键值对的限制  propName是任意取的变量名  此处我们限制其为string 事实上js对象的键都是字符串类型  对值的限制为any 可以是任何类型
let o3: {
  id: number;
  [propName: string]: any;
};

o3 = {
  id: 2,
  age: "ss",
  tall: true,
};

// 设置函数结构的类型声明  (类似箭头函数)
let fn: (a: number, b: number) => number;
fn = function (x, y) {
  return x * y;
};

let fn2: Function;

// 数组的声明
// 字符串数组
let array1: string[];
let array2: Array<string>;

// 元组  长度固定的数组
let tuple1: [number, string];
tuple1 = [1, "2"];

// 枚举类型
enum Gender {
  male,
  female,
}

let person: {
  name: string;
  gender: Gender;
};

person = {
  name: "xiaoming",
  gender: Gender.male,
};

// & 表示同时
let j: { name: string } & { age: number };

j = {
  name: "sdasd",
};

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let m1: myType;
let m2: myType;

m1 = 1;
m2 = 2;
