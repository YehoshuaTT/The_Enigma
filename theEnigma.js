/**********************
 ***  The Enigma   ****
 * ********************
 

 **********************
 ***  ctrl panel   ****
 **********************
*/
//letters exchange. if a letterr is changed, so the alternative letter must reflect that letter. (for decrypting)
function ltrSwitch(letter) {
  if (letter)
    switch (letter) {
      case " ":
        return " ";
      case "א":
        return "א";
      case "ב":
        return "ב";
      case "ג":
        return "ג";
      case "ד":
        return "ד";
      case "ה":
        return "ה";
      case "ו":
        return "ו";
      case "ז":
        return "ז";
      case "ח":
        return "ח";
      case "ט":
        return "ט";
      case "י":
        return "י";
      case "כ":
        return "כ";
      case "ל":
        return "ל";
      case "מ":
        return "מ";
      case "נ":
        return "נ";
      case "ס":
        return "ס";
      case "ע":
        return "ע";
      case "פ":
        return "פ";
      case "צ":
        return "צ";
      case "ק":
        return "ק";
      case "ר":
        return "ר";
      case "ש":
        return "ש";
      case "ת":
        return "ת";
      case "ם":
        return "ם";
      case "ן":
        return "ן";
      case "ץ":
        return "ץ";
      case "ף":
        return "ף";
      case "ך":
        return "ך";
    }
}

//wheels order
// import { getWheelOrder } from "./front";
let wheelOrder = [1, 2, 3];

// wheel index starting position (0-26) for each wheel
let startIndexes = [1, 1, 1];

// 3 deferent scrumbled letters assined to numbers  on the wheels.

let a = {
  0: "י",
  1: "ד",
  2: "צ",
  3: "ח",
  4: "ץ",
  5: "ה",
  6: "ם",
  7: "ס",
  8: "ש",
  9: "כ",
  10: "א",
  11: "ת",
  12: "ע",
  13: "ט",
  14: "ג",
  15: "ן",
  16: "ל",
  17: "ז",
  18: "נ",
  19: "ף",
  20: "ו",
  21: "ר",
  22: "ב",
  23: "מ",
  24: "ק",
  25: "ך",
  26: "פ",
};
let b = {
  0: "ל",
  1: "ו",
  2: "ך",
  3: "פ",
  4: "צ",
  5: "ג",
  6: "ן",
  7: "י",
  8: "ק",
  9: "ר",
  10: "א",
  11: "ם",
  12: "ת",
  13: "כ",
  14: "מ",
  15: "ז",
  16: "ט",
  17: "ף",
  18: "נ",
  19: "ב",
  20: "ע",
  21: "ץ",
  22: "ח",
  23: "ש",
  24: "ד",
  25: "ס",
  26: "ה",
};
let c = {
  0: "ב",
  1: "כ",
  2: "ו",
  3: "ש",
  4: "צ",
  5: "י",
  6: "ת",
  7: "ל",
  8: "מ",
  9: "נ",
  10: "ד",
  11: "ג",
  12: "ה",
  13: "פ",
  14: "ם",
  15: "ט",
  16: "ן",
  17: "ק",
  18: "ץ",
  19: "ע",
  20: "א",
  21: "ף",
  22: "ז",
  23: "ך",
  24: "ר",
  25: "ס",
  26: "ח",
};

function wheelSwitch(num) {
  switch (num) {
    case 1:
      return a;
    case 2:
      return b;
    case 3:
      return c;
  }
}

// putting the wheels in the right order.
var wheelA = wheelSwitch(wheelOrder[0]);
var wheelB = wheelSwitch(wheelOrder[1]);
var wheelC = wheelSwitch(wheelOrder[2]);

//just a replica of the enigma funcuion.
// a simple exchange of pears of letters to creat a simmetry.
var reflactor = {
  0: 5,
  1: 25,
  2: 18,
  3: 13,
  4: 4,
  5: 0,
  6: 20,
  7: 11,
  8: 24,
  9: 17,
  10: 26,
  11: 7,
  12: 23,
  13: 3,
  14: 16,
  15: 19,
  16: 14,
  17: 9,
  18: 2,
  19: 15,
  20: 6,
  21: 22,
  22: 21,
  23: 12,
  24: 8,
  25: 1,
  26: 10,
};

function rotatWheel(wheel) {
  let temp = wheel[0];
  wheelLength = Object.keys(wheel).length - 1;
  for (i = 0; i < wheelLength; i++) wheel[i] = wheel[i + 1];
  wheel[wheelLength] = temp;
}

/*
 **********************
 ***  Encrypting   ****
 **********************
 */

rotatOfA = startIndexes[0];
rotatOfB = startIndexes[0];
console.log(rotatOfA);
function theEnigmA(data) {
  dataIdx = 0;
  let output = "";

  while (dataIdx < data.length) {
    //the current letter
    var curLtr = ltrSwitch(data[dataIdx]);
    if (curLtr == " ") {
      output += " ";
      dataIdx++;
      continue;
    }
    if (curLtr == /^[a-zA-Z]+$/.test || curLtr == undefined) {
      dataIdx++;
      continue;
    }

    let allChar = [0, 0, 0, 0, 0, 0];
    while (curLtr !== wheelA[allChar[0]]) allChar[0]++;
    allChar[1] = wheelB[allChar[0]];
    while (allChar[1] !== wheelC[allChar[2]]) allChar[2]++;
    allChar[3] = reflactor[allChar[2]];
    allChar[4] = wheelC[allChar[3]];
    while (allChar[4] !== wheelB[allChar[5]]) allChar[5]++;
    output += wheelA[allChar[5]];
    dataIdx++;

    // wheels rotation
    rotatWheel(wheelA);
    rotatOfA++;
    console.log(rotatOfB);
    console.log("wheelB");
    console.log(wheelB);

    if (rotatOfA == 27) {
      rotatWheel(wheelB);
      rotatOfA = 0;
      rotatOfB++;
    }
    // the second wheel, will have 2 rotating pins
    if (rotatOfB == 27) {
      rotatWheel(wheelC);
      rotatOfB = 0;
    }
  }
  return output;
}
