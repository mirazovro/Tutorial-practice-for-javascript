const phones = [
  {
    name: "Samsung",
    camera: 12,
    Storage: "32gb",
    price: 55000,
    color: "silver",
  },
  { name: "Oppo", camera: 12, Storage: "32gb", price: 25000, color: "silver" },
  { name: "Iphone", camera: 12, Storage: "32gb", price: 85000, color: "black" },
  { name: "Nokia", camera: 12, Storage: "32gb", price: 45000, color: "silver" },
  { name: "Vivo", camera: 12, Storage: "32gb", price: 53000, color: "silver" },
  { name: "HTC", camera: 12, Storage: "32gb", price: 63000, color: "silver" },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    // console.log(phone);
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
