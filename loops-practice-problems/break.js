for (var i = 1; i < 10; i++){
    console.log(i);
    if (i > 8) {
        break;
    }
}

var number = 0;
while (number <= 25) {
    console.log(number);
    console.log("number is one");
    if (number > 6) {
        break;
}
    number++;
}
for (var roastGiven = 0; roastGiven < 7; roastGiven++) {
    if (roastGiven > 3) {
        break;
    }
    console.log("please rost den bro!!")
}

var numbers = [41, 45, 52, 60, 150, 30, 27, 145, 56321, 455];
for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 60) {
        break;
    }
    console.log(number);
    console.log("number is not grater then 145 thats why it will be break");
}

var tableItems = ["sunglass", "mobile", "moneybag", "mouse", "appld", "ipod", "keybord"];
for (var i = 0; i < tableItems.length; i++){
    var table = tableItems[i];
    if (table == "mouse") {
        break;
    }
    console.log(table)
}