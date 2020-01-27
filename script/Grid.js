class Grid {
    constructor() {
        this.money = 100;
        this.nextDice = 10;
        this.grid = []
        this.wave = 1;
        this.enemies = [];
        this.enemyHP = 100;
        for (let i = 0; i < 3; i ++) {
            let row = [];
            for (let j = 0; j < 5; j ++) {
                row.push(null);
            }
            this.grid.push(row);
        }
    }

    update() {
        for (let i = 0; i < this.grid.length; i ++) {
            for (let j = 0; j < this.grid[i].length; j ++) {
                if (this.grid[i][j].remove) this.grid[i][j] = null;
            }
        }
    }

    checkFull() {
        for (let i = 0; i < this.grid.length; i ++) {
            for (let j = 0; j < this.grid[i].length; j ++) {
                if (this.grid[i][j] == null) return false;
            }
        }
        return true;
    }
    

    spawnDice() {
        if (! this.checkFull()) {
            this.money -= this.nextDice;
            this.nextDice += 10;
            let x = Math.floor(Math.random() * 5);
            let y = Math.floor(Math.random() * 3);
            while (this.grid[x][y]) {
                let x = Math.floor(Math.random() * 5);
                let y = Math.floor(Math.random() * 3);
            }
            this.grid[x][y] = newDice();
        }
    }

    spawnEnemy() {
        this.enemies.push(new Ennemy(this.enemyHP))
    }
}