// solved one year ago
function highAndLow(numbers){
  const splittedNumbers = numbers.split(" ");
  
  const highestNumber =  Math.max(...splittedNumbers);
  const lowestNumber =  Math.min(...splittedNumbers);
  
  
  return (`${highestNumber} ${lowestNumber}`)
}