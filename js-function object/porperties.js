var shoppingCart = {
    books: 3,
    sunglass: 5,
    pan: 10,
    nobel: 15,
    keybord: 14,
    mouse: 2,
}
//when you know the specific property name, use the dot notation to get the property value

// var pencount = shoppingCart.pan;

//alternative system
//when you know the specific property name, you can use third bracket to get the property value

var pencount1 = shoppingCart["pan"];
// console.log(pencount1);

var propertyname = "nobel";
var propertyvalue = shoppingCart[propertyname]
// console.log(propertyname, propertyvalue);

var properties = Object.keys(shoppingCart);
// console.log(properties);
var propertyvalues = Object.values(shoppingCart);
// console.log(propertyvalues);

//set propertyvalues
shoppingCart.mouse = 51;
console.log(shoppingCart);
shoppingCart["mouse"] = 15;
console.log(shoppingCart);
shoppingCart[propertyname] = 45;
console.log(shoppingCart);
