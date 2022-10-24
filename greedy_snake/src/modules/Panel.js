class Panel {
    constructor(maxLevel = 10, upInterval = 10) {
        // 分数和等级
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.getElementById("score");
        this.levelEle = document.getElementById("level");
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
