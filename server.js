// findNemo = (text) => {
//   nameCartoon = "nemo";
//   const nemoIndex = String(text.indexOf([nameCartoon]) + 1);
//   return console.log(`Nemo ${nemoIndex} o'rinda topdim`);
// };

// findNemo("ajoyib nemo multik");

// const toArray = (obj) => {
//   const result = [];
//   for (let i in obj) {
//     result.push(Array(i, obj[i]));
//   }
//   return result;
// };

// console.log(toArray({ a: 1, b: 2, c: 3 }));

// const isAnagram = (str) => str == str.split("").reverse().join("");

// console.log(isAnagram("non"));

// const salom = (str) => {
//   const str === str.toUpperCase();
//   return console.log(upperCaseLatters);
// };

// console.log(salom("saloM"));

const weightMark = 48;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;
const BmiMark = weightMark / heightMark ** 2;
const BmiJohn = weightJohn / heightJohn ** 2;

if (BmiMark > BmiJohn) {
  console.log(
    "Mark`s BMI(" + BmiMark + ") is higher than John`s(" + BmiJohn + ")"
  );
} else {
  console.log(
    "John`s BMI(" + BmiJohn + ") is higher than Mark`s(" + BmiMark + ")"
  );
}
