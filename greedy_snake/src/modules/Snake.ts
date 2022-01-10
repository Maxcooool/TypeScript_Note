class Snake {
  // 容器
  element: HTMLElement;
  // 蛇头
  head: HTMLElement;
  // 蛇(包含蛇头)
  // HTMLCollection 是活的 一旦文档发生变化就会随之改变
  bodies: HTMLCollection;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div")!;
    // 这里不用 querySelectorAll 的原因就是 querySelectorAll 获取的是node
    this.bodies = this.element.getElementsByTagName("div")!;
  }

  // 获取蛇的坐标(蛇头)
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  // 设置坐标;
  set X(value: number) {
    this.head.style.left = value + "";
  }
  set Y(value: number) {
    this.head.style.top = value + "";
  }

  // 增加身体长度
  grow() {
    // 向element中添加一个div  https://www.jianshu.com/p/112bc211c39e
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}

export default Snake;
