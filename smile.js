//DOCTYPE javascript//

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
const baseCol = "#33FF33";
let currentCol = baseCol;
ctx.font = "10px Arial";
ctx.fillStyle = baseCol;
ctx.fillText(0, c.width*0.9, c.height*0.1); 
let face = {
    dim: {
        x: c.width/2,
        y: c.height/2,
        rad: c.width*0.4
    },
}

function drawHead (){
    ctx.beginPath();
    ctx.arc(face.dim.x,face.dim.y,face.dim.rad,0,2*Math.PI);
    ctx.strokeStyle = currentCol;
    ctx.stroke();
}

function drawEye (rad,orientation){
    ctx.beginPath();
    if (orientation == "left") {
        ctx.arc(face.dim.x-(face.dim.rad*0.4),face.dim.y-(face.dim.rad*0.4),rad,0,2*Math.PI)
    };
    if (orientation == "right") {
        ctx.arc(face.dim.x+(face.dim.rad*0.4),face.dim.y-(face.dim.rad*0.4),rad,0,2*Math.PI)    
    }
    if (orientation == "both") {
        drawEye(rad,"left");
        drawEye(rad,"right");
    };
    ctx.strokeStyle = face.col;
    ctx.stroke();
    ctx.fillStyle = currentCol;
    ctx.fill();
}

function drawSmile (mood) {
    ctx.beginPath();
    if (mood == "happy"){
        ctx.arc(face.dim.x,face.dim.y,face.dim.rad*0.75,Math.PI/6,5*Math.PI/6)   
    };
    if (mood == "sad"){
        ctx.arc(face.dim.x,face.dim.y+(face.dim.rad*0.75),face.dim.rad*0.75,Math.PI+Math.PI/6,Math.PI+(5*Math.PI/6))
    }
    ctx.strokeStyle = currentCol;
    ctx.stroke();
}

function resetFace() {
    face.dim.x = c.width/2;
    face.dim.y = c.height/2;
    face.dim.rad = c.width*0.4;
    currentCol = baseCol;
}

function drawFace(){
    drawHead();
    drawEye(5,"both");
    drawSmile((Math.round(Math.random()*100)<98) ? "happy" : "sad" );
}

function wipe(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);
};

setInterval(
    () => {
        ctx.clearRect(0, 0, c.width, c.height);
        drawFace();
    },
    1000
);