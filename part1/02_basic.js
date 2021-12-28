// 声明一个变量，同时指定它的类型为 number
var a;
// a 的类型设置为 number， 之后的使用过程中 a 的值只能是数字
a = 10;
// a = "hello"; // 代码会报错 但是默认可以编译通过
// 声明完直接赋值   ts 会对变量进行类型推断
var c = false;
c = true;
// c = 3;
// js 中的函数不考虑参数类型和个数
function sum(x, y) {
  return x + y;
}
console.log(sum(111, "222"));
