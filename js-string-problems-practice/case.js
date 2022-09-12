const userName = "blackPink";
const userInput = "blackpinK";
console.log(userName.toUpperCase());
console.log(userInput.toLocaleLowerCase());
if (userName.toLowerCase() === userInput.toLowerCase()) {
  console.log("valid user");
} else {
  console.log("invalid user");
}
