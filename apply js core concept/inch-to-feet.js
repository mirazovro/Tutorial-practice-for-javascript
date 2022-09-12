// const dataInches = 144;
// const datafeet = dataInches / 12;
// console.log("data feet", datafeet);

// const daduInches = 60;
// const dadufeet = daduInches / 12;
// console.log("dadu feet",dadufeet);

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const dadainches = 144;
const dadafeet = inchToFeet(dadainches);
console.log(dadafeet);

const nanainches = 168;
const nanafeet = inchToFeet(nanainches);
console.log("nanafeet",nanafeet);