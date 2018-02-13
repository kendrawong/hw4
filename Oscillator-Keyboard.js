var mySound1;
var mySound2;
var mySound3;
var mySound4;

function preload() {
  mySound1 = loadSound('assets/doorbell.mp3');
  mySound2 = loadSound('assets/willywonka.mp3');
  mySound3 = loadSound('assets/Spoon.m4a');
  mySound4 = loadSound('assets/What.m4a');
}

function setup() { 
  mySound1.setVolume(0.4);
  mySound4.setVolume(0.25);
  mySound1.play();
  createCanvas(100, 100);
}

function draw() {
  if (mySound1.isPlaying()) {
    background(240);
  } else {
    background(120);
  }
}

function keyPressed() {
  if (key == 'D')
  mySound1.play();
  
  else if (key == 'W')
  mySound2.play();
  
  else if (key == 'S')
  mySound3.play();
  
  else if (key == 'A')
  mySound4.play();
}

  
