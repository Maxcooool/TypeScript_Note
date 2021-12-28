## 介绍

### 1、什么是TypeScript?

- 以js为基础构建的语言
- 一个js的超级
- 可以在任何支持js的平台执行
- 扩展了js并添加了类型

ts不能直接被js解析器执行！需要编译为js。

### 2、TypeScript增加了什么？

类型

支持ES的新特性

ES中不具备的新特性

丰富的配置选项

- 编译成任意ES版本
- ...

强大的开发工具

## 开发环境搭建

1、下载并安装Node.js

​	  因为ts解析器是用node写的

2、使用npm全局安装typescript

```powershell
npm i -g typescript	
```

3、创建ts文件

4、使用tsc对ts 文件进行编译

- 进入命令行

- 进入ts所在目录

- 执行命令

  ``` powershell
  tsc  xxx.ts
  ```

  如果命令不成功，检查是否全局安装了typescript

## 知识点

### 类型声明

- 在变量声明中使用

  先声明后赋值

  ```js
  // 声明一个变量，同时指定它的类型为 number
  let a: number;
  // a 的类型设置为 number， 之后的使用过程中 a 的值只能是数字
  a = 10;
  ```

  声明后直接赋值

  ```js
  // 声明完直接赋值   ts 会对变量进行类型推断
  let c = false;
  c = true;
  ```

- 在函数声明中使用

  ```js
  // 参数类型声明 & 返回值的类型  在参数括号后添加类型
  function sum(x: number, y: number): number {
    return x + y;
  }
  
  sum(1, 2)
  ```

在控制台 node 文件名可以运行js文件

### 基本类型

| 类型    | 例子              | 描述                           |
| ------- | ----------------- | ------------------------------ |
| number  | 1, -33, 2.5       | 任意数字                       |
| string  | 'hi', "hi"        | 任意字符串                     |
| boolean | true、false       | 布尔值true或false              |
| 字面量  | 其本身            | 限制变量的值就是该字面量的值   |
| any     | *                 | 任意类型                       |
| unknown | *                 | 类型安全的any                  |
| void    | 空值（undefined） | 没有值（或undefined）          |
| never   | 没有值            | 不能是任何值                   |
| object  | {name:'孙悟空'}   | 任意的JS对象                   |
| array   | [1,2,3]           | 任意JS数组                     |
| tuple   | [4,5]             | 元素，TS新增类型，固定长度数组 |
| enum    | enum{A, B}        | 枚举，TS中新增类型             |

- number

  - ```js
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;
    ```

- boolean

  - ```js
    let isDone: boolean = false;
    ```

- string

  - ```js
    let color: string = "blue";
    color = 'red';
    
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.
    
    I'll be ${age + 1} years old next month.`;
    ```

- 字面量

  - 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围

  - ```js
    let color: 'red' | 'blue' | 'black';
    let num: 1 | 2 | 3 | 4 | 5;
    ```

- any

  - ```js
    let d: any = 4;
    d = 'hello';
    d = true;
    
    // any 表示任意类型   相当于TS对该变量关闭了类型检测
    // 显式 any
    let bb: any;
    // 隐式 any  声明时不指定类型
    let cc;
    ```

    不推荐使用any

- unknown

  - ```js
    let notSure: unknown = 4;
    notSure = 'hello';
    
    // unknow 表示未知类型
    let u: unknown;
    u = 1;
    u = "hello";
    u = true;
    ```

- void

  - ```js
    let unusable: void = undefined;
    
    // void 表示空   以函数为例 就是没有返回值的函数
    function noReturn(): void {}
    ```

- never

  ​	void返回空, 但是空也是结果, never就是连空都没有,这是一个哲学的辩证!

  - ```js
    function error(message: string): never {
      throw new Error(message);
    }
    // never  表示永远不会返回结果
    function nothing(): never {
      throw new Error("Error");
    }
    ```

- object（没啥用）

  - ```js
    let obj: object = {}
    ```

- function(没啥用)

  ```js
  let fn2: Function;
  ```

- array

  - ```js
    let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];
    ```

- tuple(固定长度的数组)

  - ```js
    let x: [string, number];
    x = ["hello", 10]; 
    ```

- enum

  - ```js
    enum Color {
      Red,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4,
    }
    let c: Color = Color.Green;
    ```

   *any 和 unkown的区别*

  ```js
  let s: string = "000";
  let any: any = "111";
  let unkown: unknown = "222";
  s = any; // 不提示
  s = unkown; // 提示语法错误
  ```

  *unknow 类型赋值报错的处理*

  ```js
  if (typeof u === "string") {
    s = u;
  }
  // 或者使用类型断言  告诉解析器值的实际类型
  s = u as string;
  // 等价于
  s = <string>u;
  ```

  *限制对象*

  ```js
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
  ```

  *设置函数结构的类型声明(类似箭头函数)*

  ```js
  
  let fn: (a: number, b: number) => number;
  fn = function (x, y) {
    return x + y;
  };
  ```
  
  *类型的别名*
  
  ```js
  // 通过 type 关键字为类型取别名
  type myType = 1 | 2 | 3 | 4 | 5;
  let m1: myType;
  let m2: myType;
  
  m1 = 1;
  m2 = 2;
  ```



### TS编译选项

#### 自动编译文件

编译文件时，使用 -w 指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。

示例：

```cmd
  tsc xxx.ts -w
```

但是一个终端只能监视一个文件，一个项目可能有几十上百个ts文件，这种方式显然不适合日常开发。

#### 自动编译整个项目

如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。

**但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 tsconfig.json**

tsconfig.json是一个JSON文件，添加配置文件后，只需 tsc 命令即可完成对整个项目的编译

生成tsconfig.json :

```powershell
tsc -init
```

在项目拥有JSON配置文件时，使用 

```smd
tsc -w
```

即可完成对所有ts 文件的监视，编译为对应的js文件。



配置选项：

##### **include**

- 定义希望被编译文件所在的目录
- 默认值：["**/*"]

示例：

```json
// include 用于指定 TS 编译器对哪些文件进行编译
// ** 表示任意目录  * 表示任意文件
"include":[
    "./src/**/*"
  ]
```

上述示例中，所有src目录下的文件都会被编译

```json
  "include":["src/**/*", "tests/**/*"]
```

上述示例中，所有src目录和tests目录下的文件都会被编译

##### **exclude**

- 定义需要排除在外的目录
- 默认值：["node_modules", "bower_components", "jspm_packages"]

示例：

```json
  "exclude": ["./src/hello/**/*"]
```

上述示例中，src下hello目录下的文件都不会被编译

##### **extends**

- 定义被继承的配置文件

示例：

```
"extends": "./configs/base"
```

上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息

##### **files**

- 指定被编译文件的列表，**只有需要编译的文件少时才会用到**

示例：

```
"files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
```

- 列表中的文件都会被TS编译器所编译

##### compilerOptions

- 编译选项是配置文件中非常重要也比较复杂的配置选项
- 在compilerOptions中包含多个子选项，用来完成对编译的配置

项目选项：

- target

  - 设置ts代码编译的目标版本

  - 可选值：

    - ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext

  - 示例：

    - ```
      "compilerOptions": {
          "target": "ES6"
      }
      ```

  - 如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码

- lib

  - 指定代码运行时所包含的库（宿主环境）

  - 可选值：

    - ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......

  - 示例：

    - ```
      "compilerOptions": {
          "target": "ES6",
          "lib": ["ES6", "DOM"],
          "outDir": "dist",
          "outFile": "dist/aa.js"
      }
      ```

- module

  - 设置编译后代码使用的模块化系统

  - 可选值：

    - CommonJS、UMD、AMD、System、ES2020、ESNext、None

  - 示例：

    - ```
      "compilerOptions": {
          "module": "CommonJS"
      }
      ```

- outDir

  - 编译后文件的所在目录

  - 默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置

  - 示例：

    - ```
      "compilerOptions": {
          "outDir": "dist"
      }
      ```

    - 设置后编译后的js文件将会生成到dist目录

- outFile

  - 将所有的文件编译为一个js文件

  - 默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中

  - 示例：

    - ```
      "compilerOptions": {
          "outFile": "dist/app.js"
      }
      ```

- rootDir

  - 指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录

  - 示例：

    - ```
      "compilerOptions": {
          "rootDir": "./src"
      }
      ```

- allowJs

  - 是否对js文件编译

- checkJs

  - 是否对js文件进行检查

  - 示例：

    - ```
      "compilerOptions": {
          "allowJs": true,
          "checkJs": true
      }
      ```

- removeComments

  - 是否删除注释
  - 默认值：false

- noEmit

  - 不对代码进行编译
  - 默认值：false

- sourceMap

  - 是否生成sourceMap
  - 默认值：false

- 严格检查

  - strict
    - 启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查
  - alwaysStrict
    - 总是以严格模式对代码进行编译
  - noImplicitAny
    - 禁止隐式的any类型
  - noImplicitThis
    - 禁止类型不明确的this
  - strictBindCallApply
    - 严格检查bind、call和apply的参数列表
  - strictFunctionTypes
    - 严格检查函数的类型
  - strictNullChecks
    - 严格的空值检查
  - strictPropertyInitialization
    - 严格检查属性是否初始化

- 额外检查

  - noFallthroughCasesInSwitch
    - 检查switch语句包含正确的break
  - noImplicitReturns
    - 检查函数没有隐式的返回值
  - noUnusedLocals
    - 检查未使用的局部变量
  - noUnusedParameters
    - 检查未使用的参数

- 高级

  - allowUnreachableCode
    - 检查不可达代码
    - 可选值：
      - true，忽略不可达代码
      - false，不可达代码将引起错误
  - noEmitOnError
    - 有错误的情况下不进行编译
    - 默认值：false