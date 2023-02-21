// solved one year ago
function filter_list(l) {
  // Return a new array with the strings filtered out
  const splitedArray = l.filter((string) => typeof string !== 'string')
  
  return splitedArray
}