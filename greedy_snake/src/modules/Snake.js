class Snake {
    constructor() {
        this.element = document.getElementById("snake");
        this.head = document.querySelector("#snake > div");
        console.log(this.head, "head >>>?");
        // 这里不用 querySelectorAll 的原因就是 querySelectorAll 获取的是node
        this.bodies = this.element.getElementsByTagName("div");
    }
    // 获取蛇的坐标(蛇头)
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    // 设置坐标;
    set X(value) {
        this.head.style.left = value + "px";
    }
    set Y(value) {
        this.head.style.top = value + "px";
    }
    // 增加身体长度
    grow() {
        // 向element中添加一个div  https://www.jianshu.com/p/112bc211c39e
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }
}
export default Snake;
