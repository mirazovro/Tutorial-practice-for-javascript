function milesToKm(miles) {
    const km = miles * 0.621
    return km;
}

const miles = 120;
const km = milesToKm(miles);
console.log("the kilometer is", km);