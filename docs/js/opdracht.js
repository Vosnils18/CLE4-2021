// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

import { createTextSpanFromBounds } from "typescript";
import { UI } from "winjs";

// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/hWPWdzm2o/';
preload();
setup();
// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
  console.log("test 2")
  
}


function setup() {
  // STEP 2: Start classifying
  classifyAudio();
}

// STEP 2 classify the videeo!
function classifyAudio() {
  classifier.classify(gotResults);
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
  console.log(label)
  if (label == "e") {
    console.log("itest")
  } 
  else if (label == "emmer") {
    console.log("emmertest")
  } 
}
