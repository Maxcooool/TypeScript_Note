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
      // 设置less的处理
      {
        test: /\.less/,
        use: [
          // 注意顺序是从下往上进行处理  less-loader -> css-loader -> style-loader
          "style-loader",
          "css-loader",
          // 引入 postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // 兼容所有浏览器最新的两个版本
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
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
