// 控制器 控制所有其他的类
import Food from "./Food";
import Panel from "./Panel";
import Snake from "./Snake";

class GameControl {
  food: Food;
  panel: Panel;
  snake: Snake;

  constructor() {
    this.food = new Food();
    this.panel = new Panel();
    this.snake = new Snake();
  }
}

export default GameControl;
