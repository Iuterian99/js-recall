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

// const weightMark = 48;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;
// const BmiMark = weightMark / heightMark ** 2;
// const BmiJohn = weightJohn / heightJohn ** 2;

// if (BmiMark > BmiJohn) {
//   console.log(
//     "Mark`s BMI(" + BmiMark + ") is higher than John`s(" + BmiJohn + ")😊"
//   );
// } else {
//   console.log(
//     "John`s BMI(" + BmiJohn + ") is higher than Mark`s(" + BmiMark + ")😊"
//   );
// }

// const DolphinsFirstScore = 97;
// const DolphinsSecondScore = 112;
// const DolphinsThirdScore = 101;
// const delphinsAverageScore =
//   (DolphinsFirstScore + DolphinsSecondScore + DolphinsThirdScore) / 3;

// const CaolasFirstScore = 109;
// const CaolasSecondScore = 95;
// const CaolasThirdScore = 106;

// const CaolasAverageScore =
//   (CaolasFirstScore + CaolasSecondScore + CaolasThirdScore) / 3;

// if (
//   delphinsAverageScore > CaolasAverageScore &&
//   delphinsAverageScore > 100 &&
//   CaolasAverageScore > 100
// ) {
//   console.log(`delphins' average score is higher than Caolas'`);
// } else if (delphinsAverageScore === CaolasAverageScore) {
//   console.log("delphins' average score is same as Caolas'");
// } else if (
//   delphinsAverageScore < CaolasAverageScore &&
//   delphinsAverageScore > 100 &&
//   CaolasAverageScore > 100
// ) {
//   console.log(`Caolas' average score is higher than delphins'`);
// } else {
//   console.log("No team wins the trophy");
// // }

// const trueSana = (Arr) => Arr.filter((e) => e).length;
// console.log(trueSana([true, true, true, false, true, 1, 2, 3, true]));

// const specialReverse = (string, firstWord) =>
//   string
//     .split(" ")
//     .map((word) =>
//       word[0] == firstWord ? word.split("").reverse().join("") : word
//     )
//     .join(" ");

// console.log(specialReverse(string, "y"));

// let string = "word, ali, malika, yupiterka";
// const specialReverse = (str, char) => {
//   const Arr = str.split(" ");
//   let result = "";
//   for (let i = 0; i < Arr.length; i++) {
//     if (Arr[i][0] == char && Arr[i].length >= 6) {
//       result += Arr[i].split("").reverse().join("") + " ";
//     } else {
//       result += Arr[i] + " ";
//     }
//   }
//   return result;
// };

// console.log(specialReverse(string, "y"));

// const makeTitle = (Arr) => {
//   const arr = Arr.split(" ");
//   for (let i in Arr) {
//     console.log(arr[i][0].toUpperCase());
//   }
// };

// makeTitle("assalomu aleykum aziz yurdoshlar");

// const numInStr = (str) => {
//   const elem = str.split(" ");
//   return elem;
// };

// console.log(numInStr("ale, Vali, jahongir"));

// class cal {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }

//   setSum() {
//     return this.num1 + this.num2;
//   }

//   getSum() {
//     return this.setSum();
//   }

//   setSub() {
//     return this.num1 - this.num2;
//   }

//   getSub() {
//     return this.setSub();
//   }

//   setMul() {
//     return this.num1 * this.num2;
//   }

//   getMul() {
//     return this.setMul();
//   }
//   setDiv() {
//     return this.num1 / this.num2;
//   }

//   getDiv() {
//     return this.setDiv();
//   }
// }

// const Calculator = new cal(9, 3);
// console.log(`${Calculator.num1} + ${Calculator.num2} = ${Calculator.getSum()}`);
// console.log(`${Calculator.num1} - ${Calculator.num2} = ${Calculator.getSub()}`);
// console.log(`${Calculator.num1} * ${Calculator.num2} = ${Calculator.getMul()}`);
// console.log(`${Calculator.num1} / ${Calculator.num2} = ${Calculator.getDiv()}`);

class Array {
  constructor(Arr) {
    this.Arr = Arr;
  }

  filter(son) {
    let arr = [];
    for (let i of this.Arr) {
      if (i === son) {
        arr.push(i);
      }
    }
    return arr;
  }

  find(son) {
    for (let i of this.Arr) {
      if (this.Arr[i] === son) {
        return son;
      }
    }
  }
}

const newArray = new Array([
  1,
  2,
  3,
  1,
  4,
  true,
  true,
  false,
  "A",
  "b",
  "b",
  false,
  1,
  1,
]);
console.log(newArray.filter(1));
console.log(newArray.find(b));
