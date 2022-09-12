// console.log(4 / 2);
// console.log(14 / 2);
// console.log(24 / 2);
// console.log(64 / 2);
// console.log(124 / 2);
// console.log(364 % 2);
// console.log(784 % 2);
// console.log(542 % 2);
// console.log(448 % 2);

function isEven(number
) {
    const reminder = number % 2;
    // console.log(reminder);
    if (reminder === 0)
        return true;
    else {
        return false;
    }
}
    

const myNumberIsEven = isEven(257);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(302);
console.log(herNumberIsEven);
