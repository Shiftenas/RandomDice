class Wind extends Dice {
    constructor(spot, level) {
        super(spot);
        this.color = "#01ABDF";
        this.image = new Image()
        this.image.src = "img/wind.png"
        this.canMerge = {
            Wind : true,
        };
        this.type = "Wind"
        this.damage = 10 + level * 2;
        this.shootspeed = 300 - level * 5;
        this.remove = false;
    }

    merge(other) {
        this.spot ++;
        return this;
    }

    onMerge(other) {
        if (other.type == this.type) {
            other.merge();
            this.remove = true;
        }
    }
}