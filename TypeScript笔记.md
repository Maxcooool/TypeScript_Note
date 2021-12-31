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

#### 定义类

```
class 类名 {
    属性名: 类型;
    
    constructor(参数: 类型){
        this.属性名 = 参数;
    }
    
    方法名(){
        ....
    }

}
```

示例：

```
    class Person{
        name: string;
        age: number;
    
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
    
        sayHello(){
            console.log(`大家好，我是${this.name}`);
        }
    }
```

使用类：

```
const p = new Person('孙悟空', 18);
p.sayHello();
```

#### 构造函数

可以使用`constructor`定义一个构造器方法；

> **注1：在TS中只能有一个构造器方法！**

例如：

```
class C{
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```

同时也可以直接将属性定义在构造函数中：

```
class C {
    constructor(public name: string, public age: number) {
    }
}
```

上面两种定义方法是完全相同的！

**注2：子类继承父类时，必须调用父类的构造方法（如果子类中也定义了构造方法）！**

例如：

```
class A {
    protected num: number;
    constructor(num: number) {
        this.num = num;
    }
}

class X extends A {
    protected name: string;
    constructor(num: number, name: string) {
        super(num);
        this.name = name;
    }
}
```

如果在X类中不调用`super`将会报错！

#### 封装

对象实质上就是属性和方法的容器，它的主要作用就是存储属性和方法，这就是所谓的封装

默认情况下，对象的属性是可以任意的修改的，为了确保数据的安全性，在TS中可以对属性的权限进行设置

- 静态属性（static）：
  - 声明为static的属性或方法不再属于实例，而是属于类的属性；
- 只读属性（readonly）：
  - 如果在声明属性时添加一个readonly，则属性便成了只读属性无法修改
- TS中属性具有三种修饰符：
  - public（默认值），可以在类、子类和对象中修改
  - protected ，可以在类、子类中修改
  - private ，可以在类中修改

示例：

public：

```
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

protected：

```
class Person{
    protected name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
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
p.name = '猪八戒';// 不能修改
```

private：

```
class Person{
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中不能修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 不能修改
```

#### 属性存取器

对于一些不希望被任意修改的属性，可以将其设置为private

直接将其设置为private将导致无法再通过对象修改其中的属性

我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器

读取属性的方法叫做setter方法，设置属性的方法叫做getter方法

示例：

```
class Person{
    private _name: string;

    constructor(name: string){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

}

const p1 = new Person('孙悟空');
// 实际通过调用getter方法读取name属性
console.log(p1.name);
// 实际通过调用setter方法修改name属性 
p1.name = '猪八戒'; 
```

#### 静态属性

静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用

静态属性（方法）使用static开头

示例：

```
class Tools{
    static PI = 3.1415926;
    
    static sum(num1: number, num2: number){
        return num1 + num2
    }
}

console.log(Tools.PI);
console.log(Tools.sum(123, 456));
```

#### this

在类中，使用this表示当前对象

#### 继承

继承时面向对象中的又一个特性

通过继承可以将其他类中的属性和方法引入到当前类中

示例：

```
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal{

    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }
}

const dog = new Dog('旺财', 4);
dog.bark();
```

通过继承可以在不修改类的情况下完成对类的扩展

#### 重写

发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写

示例：

```
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    run(){
        console.log(`父类中的run方法！`);
    }
}

class Dog extends Animal{

    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }

    run(){
        console.log(`子类中的run方法，会重写父类中的run方法！`);
    }
}

const dog = new Dog('旺财', 4);
dog.bark();
```

**在子类中可以使用super来完成对父类的引用**

#### 抽象类（abstract class）

抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例

```
abstract class Animal{
  abstract run(): void;
  bark(){
      console.log('动物在叫~');
  }
}

class Dog extends Animals{
  run(){
      console.log('狗在跑~');
  }
}
```



使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现;