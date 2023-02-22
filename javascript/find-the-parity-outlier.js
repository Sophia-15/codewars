function findOutlier(integers){
  let even = []
  let odd = []
  
  
  if (integers.length < 3) {
    return
  }
  
  for (i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i])
    } else if (integers[i] % 2 !== 0) {
      odd.push(integers[i])
    }
  }
  
  if (even.length > odd.length) {
    return odd[0]
  }
  
  return even[0]
}