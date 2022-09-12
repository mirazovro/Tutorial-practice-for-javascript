// const result = Math.pow(3, 7);
const results = Math.pow(8, 7);
// console.log(results);

const num1 = 25;
const num2 = 35;

const gap = Math.abs(num1 - num2);
console.log(gap);

if (gap < 5) {
  console.log("you guys can be friend");
} else {
  console.log("you better stay apart");
}

//--------
//
//--------

const number = 2.3556;
const fullNumber = Math.round(number);
// console.log(fullNumber);

const result2 = Math.ceil(2.001);
console.log(result2);

const result3 = Math.floor(2.6332);
console.log(result3);

//------
//random

// const random = Math.round(Math.random() * 6);
// console.log(random);

for (let i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}
