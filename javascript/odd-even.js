// solved one year ago
function oddOrEven(array) {
  let total = 0;
  
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  
  if (total % 2 === 1) {
    return 'odd'
  } else if (total % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}