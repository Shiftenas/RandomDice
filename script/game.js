let dice = new Wind(1);
let hold = false;
let posx = 100, posy = 100;
let mousex = 0, mousey = 0;

console.log(dice.type)


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    if (hold) {
        posx += mousePos.x - mousex;
        posy += mousePos.y - mousey;
        mousex = mousePos.x;
        mousey = mousePos.y;
    }
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    //console.log(canvas, message);
}, false);

canvas.addEventListener('mousedown', function mouseState(e) {
    let pos = getMousePos(canvas, e);
    mousex = pos.x;
    mousey = pos.y;
    hold = true;
});

canvas.addEventListener('mouseup', function mouseState(e) {
    hold = false;
});

function drawBackground() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function update() {
    drawBackground();
    if (hold) {
        ctx.fillStyle = "#ff0000";
    }
    else {
        ctx.fillStyle = "#00ffff";
    }
    ctx.fillRect(posx, posy, 200, 200);
    setTimeout(function() {update()}, 1000 / 60);
}

update();