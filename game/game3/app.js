const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const backgroundImage = document.getElementById("image")
const flappyBirdImage = document.getElementById("flappy-bird-image");
const topPipe1Image = document.getElementById("top-pipe-image");
const bottomPipe1Image = document.getElementById("bottom-pipe-image");
const gainAPointSound = document.getElementById("gain-a-point-sound");
const startButtonImage = document.getElementById("start-button-image")
let pause = true;
let scoreSet = 0;
let controlsKeyDown = {up: false, right: false, down: false, left: false};
let dx = 2;
let dy = 2;
let score = 0;
let seconds = 0;
if(pause === false) {
let secondsInterval = setInterval(() => {
    seconds ++;
    console.log(seconds)
}, 1000)
}
canvas.width = innerWidth;
canvas.height = innerHeight;



class Bird {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
    draw() {
        c.beginPath();
        c.fillStyle = 'blue';
        c.strokeStyle = 'lightBlue';
        c.drawImage(flappyBirdImage, this.x, this.y, this.width, this.height)
        c.fill()
        c.stroke();
        c.closePath();
    }
    
}



class Pipe {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    
    draw() {
        c.beginPath();
        c.drawImage(bottomPipe1Image, this.x, this.y, this.width, this.height)
        c.fill();
        
    }

    drawtop() {
        c.beginPath();
        c.drawImage(topPipe1Image, this.x, this.y, this.width, this.height);
        c.closePath()
    }
}


class Button {
    constructor(x,y,height,width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    draw() {
        c.beginPath();
        c.drawImage(startButtonImage, this.x, this.y, this.height, this.width);
        c.closePath();
    }
}

// Game Objects
const topPipe1 = new Pipe(canvas.width - 300, 0, 300, 200)

const bottomPipe1 = new Pipe(canvas.width - 300, canvas.height - 300, 300, 200)

const topPipe2 = new Pipe(canvas.width + 300, 0, 300, 200);

const bottomPipe2 = new Pipe(canvas.width + 300, canvas.height - 300, 300, 200);

const myBird = new Bird(200, 200, 60, 60)

const startButton = new Button(canvas.width/2 - 300, canvas.height/2 - 75, 400, 150)
console.log(startButton)

// Game Mechanics
function birdControlsKeyDown(Event) {
    if(Event.key === 'ArrowUp') {
        controlsKeyDown.up = true;
    }
    if(Event.key === 'ArrowRight') {
        controlsKeyDown.right = true;
    }
    
    if(Event.key === 'ArrowLeft') {
        controlsKeyDown.left = true;
    }
    
    if(Event.key === "ArrowDown") {
        controlsKeyDown.down = true;
    }
}
function birdControlsKeyUp(Event) {
    if(Event.key === 'ArrowUp') {
        controlsKeyDown.up = false;
    }
    
    if(Event.key === 'ArrowRight') {
        controlsKeyDown.right = false;
    }
    
    if(Event.key === 'ArrowLeft') {
        controlsKeyDown.left = false;
    }
    
    if(Event.key === 'ArrowDown') {
        controlsKeyDown.down = false;
    }
}

//Bird  With Edge Collision Detection

function birdCollisionDetection() {
    // Bird Hits Bottom Of Screen
    if(myBird.y + myBird.height >= canvas.height){
        myBird.y = canvas.height - 100;
        alert("You Lost")
        document.location.reload()
    }
    
    // Bird Hits Top Of Screen
    if(myBird.y <= 0) {
        myBird.y += dy;
    } 
    
    // Bird Hits Left Of Screen
    if(myBird.x<= 0) {
        myBird.x += dx;
    }
    
    // Bird Hits Right Of Screen
    if(myBird.x + myBird.height >= canvas.width) {
        myBird.x -= dx;
    }
    
    // Bird With Pipe Collision Detection
    
}
function birdWithPipeCollisionDetection(a,b) {
    
    if(a.x + a.width >= b.x && a.x <= b.x + b.width && a.y  <= b.y + b.height && a.y + a.height >= b.y){
        console.log('test');
        document.location.reload()   
        alert("You Lost")
    }

}

function writeScore() {
    c.font = '30px Georgia'
c.fillStyle = 'black';
c.fillText(`Score: ${score}`, 30, 30)
}

function writeTime() {
    c.font = '30px Georgia';
    c.fillStyle = 'black';
    c.fillText(`Seconds: ${seconds}`, canvas.width/2 - 100, 30)
}
function writeStats() {
    writeScore()
    writeTime()
}

function resetPipePositions() {
    if(topPipe1.x + topPipe1.width/2 < 0) {
        topPipe1.x = canvas.width
        topPipe1.height = Math.floor(Math.random() * 200 + 300);
        scoreSet++;
    }

    if(bottomPipe1.x + bottomPipe1.width/2 < 0) {
        bottomPipe1.x = canvas.width
        bottomPipe1.height = canvas.height - topPipe1.height
    }

    if(bottomPipe2.x + bottomPipe2.width/2 < 0) {
        bottomPipe2.x = canvas.width
        bottomPipe2.height = canvas.height - topPipe2.height
    }

    if(topPipe2.x + topPipe2.width/2 < 0) {
        topPipe2.x = canvas.width
        topPipe2.height = canvas.height - bottomPipe2.height
    }

  
}

function resetBirdPosition() {
    if(myBird.x < 200) {
        myBird. x += dx;
    }
}

function updateScore() {
    if(myBird.x + myBird.width >= bottomPipe1.x && myBird.x <= bottomPipe1.x + bottomPipe1.width && myBird.y + myBird.height <= bottomPipe1.y && myBird.y >= topPipe1.y + topPipe1.height) {
        score = (scoreSet + 1)
    }
}

function ifPause() {
    addEventListener('keypress', (Event) => {
        if(Event.key === 'Enter') {
            console.log(pause)
            pause = false;
        } else if(Event.key === ' ') {
            console.log(pause)
            pause = true
        }
        console.log(pause)
    })

}

function resizeScreen()  {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;   
}

function startButtonOnClick() {
    pause = false;
}

// Game Loop

function draw() {


c.drawImage(backgroundImage, 0,0,canvas.width,canvas.height);
myBird.draw();
topPipe1.drawtop();
bottomPipe1.draw();
topPipe2.drawtop();
bottomPipe2.draw()
startButton.draw()
resetPipePositions();
resetBirdPosition();
updateScore();
ifPause()
writeStats();
// Check If Paused
if(pause === false) {
    
    // Bird Controls

    addEventListener('keydown', birdControlsKeyDown)
    
    addEventListener('keyup', birdControlsKeyUp)
    
    if(controlsKeyDown.up) {
        setInterval(myBird.y -= dy, 10);
    } else {
        myBird.y += dy;
    }

    topPipe1.x -= dx;
    bottomPipe1.x -= dx;
    topPipe2.x -= dx;
    bottomPipe2.x -= dx;
    birdCollisionDetection();


    birdWithPipeCollisionDetection(myBird, topPipe1);

    birdWithPipeCollisionDetection(myBird, bottomPipe1);

    birdWithPipeCollisionDetection(myBird, bottomPipe2);

    birdWithPipeCollisionDetection(myBird, topPipe2);



}
requestAnimationFrame(draw)
}


draw()






