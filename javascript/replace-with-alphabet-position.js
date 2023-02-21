function alphabetPosition(text) {
  const alphabet = [
    "",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
  const textToArray = text.toUpperCase().split("")
  const fillteredTextToArray = textToArray.filter((letter) => alphabet.includes(letter))
  const finalTextToArray = fillteredTextToArray.map((letter) => alphabet.indexOf(letter)).join(" ")
  
  console.log(finalTextToArray)
  
  return finalTextToArray;
}