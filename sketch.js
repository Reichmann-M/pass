const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const syms = ["@", "#", "$", "%", "_", "-", "+", "*"];
const similars = ["i", "l", "1", "L", "o", "0", "O"];

let pass;
let x;

let editPass;
let length = 16;
let numberChecked = true;
let lowercaseChecked = true;
let uppercaseChecked = true;
let symbolChecked = false;
let similarChecked = true;

function generatePass() {
  if (!numberChecked && !lowercaseChecked && !uppercaseChecked && !symbolChecked) {
    alert('You must select at least one character set!');
  } else {
    pass = '';
    for (let i = 0; i < length; i++) {
      generateChar();
      pass = pass + x;
    }
    editPass.value = pass;
  }
}

function generateChar() {
  let temp;
  var achieved = false;
  // 1 - Lower Characters | 2 - Upper Characters | 3 - Numbers | 4 - Symbols
  while (!achieved) {
    let choice = round(random(1, 4));
    if (choice == 1) {
      if (lowercaseChecked) {
        temp = getLowerCharacter();
        achieved = true;
      }
    } else if (choice == 2) {
      if (uppercaseChecked) {
        temp = getUpperCharacter();
        achieved = true;
      }
    } else if (choice == 3) {
      if (numberChecked) {
        temp = getNumber();
        achieved = true;
      }
    } else {
      if (symbolChecked) {
        temp = getSymbol();
        achieved = true;
      }
    }
  }
  if (similarChecked) {
    let same = false;
    for (let i = 0; i < similars.length; i++) {
      if (temp == similars[i]) {
        same = true;
        break;
      }
    }
    if (same) {
      generateChar();
    } else {
      x = temp;
    }
  } else {
    x = temp;
  }
}

function getLowerCharacter() {
  return chars[round(random(25))];
}

function getUpperCharacter() {
  return chars[round(random(25))].toUpperCase();
}

function getNumber() {
  return round(random(9));
}

function getSymbol() {
  return syms[round(random(syms.length - 1))];
}

// ------------------------------------------------

function setup() {
  editPass = document.getElementById("password");
}

function lengthChanged(l) {
  length = l;
}

function numbersChanged() {
  if (numberChecked) {
    numberChecked = false;
  } else {
    numberChecked = true;
  }
}

function lowercaseChanged() {
  if (lowercaseChecked) {
    lowercaseChecked = false;
  } else {
    lowercaseChecked = true;
  }
}

function uppercaseChanged() {
  if (uppercaseChecked) {
    uppercaseChecked = false;
  } else {
    uppercaseChecked = true;
  }
}

function similarChanged() {
  if (similarChecked) {
    similarChecked = false;
  } else {
    similarChecked = true;
  }
}

function symbolChanged() {
  if (symbolChecked) {
    symbolChecked = false;
  } else {
    symbolChecked = true;
  }
}

function copyPass() {
  editPass.select();
  document.execCommand("copy");
  alert("Your password has been copied to clipboard!");
}
