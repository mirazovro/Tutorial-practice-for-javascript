const shoppingCart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 2200 },
  { name: "pant", price: 3600 },
  { name: "belt", price: 600 },
];

function totalCost(shoppingCart) {
  let sum = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const product = shoppingCart[i];
    sum = sum + product.price;
    // console.log(product);
  }
  return sum;
}
const expense = totalCost(shoppingCart);
console.log("totall expense is", expense);
