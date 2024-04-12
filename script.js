// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var minus10Btn = document.getElementById("minus10");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");
var plus10Btn = document.getElementById("plus10");
var minus50Btn = document.getElementById("minus50");
var plus50Btn = document.getElementById("plus50");
var minus1Btn = document.getElementById("minus1");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1Btn.addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);
plus10Btn.addEventListener("click", add10);
minus50Btn.addEventListener("click", sub50);
plus50Btn.addEventListener("click", add50);
minus1Btn.addEventListener("click", sub1);

function add1() {
  counter = counter + 1;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter = counter - 10;
  displayEl.innerHTML = counter;
}
function add10() {
  counter = counter + 10;
  displayEl.innerHTML = counter;
}

function sub50() {
  counter = counter - 50;
  displayEl.innerHTML = counter;
}

function add50() {
  counter = counter + 50;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter = counter - 1;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time,";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = " "; // clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand4Btn = document.getElementById("rand4");

var rand1OutE1 = document.getElementById("rand1-out");
var rand2OutE1 = document.getElementById("rand2-out");
var rand3OutE1 = document.getElementById("rand3-out");
var rand4OutE1 = document.getElementById("rand4-out");

rand1Btn.addEventListener("click", showRand1);
rand2Btn.addEventListener("click", showRand2);
rand3Btn.addEventListener("click", showRand3);
rand4Btn.addEventListener("click", showRand4);
document.getElementById("random-size").addEventListener("click", changeSize);
document.getElementById("random-rgb").addEventListener("click", colorRandom);
function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutE1.innerHTML = rand;
}

function showRand2() {
  var rand = Math.random() * 100;
  rand = rand.toFixed(2);
  rand2OutE1.innerHTML = rand;
}

function showRand3() {
  var rand = Math.random() * 10;
  rand -= 5;
  rand = rand.toFixed(3);
  rand3OutE1.innerHTML = rand;
}

function showRand4() {
  let smallerNum = +document.getElementById("rand-in1").value;
  let biggerNum = +document.getElementById("rand-in2").value;
  let outcomeNum = biggerNum - smallerNum + 1;

  var rand = Math.random() * outcomeNum + smallerNum;
  rand = rand.toFixed(1);
  rand4OutE1.innerHTML = rand;
}

function changeSize() {
  let randFont = Math.random() * 20 + 5;
  document.getElementById("the-body").style.fontSize = `${randFont}px`;
}

function colorRandom() {
  let randBackground = math.random() * 255 + 0;

  document.getElementById("the-body").style.background = `${randBackground}`;
}
