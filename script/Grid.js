class Grid {
    constructor(grid_width, grid_height, ctx) {
        this.money = 100;
        this.nextDice = 10;
        this.grid = []
        this.wave = 1;
        this.enemies = [];
        this.enemyHP = 100;
        for (let i = 0; i < grid_height; i ++) {
            let row = [];
            for (let j = 0; j < grid_width; j ++) {
                row.push(null);
            }
            this.grid.push(row);
        }
        this.startx = ctx.canvas.width / 2 - (grid_width - 1) * 20;
        this.starty = ctx.canvas.height - 40 - grid_height * 40;
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
        this.enemies.push(new Ennemy(this.enemyHP));
    }

    draw() {
        let y = this.starty;
        for (let i = 0; i < this.grid.length; i ++) {
            let x = this.startx;
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] != null) {
                    this.grid[i][j].draw(x, y);
                }
                x += 40;
            }
            y += 40;
        }
    }
}