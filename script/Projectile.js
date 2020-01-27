class Projectile {
    constructor(damage, effect, target) {
        this.damage = damage;
        this.effect = effect;
        this.target = target;
    }

    update() {

    }

    onHit() {
        this.target.hp -= this.damage;
        if (!this.target.effected.include(this.effect)) this.target.effected.puh(this.effect);
    }
}