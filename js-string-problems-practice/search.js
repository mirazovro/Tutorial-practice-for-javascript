const lyrics =
  "tumi bondhu kala pakhi ami jeno ki. bosonto kale tumay bolte parini. sada sada kala rong jomece sada kala";

const searchString = "Pakhi";
// const doesExist = lyrics.includes("jeno");
// const hasExist = lyrics.includes("Jeno");
// const doesExist = lyrics.includes(searchString);
const lyricLowerCase = lyrics.toLowerCase();
// const doesExist = lyricLowerCase.includes(searchString);
const searchStringlower = searchString.toLowerCase();
const doesExist = lyricLowerCase.includes(searchStringlower);

const doesExistOneLine = lyrics
  .toLowerCase()
  .includes(searchString.toLowerCase());
console.log(doesExist);
console.log(doesExistOneLine);
// console.log(hasExist);

//--------------
//indexof

console.log(lyrics.indexOf("kailla"));
console.log(lyrics.indexOf("tumi"));
//
if (lyrics.indexOf("sadalo") !== -1) {
  console.log("lyric is found");
} else {
  console.log("string is not here");
}

//startswith

console.log(lyrics.startsWith("3umi"));

//endswith

const fileName = "miraz.pdf";
const movie = "bikram.hd";

console.log(fileName.endsWith(".pd"));
console.log(movie.endsWith(".hd"));
