class Panel {
  // 分数和等级
  score = 0;
  level = 1;

  // 分数和等级所在的元素
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 最大等级
  maxLevel: number;
  // 升级间隔
  upInterval: number;

  constructor(maxLevel: number = 10, upInterval: number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upInterval = upInterval;
    console.log(this.scoreEle, this.levelEle);
  }

  // 加分
  addScore() {
    this.score++;
    this.scoreEle.innerText = this.score + "";
    // 每十分加一次难度
    this.score % this.upInterval === 0 && this.levelUp();
  }

  // 加难度
  levelUp() {
    if (this.level < this.maxLevel) {
      this.level++;
      this.levelEle.innerText = this.level + "";
    }
  }
}
export default Panel;
