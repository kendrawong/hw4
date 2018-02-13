var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var playA = false
var playS = false
var playD = false
var playF = false

var oscA, oscS, oscD, oscF;

var playing = false;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  if (playing) {
    background(5, 5, 5);
  } else if(key == 'A') {				//green
		background(0, 255, 0)
  }
  	else if(key == 'S') {				//yellow
    background(255, 255, 0);
  }
  	else if(key == 'D') {				//cyan
    background(0, 255, 255);
  }
  	else if(key == 'F') {				//magenta
    background(255, 0, 255);
  }
  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
}


//user clicks to change frequency; with every click frequency gets higher

mouseClicked = false;
function keyPressed() {
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
    playA = true;
  } else if (key == 'D') {
    osc = oscD;
    playD = true;
  } else if (key == 'F') {
    osc = oscF;
    playF = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function mousePressed() {
	if (mouseIsPressed && key == 'A') {
    freqA = freqA + 50
    oscA.freq(freqA);
} if (mouseIsPressed && key == 'S') {
   freqS = freqS + 50
    oscS.freq(freqS);
} if (mouseIsPressed && key == 'D') {
   freqD = freqD + 50
    oscD.freq(freqD);
} if (mouseIsPressed && key == 'F') {
   freqF = freqF + 50
    oscF.freq(freqF);
  
}
}

function keyReleased() {
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
