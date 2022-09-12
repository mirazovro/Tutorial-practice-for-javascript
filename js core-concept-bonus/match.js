const numbers = [25, 35, 45, 65, 45, 78];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

// for (const number of numbers) {
//   console.log(number);
// }

const products = [
  { id: 1, name: "xiomi phone", price: 2000 },
  { id: 2, name: "apple laptop", price: 95000 },
  { id: 3, name: "samsung laptop", price: 21000 },
  { id: 4, name: "vivo Phone", price: 26000 },
  { id: 5, name: "java laptop", price: 23000 },
  { id: 6, name: "M1 cheap Laptop", price: 32000 },
];

// for (const product of products) {
//   console.log(product);
// }

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProducts(products, "laptop");
console.log(result);
