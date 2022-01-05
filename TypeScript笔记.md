##  介绍

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

## 注意事项

ts会校验全局下有没有重复的变量名

可以在ts文件中使用立即执行函数创建局部作用域, 从而使用同名变量

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



### TS打包

#### webpack整合

通常情况下，实际开发中我们都需要使用构建工具对代码进行打包；

TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS；

步骤如下：

##### 初始化项目

进入项目根目录，执行命令 `npm init -y`，创建package.json文件

##### 下载构建工具

先安装四个包

```
npm i -D webpack webpack-cli typescript ts-loader
```





命令如下：

```
npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin
```

共安装了7个包:

- webpack：构建工具webpack

- webpack-cli：webpack的命令行工具

- webpack-dev-server：webpack的开发服务器

  安装后可以将代码热更新到浏览器

  在package.json中添加指令

  ```
  "serve": "webpack serve --open chrome.exe"
  ```

  

- typescript：ts编译器

- ts-loader：ts加载器，用于在webpack中编译ts文件

- html-webpack-plugin：webpack中html插件，用来自动创建html文件

  一个完整的项目必然会有index.html，我们可以手动添加并引入js，但是不够优雅，如果webpack能帮我们自动生成html并处理js，css的资源引入就再好不过了，于是**html-webpack-plugin**诞生了！

- clean-webpack-plugin：webpack中的清除插件，每次构建都会先清除目录

  现在不需要这个插件了  webpack 5.20.0以上  output中添加clean：true即可

##### 配置webpack

根目录下创建webpack的配置文件`webpack.config.js`：

```json
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
   optimization:{
       minimize: false // 关闭代码压缩，可选
   },
	
   entry: "./src/index.ts",

   devtool: "inline-source-map",

   devServer: {
       contentBase: './dist'
   },
	
	//  path.resolve() 作用参考cd命令 可拼接多个path 从左到右一次cd
    // 参考: https://blog.csdn.net/kikyou_csdn/article/details/83150538
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js",
       environment: {
           arrowFunction: false // 关闭webpack的箭头函数，可选
       }
   },

   resolve: {
       extensions: [".ts", ".js"]
   },

   module: {
       rules: [
           {
               test: /\.ts$/,
               use: {
                   loader: "ts-loader"     
               },
               exclude: /node_modules/
           }
       ]
   },

   plugins: [
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
           title:'TS测试'
       }),
   ]
}
```

##### 配置TS编译选项

根目录下创建tsconfig.json，配置可以根据自己需要

```
{
   "compilerOptions": {
       "target": "ES2015",
       "module": "ES2015",
       "strict": true
   }
}
```

##### 修改package.json配置

修改package.json添加如下配置

```
{
   ...
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "build": "webpack",
       "start": "webpack serve --open chrome.exe"
   },
   ...
}
```

##### 项目使用

在src下创建ts文件，并在并命令行执行`npm run build`对代码进行编译；

或者执行`npm start`来启动开发服务器；



##### 步骤小结

初始化项目

```
npm init -y
```

安装依赖

配置webpack   webpack.config.js

配置ts编译器    tsconfig.js

配置npm（package.json）   添加build命令   指定webpack作为打包工具



#### Babel

除了webpack，开发中还经常需要结合babel来对代码进行转换；

以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中；

> 虽然TS在编译时也支持代码转换，但是只支持简单的代码转换；
>
> 对于例如：Promise等ES6特性，TS无法直接转换，这时还要用到babel来做转换；

安装依赖包：

```
npm i -D @babel/core @babel/preset-env babel-loader core-js
```

共安装了4个包，分别是：

- @babel/core：babel的核心工具

- @babel/preset-env：babel的预定义环境

  预置了不同的浏览器环境，在任一浏览器环境下都能转换出对应的语法

- @babel-loader：babel在webpack中的加载器

- core-js：core-js用来使老版本的浏览器支持新版ES语法

修改webpack.config.js配置文件

```
// 引入一个包
const path = require("path");
// HTML auto generator plugins
const HTMLWebpackPlugin = require("html-webpack-plugin");

// webpack 所有配置都应该写在这里
module.exports = {
  mode: "production",
  // 指定入口文件
  entry: "./src/index.ts",

  // 打包后的文件配置
  output: {
    //  path.resolve() 作用参考cd命令 可拼接多个path 从左到右一次cd
    // 参考: https://blog.csdn.net/kikyou_csdn/article/details/83150538
    path: path.resolve(__dirname, "dist"),
    // 打包后的文件名
    filename: "bundle.js",
    // 打包前先清空
    clean: true,
    // 不使用箭头函数
    environment: {
      arrowFunction: false,
    },
  },

  // 指定 webpack 打包时用到的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // 正则表达式 规则生效的文件
        test: /\.ts$/,
        // 对上述文件进行处理的模块
        use: [
          // 配置 babel
          {
            // 指定加载器
            loader: "babel-loader",
            options: {
              //   设置预定义的环境,
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的浏览器 >=
                    targets: {
                      //   chrome: "69",
                      ie: "11",
                    },
                    // corejs 版本
                    corejs: "3",
                    // 使用 corejs 的方式  usage 表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        // 排除的文件
        exclude: /node_modules/,
      },
    ],
  },

  // 指定使用的插件
  plugins: [
    new HTMLWebpackPlugin({
      //   title: "自定义的html标题",
      // 或者引入模板
      template: "./src/index.html",
    }),
  ],

  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};

```

如此一来，使用ts编译后的文件将会再次被babel处理；

使得代码可以在大部分浏览器中直接使用；

同时可以在配置选项的targets中指定要兼容的浏览器版本；



### 面向对象

要想面向对象，操作对象，首先便要拥有对象；

要创建对象，必须要先定义类，所谓的类可以理解为对象的模型；

程序中可以根据类创建指定类型的对象；

举例来说：

可以通过Person类来创建人的对象，通过Dog类创建狗的对象，不同的类可以用来创建不同的对象；

#### 1、定义类

```js
class 类名 {
    属性名: 类型 = 属性值;  
    方法名(){
        ....
    }
}
```

示例：

```js
// 使用class关键字定义类
class Person {
  // 定义实例属性 通过对象的实例访问
  name: string = "MonkeyKing";
  age: number = 18;
  // 使用static关键字 定义类属性（静态属性）通过类直接访问
  static height: number = 24;

  // readonly 表示只读 不能修改
  readonly air = "long";
  // 静态只读属性  注意关键字顺序不能变
  static readonly xixi = "xixi";

  // 实例方法
  sayHello() {
    console.log("hello");
  }

  // 静态方法
  static hola() {
    console.log("我是静态方法");
  }
}
```

使用类：

```js
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

```

#### 2、构造函数

为什么需要构造函数?

```js
class Dog {
  name = "旺财";
  age = 12;

  bark() {
    alert("汪汪汪");
  }
}

const dog = new Dog();
const dog2 = new Dog();
const dog3 = new Dog();
console.log(dog);
console.log(dog2);
console.log(dog3);
```

上述代码确实能创建 Dog 类的实例,但是创建出来的实例对象拥有相同的实例属性, 这样 Dog 类就没有太大意义, 我们想要的是不一样的狗! 

但是如何实现呢? 要明确以下几点

- 不能在类中直接定义属性值

  因为在一旦在类中写死了属性, 那所有实例化对象都会拥有一样的属性

- 从外界传值 在new的时候为实例对象分配传入的值

所以构造函数来啦!

可以使用`constructor`定义一个构造器方法；

> **注1：在TS中只能有一个构造器方法！**

例如：

```js
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
dog2.bark();   // {name: '小白', age: 2}
```

总结: 

在**类中**定义属性, 在**构造函数中**接受new时传递进来的参数为属性赋值!

#### 3、继承

##### 定义

继承时面向对象中的又一个特性

通过继承可以将其他类中的属性和方法引入到当前类中

继承的必要性：

```js
 // 定义一个🐕的类
  class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    bark() {
      console.log("汪汪汪!");
    }
  }

  // 定义一个🐱的类
  class Cat {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    bark() {
      console.log("喵喵喵!");
    }
  }

  const dog = new Dog("Wangcai", 2);
  dog.bark();

  const cat = new Cat("Mimi", 2);
  cat.bark();
```

在Dog和Cat类中有大量重复的代码，是否可以提取来成为公共的部分呢？可以抽象出一个动物类，让猫狗类继承动物类中的属性在进行自己的扩展

示例：

```js
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    
    bark() {
    	console.log("动物在咆哮");
    }
}

// 定义一个🐕的类  继承 Animal类   extends 有扩展的意思
// 继承后 Animal 称为 父类 Dog为子类
// 继承后 子类拥有父类所有的属性和方法
class Dog extends Animal {
    // 扩展
    run() {
    	console.log(`${this.name}已经在跑了~`);
    }
    // 重写
    bark() {
    	console.log("汪汪汪");
    }
}
```

通过继承可以在不修改类的情况下完成对类的扩展

##### super

```js
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
```

##### 抽象类

> 以abstact开头的类是抽象类
>
> 抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例
>
> 和其他类的区别不大, 只是不能用来创建对象
>
> 抽象类中可以定义抽象方法(继承后必须进行重写的方法)

```js
+(function () {
  // 定义一个抽象类
  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // 定义一个抽象方法
    // 定义在抽象类中  没有方法体 子类必须对其重写
    abstract sayHello(): void;
  }

  // 继承抽象类
  class Dog extends Animal {
    // 抽象方法的重写
    sayHello(): void {
      console.log("汪汪汪!");
    }
  }

  const dog = new Dog("feifei");
  dog.sayHello();
})();
```

使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现;

#### 4、接口

```js
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

const obj: myInterface = {
  name: "xiaoming",
  age: 2,
};

```

type 和 interface 的区别

```js
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
```

接口可以在声明的时候限制类的结构

```js
/**
   * 接口可以在声明的时候限制类的结构
   * 接口中只类型, 不考虑实际值
   * 接口中的方法都是抽象方法
   */
  interface PersonNeed {
    name: string;
    hi(): void;
  }

  /**
   * 定义类的时候, 可以让类去实现一个接口
   * 使用 implements 关键字
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
```

说白了，接口就是一个**规范**！

接口和抽象类的主要区别：

- 抽象类中可以是抽象方法，也可以是普通方法， 但是接口只能是抽象方法
- 抽象类是通过extends限制子类， 接口是类通过 implements 实现规范

#### 5、属性的封装

```js
(function () {
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const per = new Person("xiaoming", 18);
  // 不加限制的属性 是十分不安全的 可以随意修改
  per.name = "ccc";
  per.age = 122;
  console.log(per); // {name: 'ccc', age: 122}
})();

```



对象实质上就是属性和方法的容器，它的主要作用就是存储属性和方法，这就是所谓的封装

默认情况下，对象的属性是可以任意的修改的，为了确保数据的安全性，在TS中可以对属性的权限进行设置

- 静态属性（static）：
  - 声明为static的属性或方法不再属于实例，而是属于类的属性；
- 只读属性（readonly）：
  - 如果在声明属性时添加一个readonly，则属性便成了只读属性无法修改
- TS中属性具有三种修饰符：
  - public（默认值），可以在类、子类和对象中修改
  - protected ，可以在类、子类中修改
  - private ，只能在类中修改

示例：

#####public

> public（默认值），可以在类、**子类和对象中修改**

```js
class Person{
    public name: string; // 写或什么都不写都是public
    public age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以在类中修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{
    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 可以通过对象修改
```

#####protected

> 可以在类、子类中修改

```js
class Person{
    protected name: string;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this._name = name; //子类中可以修改
    }
    
     hi() {
      // 可以在子类中访问
      console.log(this._name);
    }
}

const p = new Employee('孙悟空', 18);
p._name = '猪八戒';// 不能修改
```

#####private

> 只能在类中修改

```js
class Person{
    private _name: string;

    constructor(name: string, age: number){
        this._name = name; // 可以修改
        this.age = age;
    }
}

class Employee extends Person{
    constructor(name: string, age: number){
        super(name, age);
        this._name = name; //子类中不能修改
    }
}

const p = new Person('孙悟空', 18);
p._name = '猪八戒';// 不能修改
```

类声明的等价语法糖: 

```js
  // 类声明属性的简写
  class Shorthand {
    constructor(public name: string, public age: number) {}
  }

  const short = new Shorthand("xiaoming", 19);
  console.log(short); //{name: 'xiaoming', age: 19}
```





#### 6、属性存取器

对于一些不希望被任意修改的属性，可以将其设置为private

直接将其设置为private将导致无法再通过对象修改其中的属性

我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器

读取属性的方法叫做setter方法，设置属性的方法叫做getter方法

js的实现: 

```js
 class Person {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // 设置私有属性后  向外界暴露获取私有属性和修改私有属性的方法
    // 我们称之为 属性的存取器  这能间接修改  主动权在我们这里
    getAge() {
      return this.age;
    }

    setAge(value: number) {
      if (value >= 0) {
        this.age = value;
      } else {
        throw new Error("年龄不能为负数");
      }
    }
  }

  const per = new Person("xiaoming", 18);
  per.setAge(-1);

```

TS 属性存取器语法糖设置存取方法:

```js
class Person {
    public name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }

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
```



### 泛型

定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定）；

此时泛型便能够发挥作用；

举个例子：

```js
function test(arg: any): any{
    return arg;
}
```

上例中，test函数有一个参数类型不确定，但是能确定的时其返回值的类型和参数的类型是相同的；

由于类型不确定所以参数和返回值均使用了any，但是很明显这样做是不合适的：

首先使用any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值是相同的类型；

#### 泛型函数

##### 创建泛型函数

```js
function test<T>(arg: T): T{
    return arg;
}
```

这里的`<T>`就是泛型；

T是我们给这个类型起的名字（不一定非叫T），设置泛型后即可在函数中使用T来表示该类型；

所以泛型其实很好理解，就表示某个类型；

那么如何使用上边的函数呢？

##### 使用泛型函数

##### 方式一（直接使用）：

```js
test(10)
```

使用时可以直接传递参数使用，类型会由TS自动推断出来，但有时编译器无法自动推断时还需要使用下面的方式

##### 方式二（指定类型）：

```js
test<number>(10)
```

也可以在函数后手动指定泛型；

##### 函数中声明多个泛型

可以同时指定多个泛型，泛型间使用逗号隔开：

```js
function test<T, K>(a: T, b: K): K{
  return b;
}

test<number, string>(10, "hello");
```

使用泛型时，完全可以将泛型当成是一个普通的类去使用；

#### 泛型继承

除此之外，也可以对泛型的范围进行约束

```js
interface inter {
  length: number;
}
// 约束泛型  inter是T必须实现的类或者说子类
function fn3<T extends inter>(a: T): number {
  return a.length;
}

fn3({ length: 2 });
fn3("12312");
fn3(123); //error
```

使用T extends MyInter表示泛型T必须是MyInter的子类，不一定非要使用接口类和抽象类同样适用；

#### 泛型类

类中同样可以使用泛型：

```js
// 在类中使用泛型
class Student<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

const s = new Student<string>("小红");
```



## 演练场——贪吃蛇

### 搭建

直接把之前的webpack配置拿过来，当然之前只是配置了TS打包为JS，实际项目还需要css打包、图片打包等相关webpack配置，当前项目不涉及图片，下面介绍less的webpack配置准备

安装依赖：

```cmd
npm i -D less less-loader css-loader style-loader
```

rules中加入以下配置

```json
module：{
	rules:[
	...,
	{
        test: /\.less/,
        use: [
          // 注意顺序是从下往上进行处理  less-loader -> css-loader -> style-loader
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
	]
}
```

加入后，写一些代码测试 新建src——style——index.less   书写样式后，在src-index.ts中引入, 并执行 npm run serve查看效果

