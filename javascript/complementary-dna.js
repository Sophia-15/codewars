// solved one year ago
function DNAStrand(dna){
  return dna.split("").map((character) => {
    if (character === "A") {
      return "T"
    } else if (character === "T") {
      return "A"
    } else if (character === "G") {
      return "C"
    } else if (character === "C") {
      return "G"
    }
  }).join("")
}