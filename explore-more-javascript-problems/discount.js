/*
1. if ticket numbers is less then 100, per ticket price: 100

2. if ticket numbers is more then 100, but less then 200. first 100 ticket will be 100 and rest ticket will be 90 tk per piece
first100 = 100;
rest =90;

3. if you purchase more than 200 tickets
first 100 tickets price--->100
101-200 ticket price--->90
200+---->70

*/

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totallPrice = first100price + restTicketPrice;
    return totallPrice;
  } else {
    const first100price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalCost = first100price + second100Price + restTicketPrice;
    return totalCost;
  }
}
const price = ticketPrice(240);
console.log("price is:", price);
