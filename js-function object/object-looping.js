
//array vs object
var shoppingItems = ["books", "sunglass", "pan", "mosue", "keyboard"];
var friendsAge = [12, 32, 24, 16, 25];

var friendsAge = {
    rahim: 12,
    karim: 32,
    jahir: 24,
    saju: 16,
    raju: 25,
}

var shoppingCart = {
    books: 3,
    sunglass: 5,
    pan: 10,
    nobel: 15,
    keybord: 14,
    mouse: 2
} 

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys =  [books: 3, sunglass: 5, pan: 10, nobel: 15, keybord: 14];

for (var i = 0; i < keys.length; i++){
    var propertyname = keys[i];
    var propertyvalue = shoppingCart[propertyname];
    // console.log(propertyname, propertyvalue);
}

// for in loop

for (var propertyname in shoppingCart) {
    const value = shoppingCart[propertyname];
    console.log(propertyname,value);
}

 