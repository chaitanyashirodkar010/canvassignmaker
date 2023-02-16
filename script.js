// var c = document.getElementById("exampleCanvas");
// var text = "";
// var context = c.getContext("2d");

// c.width  = window.innerWidth;
// c.height  = window.innerHeight;
// console.log(c);
// console.log(window.innerHeight);

// function edValueKeyPress(){
//     text = document.getElementById("edValue").value;
//     draw('180pt Calibri, sans-serif');
// }
// function draw(fontStyle){
//     context.clearRect(0,0,c.width,c.height);
//     context.font = fontStyle;
//     context.fillStyle = "green"
//     context.fillText(text, c.width/2 - 50 , c.height/2);
//     context.font = fontStyle;
//     context.strokeStyle = "red";
//     context.lineWidth = 5;
//     context.strokeText(text, c.width/2 - 50, c.height/2);
//     context.stroke();
// }

// function changeitallic() {
//     draw('italic 180pt Calibri, sans-serif');
// }
var text = "Shiva";

var canvas = document.getElementById('exampleCanvas'),
context = canvas.getContext('2d');

context.font = 'bold 150px sans-serif';

context.shadowColor = "black";

context.lineWidth = 8;
context.strokeText(text, 5, 154);
context.shadowBlur = 0;
context.fillStyle = "red";
context.fillText(text, 0, 150);


var myFont = new FontFace('myFont', 'url(Praise-Regular.ttf)');
var freeStyleFont = new FontFace('freeStyleFont', 'url(BullettoKilla.ttf)');

function changeitallic() {
   
}


function standardBold() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = 'bold 500px sans-serif';
    context.shadowColor = "black";
    context.lineWidth = 8;
    context.strokeText(text, 5, 500);
    context.shadowBlur = 0;
    context.fillStyle = "red";
    context.fillText(text, 0, 500);
}
function serifBold() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = 'bold 500px serif';
    context.shadowColor = "black";
    context.lineWidth = 8;
    context.strokeText(text, 5, 500);
    context.shadowBlur = 0;
    context.fillStyle = "red";
    context.fillText(text, 0, 500);
}
function brush() {
    myFont.load().then(function (font) {
        document.fonts.add(font);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "500px myFont"; // set font
        context.fillText(text, 5, 500); // draw centered text
        context.shadowColor = "black";
        context.lineWidth = 8;
        context.strokeText(text, 5, 500);
        context.shadowBlur = 0;
        context.fillStyle = "red";
        context.fillText(text, 0, 500);
    });
}
function freeStyle() {
    
    freeStyleFont.load().then(function (font) {
        console.log('object');
        document.fonts.add(font);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "500px freeStyleFont"; // set font
        context.fillText(text, 0, 500); // draw centered text
        context.shadowColor = "black";
        context.lineWidth = 8;
        context.strokeText(text, 5, 500);
        context.shadowBlur = 0;
        context.fillStyle = "red";
        context.fillText(text, 0, 500);
    });
}
function standardCondensed() {
    context.font = ('italic bold 150px sans-serif');
}
function standardRound() {
    context.font = ('italic bold 150px sans-serif');
}
function capeCod() {
    context.font = ('italic bold 150px sans-serif');
}
function boxer() {
    context.font = ('italic bold 150px sans-serif');
}