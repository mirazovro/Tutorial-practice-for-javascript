/*
fixed: per item wood requirments

1. chair ---> 3cft
2. table---> 10cft
3. bed----> 50 cft

vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  //   console.log(chairWood);
  const tableWood = tableQuantity * perTableWood;
  //   console.log(tableWood);
  const bedWood = bedQuantity * perBedWood;
  //   console.log(bedWood);
  const totallWood = chairWood + tableWood + bedWood;
  return totallWood;
}

const totallWoood = woodCalculator(1, 2, 3);
console.log(totallWoood);
