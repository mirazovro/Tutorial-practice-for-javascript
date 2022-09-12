const nayok = {
  name: "sakib khan",
  id: 121,
  address: "fdc",
  isSingle: "false",
  friends: ["apu", "raaz", "salman", "aamir"],
  movies: [
    { name: "no.1", year: 2150 },
    { name: "king khan", year: 2018 },
  ],
  act: function () {
    console.log("acting in movie");
  },
  car: {
    brand: "tesla",
    price: 500000,
    made: 2502,
    manufacturar: {
      name: "tesla",
      ceo: "elon mask",
      country: "USA",
    },
  },
};

// console.log(nayok.car.manufacturar.country);
nayok.act();
