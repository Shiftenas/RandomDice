class Snake extends Enemy {
    constructor(hp) {
        super(hp);
        this.timer = 0;
    }

    update() {
        this.timer ++;
        if (this.timer > 600) {
            
        }
    }
}