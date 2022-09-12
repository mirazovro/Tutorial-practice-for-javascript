// 1. variable

var myname = "miraz";

// math operation: +, -, *, /
// shorthand: +=, -=, *=, /=
//++, --

// 2. array

var friends = ['abul', "babul", "kabul", "robiul"];
var thirdfriend = friends[2];
friends[3] = "jolil";

// 3. conditionals

// >, <, >=, <=, ==, ===, !=, !==

if (friends.length < 2) {
    console.log("fokir tur kuno friend nai")
}
else {
    console.log("tur onek friend")
}

// 4. loop

var number = 0;

while (number <= 6) {
    console.log(number);
    number++;
}

for (var i = 0; i <= 10; i++){
    console.log(i);
}

// 5. function
function isMoonUp(time) {
    if (time > 6) {
        return true;
     }
 }

 // 6. object

var jantus = {
    height: 60,
    weight: 45,
    romanticism: "havvy",
    baaperTk: brolux,
 }