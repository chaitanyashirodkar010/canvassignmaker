var c = document.getElementById("exampleCanvas");
var text = "";
var ctx = c.getContext("2d");

c.width  = window.innerWidth;
c.height  = window.innerHeight;
console.log(c);
console.log(window.innerHeight);

function edValueKeyPress(){
    text = document.getElementById("edValue").value;
    draw();
}

// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.lineTo(300, 400);
// ctx.lineTo(40, 40);
// ctx.lineTo(700, 100);
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(c.width/2, c.height/2, 40, 0, 2 * Math.PI);
// ctx.stroke();
function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.font = "120px Arial";
    ctx.fillStyle = "green"
    ctx.fillText(text, c.width/2 - 50 , c.height/2);
    ctx.font = "120px Arial";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeText(text, c.width/2 - 50, c.height/2);
    ctx.stroke();
}
