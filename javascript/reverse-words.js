// solved one year ago
function reverseWords(str) {
  const separateStrings = str.split("");
  return separateStrings.reverse().join("").split(" ").reverse().join(" ")
}