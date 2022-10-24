"use strict";
// 字面量
let aa;
aa = 123;
// any 表示任意类型   相当于TS对该变量关闭了类型检测
// 显式 any
let bb;
// 隐式 any  声明时不指定类型
let cc;
// unknow 表示未知类型
// let u: unknown;
// u = 1;
// u = "hello";
// u = true;
// any 和 unkown的区别
let s = "000";
let u = "222";
// s = u; // 提示语法错误
if (typeof u === "string") {
    s = u;
}
// 或者使用类型断言
s = u;
// 等价于
s = u;
// void 表示空   以函数为例 就是没有返回值的函数
function noReturn() { }
// never  表示永远不会返回结果
function nothing() {
    throw new Error("Error");
}
