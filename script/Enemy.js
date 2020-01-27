class Enemy {
    constructor(hp, speed) {
        this.hp = hp;
        this.pos = 0;
        this.effected = [];
        this.speed = speed;
    }

    update() {
        this.pos += this.speed / 10;
    }

    toPoint() {
        if (pos < 25) {
            return []
        }
    }

    onDeath() {
        
    }
}