// 控制器 控制所有其他的类
import Food from "./Food";
import Panel from "./Panel";
import Snake from "./Snake";

class GameControl {
  food: Food;
  panel: Panel;
  snake: Snake;

  // 按键(蛇的移动方向)
  pressKey: string = "ArrowRight";

  constructor() {
    this.food = new Food();
    this.panel = new Panel();
    this.snake = new Snake();
    this.init();
  }

  // 游戏开始
  init() {
    // 绑定键盘事件(注意this指向 document)
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }

  keydownHandler(event: KeyboardEvent) {
    // 检查按键值
    this.pressKey = event.key;
  }

  // 控制蛇移动
  run() {
    // 获取蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;
    // 修改坐标
    switch (this.pressKey) {
      case "ArrowUp":
        Y -= 10;
        break;
      case "ArrowDown":
        Y += 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
    }
    // 应用坐标
    this.snake.X = X;
    this.snake.Y = Y;
    // 开启一个定时调用
    setTimeout(this.run.bind(this), 300);
  }
}

export default GameControl;
