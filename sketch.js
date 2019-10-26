let song;
let img;
let img1;
let str = '20';
// let diameter = float(str)
var fall = [];

// class Drop{
//     constructor(){
//         this.x = random (width)
//         this.y = random (-200,-100)
//         this.yspeed = random (4,10)
//         this.z = random(10,20)
//         this.length = random(10,20)
//     }

//     display(){

//     }
// }



// function show(){
// strokeWeight

// }


function preload(){
    song = loadSound('Clint Mansell - Lux Aeterna (Requiem for a Dream).mp3')
    img = loadImage('New Composition_1.png');
    img1 = loadImage('New Composition_2.png')
}

var y1 = 0;
var y2 = 0;


function setup(){
createCanvas(800,800)



}

function mousePressed() {
    song.play();
}

function draw(){
    background(255);
    image(img, width/2, y1);
    image(img1, width/20, y2);
    y1++;
    y2-=2;
}


// class fall {
//     constructor() {
//         this.y = y + yspeed;
//         this.yspeed = yspeed + 0.1;
//         if (y > height) {
//             this.y = random(-200, -100);
//             this.yspeed = random(4, 10);}
//         }}
