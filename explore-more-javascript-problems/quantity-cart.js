const shoppingCart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "shirt", price: 2200, quantity: 5 },
  { name: "pant", price: 3600, quantity: 4 },
  { name: "belt", price: 600, quantity: 3 },
];

function totalCost(shoppingCart) {
  let sum = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const product = shoppingCart[i];
    const productTotal = product.price * product.quantity;
    sum = sum + productTotal;
    // console.log(product);
  }
  return sum;
}
const expense = totalCost(shoppingCart);
console.log("totall expense is", expense);
