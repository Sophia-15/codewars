// solved one year ago
function squareDigits(num){
  const digits = num.toString().split("");
  
      
  const numbers = Number(digits.map((digit) => {
    return Math.pow(digit, 2);    
  }).join(""))
  
  return numbers
}
