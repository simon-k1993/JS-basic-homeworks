let container = document.getElementById("alphabetButtons");
let answerDisplay = document.getElementById("hold");
let answer = "";
let hint = "";
let life = 10;
let wordDisplay = [];
let winningCheck = "";
let containerHint = document.getElementById("clue");
let buttonHint = document.getElementById("hint");
let buttonReset = document.getElementById("reset");
let livesDisplay = document.getElementById("mylives");
let myStickman = document.getElementById("stickman");
let context = myStickman.getContext("2d");

function generateButton() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `<button class = "alphabetButtonJS" id="${letter}">${letter}</button>`
    )
    .join("");

  return buttonsHTML;
}

function handleClick(event) {
  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
    const buttonId = document.getElementById(event.target.id);
    buttonId.classList.add("selected");
  }
  return;
}

const question = [
  "The Category Is Famous Movie Stars",
  "The Category Is Singers",
  "The Category Is Billionairess",
];

const categories = [
  [
    "brad-pitt",
    "tom-cruise",
    "jennifer-lawrence",
    "bradley-cooper",
    "angelina-jolie",
  ],
  ["madonna", "sting", "andrea-bocelli", "beyonce", "tose-proeski"],
  [
    "mark-zuckerberg",
    "jeff bezos",
    "simon-kozoloski",
    "elon-mask",
    "bill-gates",
  ],
];

const hints = [
  [
    "He portrayed Achilles in Troy",
    "He was the star in The Last Samurai",
    "She is the main actress in Hunger Games",
    "He has a child with Irina Shayk",
    "She is Mrs.Smith",
  ],
  [
    "Probably the most famous female singer",
    "Desert Rose",
    "Italian opera singer",
    "Jay-Z",
    "The best singer from Macedonia",
  ],
  ["Facebook", "A river", "G5 seavus", "Tesla motors", "Microsoft"],
];

function setAnswer() {
  let categoryOrder = Math.floor(Math.random() * categories.length);
  let chosenCategory = categories[categoryOrder];
  let wordOrder = Math.floor(Math.random() * chosenCategory.length);
  let chosenWord = chosenCategory[wordOrder];

  let categoryNameJS = document.getElementById("categoryName");
  categoryNameJS.innerHTML = question[categoryOrder];

  answer = chosenWord;
  hint = hints[categoryOrder][wordOrder];
  answerDisplay.innerHTML = generateAnswerDisplay(chosenWord);
}

function generateAnswerDisplay(word) {
  let wordArray = word.split("");

  for (let i = 0; i < answer.length; i++) {
    if (wordArray[i] !== "-") {
      wordDisplay.push("_");
    } else {
      wordDisplay.push("-");
    }
  }
  return wordDisplay.join(" ");
}

function showHint() {
  containerHint.innerHTML = `Clue - ${hint}`;
}

buttonHint.addEventListener("click", showHint);

function init() {
  answer = "";
  hint = "";
  life = 10;
  wordDisplay = [];
  winningCheck = "";
  context.clearRect(0, 0, 400, 400);
  canvas();
  containerHint.innerHTML = `Clue -`;
  livesDisplay.innerHTML = `You have ${life} lives!`;
  setAnswer();
  container.innerHTML = generateButton();
  container.addEventListener("click", handleClick);
  console.log(answer);
}

window.onload = init();

buttonReset.addEventListener("click", init);

function guess(event) {
  const guessWord = event.target.id;
  const answerArray = answer.split("");
  let counter = 0;
  if (answer === winningCheck) {
    livesDisplay.innerHTML = `YOU WIN!`;
    return;
  } else {
    if (life > 0) {
      for (let j = 0; j < answer.length; j++) {
        if (guessWord === answerArray[j]) {
          wordDisplay[j] = guessWord;
          console.log(guessWord);
          answerDisplay.innerHTML = wordDisplay.join(" ");
          winningCheck = wordDisplay.join("");
          counter += 1;
        }
      }
      if (counter === 0) {
        life -= 1;
        counter = 0;
        animate();
      } else {
        counter = 0;
      }
      if (life > 1) {
        livesDisplay.innerHTML = `You have ${life} lives!`;
      } else if (life === 1) {
        livesDisplay.innerHTML = `You have ${life} life!`;
      } else {
        livesDisplay.innerHTML = `YOU GUESSED WRONG! GAME OVER!!!`;
      }
    } else {
      return;
    }
    console.log(wordDisplay);
    if (answer === winningCheck) {
      livesDisplay.innerHTML = `YOU GUESSED RIGHT!!!`;
      return;
    }
  }
}

container.addEventListener("click", guess);

function animate() {
  drawStickman[life]();
}

function canvas() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
}

function head() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI * 2, true);
  context.stroke();
}

function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
}

function frame1() {
  draw(0, 150, 150, 150);
}

function frame2() {
  draw(10, 0, 10, 600);
}

function frame3() {
  draw(0, 5, 70, 5);
}

function frame4() {
  draw(60, 5, 60, 15);
}

function torso() {
  draw(60, 36, 60, 70);
}

function rightArm() {
  draw(60, 46, 100, 50);
}

function leftArm() {
  draw(60, 46, 20, 50);
}

function rightLeg() {
  draw(60, 70, 100, 100);
}

function leftLeg() {
  draw(60, 70, 20, 100);
}

let drawStickman = [
  rightLeg,
  leftLeg,
  rightArm,
  leftArm,
  torso,
  head,
  frame4,
  frame3,
  frame2,
  frame1,
];
