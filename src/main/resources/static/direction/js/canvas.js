var canvas = document.querySelector('#canvas');
var WIDTH = document.body.scrollWidth,
    HEIGHT = document.body.scrollHeight || document.documentElement.scrollHeight;
canvas.width = WIDTH;
canvas.height = HEIGHT;
var context = canvas.getContext('2d');
context.fillStyle = 'white';
context.shadowBlur = 15;
context.shadowColor = 'rgb(255, 213, 58)';
var maxR = 5,minR = 1;
var POINT = 100;
var circleArr = [];
function Circle(x,y,r,moveX,moveY) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.moveX = moveX;
    this.moveY = moveY;
}
function drawCircle(ctx,x,y,r) {
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();
}
function num(max,min){
    return (Math.random()*(max-min)+min) | 0
}
function init(){
    context.fillStyle = 'white';
    context.shadowBlur = 15;
    context.shadowColor = 'rgb(255, 213, 58)';
    for(var i=0;i<POINT;i++){
        var circle = new Circle(num(WIDTH, 0), num(HEIGHT, 0), num(maxR, minR), num(10, -10)/40, num(10, -10)/40)
        circleArr.push(circle)
    }
}
function draw() {
    context.fillStyle = 'white';
    context.shadowBlur = 15;
    context.shadowColor = 'rgb(255, 213, 58)';
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < POINT; i++) {
        circleArr[i].x += circleArr[i].moveX;
        circleArr[i].y += circleArr[i].moveY;
        if (circleArr[i].x > WIDTH) {
            circleArr[i].x = 0
        }
        else if (circleArr[i].x < 0) {
            circleArr[i].x = WIDTH
        }
        if (circleArr[i].y > HEIGHT) {
            circleArr[i].y = 0
        }
        else if (circleArr[i].y < 0) {
            circleArr[i].y = HEIGHT
        }

        drawCircle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r)
    }
}
window.onresize = function () {
    canvas.width = document.body.scrollWidth;
    canvas.height = document.body.scrollHeight || document.documentElement.scrollHeight;
}
window.onload = function() {
    init()
    setInterval(function () {
        draw()
    }, 16)
}