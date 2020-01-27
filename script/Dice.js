class Dice {
    constructor(spot, level) {
        this.spot = spot;
        this.state = classic;
    }

    merge(other) {
        return new Dice(this.spot + 1);
    }

    onMerge(other) {

    }

}