const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0","1","2","3","4","5","6","7","8","9"];
const similars = ["i", "l", "1", "L", "o", "0", "O"];

let pass;
let x;

let editPass;
let length = 16;
let numberChecked = true;
let uppercaseChecked = true;
let similarChecked = true;

function generatePass() {
  pass = '';
  for (let i = 0; i < length; i++) {
    generateChar();
    pass = pass + x;
  }
  editPass.value = pass;
}

function generateChar() {
  let index;
  let temp;
  if (numberChecked) {
    index = 35;
  } else {
    index = 25;
  }
  if (uppercaseChecked) {
    let ccase = round(random(1));
    if (ccase == 0) {
      temp =  chars[round(random(0, index))].toUpperCase();
    } else {
      temp = chars[round(random(0, index))];
    }
  } else {
    temp = chars[round(random(0, index))];
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

function copyPass() {
  editPass.select();
  document.execCommand("copy");
  alert("Your password has been copied to clipboard!");
}
