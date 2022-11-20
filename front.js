function creatLtr(ltr, idx) {
  let newElement = document.createElement("div");
  newElement.innerText = ltr;
  newElement.className = "letter";
  newElement.id = idx;
  //   newElement.addEventListener("click", cardClicked);
  return newElement;
}
let letters = document.getElementById("main ltr");

let theABC = [
  "א",
  "ב",
  "ג",
  "ד",
  "ה",
  "ו",
  "ז",
  "ח",
  "ט",
  "י",
  "כ",
  "ל",
  "מ",
  "נ",
  "ס",
  "ע",
  "פ",
  "צ",
  "ק",
  "ר",
  "ש",
  "ת",
  "ם",
  "ן",
  "ץ",
  "ף",
  "ך",
];

for (ltr in theABC) {
  tempDiv = creatLtr(theABC[ltr], ltr);
  letters.appendChild(tempDiv);
}

function changedWheels() {
  wheelOrder = [...document.getElementById("wheelorder").value].map((x) =>
    Number(x)
  );
  wheelA = wheelSwitch(wheelOrder[0]);
  wheelB = wheelSwitch(wheelOrder[1]);
  wheelC = wheelSwitch(wheelOrder[2]);
}

function setIdx(idx) {
  let userInput;
  if (idx == 0) {
    userInput = Number(document.getElementById("w1").value);
    startIndexes[idx] = userInput;
    for (i in startIndexes[0]) rotatWheel(wheelA);
  }
  if (idx == 1) {
    userInput = Number(document.getElementById("w2").value);
    startIndexes[idx] = userInput;
    for (i in startIndexes[1]) rotatWheel(wheelB);
  }
  if (idx == 2) {
    userInput = Number(document.getElementById("w3").value);
    startIndexes[idx] = userInput;
    for (i in startIndexes[2]) rotatWheel(wheelC);
  }
}

let numOfEnc = 1;
let savedText = "Your text: ";
let encryptText = "Encrypted text: ";

function startencript() {
  savedText += "\n" + numOfEnc + ". " + document.getElementById("word").value;
  console.log(savedText);
  procces = theEnigmA(document.getElementById("word").value);
  encryptText += "\n" + numOfEnc + ". " + procces;
  console.log(encryptText);
  numOfEnc++;
  let result = document.getElementById("result");
  result.innerText = "טקסט מוצפן: '" + procces + "'";
}
