const country = "bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 125, class: 11, name: "raju" };
const friends = [13, 14, 25, 36, 42];
function add(num1, num2) {
  return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//check array using Array.isArray()
console.log(Array.isArray(friends));
console.log(typeof add);

//-------------

console.log(friends.includes(13));

// concate(): mane duta arry ke jug kora

const newFriends = [12, 14, 16, 78, 54];
const allFriends = newFriends.concat(friends);
console.log(allFriends);
