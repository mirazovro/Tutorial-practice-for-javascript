const lyrics =
  "tumi bondhu kala pakhi ami jeno ki. bosonto kale tumay bolte parini. sada sada kala rong jomece sada kala";

const parts = lyrics.split(" ");
const sentances = lyrics.split(".");
const chars = lyrics.split("");
// console.log(chars);

const partial = lyrics.slice(5, 8);
console.log(partial);

const partial2 = lyrics.substring(5, 8);
console.log(partial2);

const lines = [
  "Tumi bondhu kala pakhi ami jeno ki",
  "Bosonto kale tumay bolte parini",
  "Sada sada kala rong jomece sada kala",
];

const newSong = lines.join(" & ");
console.log(newSong);
