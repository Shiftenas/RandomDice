class Projectile {
    constructor(damage, effect, target, speed) {
        this.damage = damage;
        this.effect = effect;
        this.target = target;
        this.speed = speed;                        
    }

    update() {
        let [x, y] = target.toPoint();
    }

    onHit() {
        this.target.hp -= this.damage;
        if (!this.target.effected.include(this.effect)) this.target.effected.puh(this.effect);
    }
}