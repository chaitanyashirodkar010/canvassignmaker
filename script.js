var c = document.getElementById("exampleCanvas");
var text = "";
var ctx = c.getContext("2d");

c.width  = window.innerWidth;
c.height  = window.innerHeight;
console.log(c);
console.log(window.innerHeight);

function edValueKeyPress(){
    text = document.getElementById("edValue").value;
    draw('180pt Calibri, sans-serif');
}
function draw(fontStyle){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.font = fontStyle;
    ctx.fillStyle = "green"
    ctx.fillText(text, c.width/2 - 50 , c.height/2);
    ctx.font = fontStyle;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeText(text, c.width/2 - 50, c.height/2);
    ctx.stroke();
}

function changeitallic() {
    draw('italic 180pt Calibri, sans-serif');
}