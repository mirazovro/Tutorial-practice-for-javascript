function factorial(number) {
  let i = number;
  let result = 1;
  while (i >= number) {
    result = result * i;
    i--;
    console.log(i, number);
  }
  return result;
}
const output = factorial(25);
console.log(output);
