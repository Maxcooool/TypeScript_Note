class Food {
  // 表示食物对应的元素
  element: HTMLElement;

  constructor() {
    // 获取页面中的 Food 元素并赋值给element
    this.element = document.getElementById("food")!;
  }

  // 获取 x 坐标
  get X() {
    return this.element.offsetLeft;
  }

  // 获取 y 坐标
  get Y() {
    return this.element.offsetTop;
  }

  // 修改位置的方法
  change() {
    //随机位置  游戏区域为 304 * 304
    //   可移动的范围为 [0,294] 减去自身的宽度
    //蛇移动为10  所以随机的位置必须是10的倍数
    // 设置为 [0, 290]
    let left = Math.floor(Math.random() * 30) * 10;
    let top = Math.floor(Math.random() * 30) * 10;

    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

export default Food;
