// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/hWPWdzm2o/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}


function setup() {
  createCanvas(640, 520);
  // STEP 2: Start classifying
  classifyAudio();
}

// STEP 2 classify the videeo!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);


  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // Pick an emoji, the "default" is train
  let emoji = "";
  if (label == "Achtergrondruis") {
    emoji = "🚂";
  } else if (label == "i") {
    emoji = "🦄";
  } 
  else if (label == "Emmer") {
    emoji = "🌈";
  } 
  

  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;

}
