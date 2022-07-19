const student1 = 'James';
const student2 = 'Eric';
const student3 = 'Yejin';

const students = ['James','Eric','Yejin'];


// variables  as nouns
// functions as actions

// strings are enclosed with "", '', ``

// Selection aka control statements
// if, switch
// Repition aka loop statements
// while, do..while
// for, continue and break


/* 
    Selection aka control statements
    if, switch
    Repition aka loop statements
    while, do..while
    for, continue and break
*/

const primaryColors = ['red','green','blue'];
const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

let position = 50;

// only when condition is met/truthy

while (position < alphabets.length) {
  switch (alphabets[position]) {
    case 'a':
    case 'e': 
    case 'i':
    case 'o':
    case 'u':
        console.log(alphabets[position] + ' is a vowel');
        break;
    default:
        console.log(alphabets[position] + ' is a consonant');
  }
  position = position + 1;
}

do {
    // at least one always
} while (condition);


/*
  1. For loop
  2. continue
  3. break
  -- 
  4. Functions
  ---
  5. Scope
*/ 