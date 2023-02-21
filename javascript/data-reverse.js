function dataReverse(data) {
  const dividend = 8
  
  const dataSliced = new Array(Math.ceil(data.length / dividend)).fill().map((_) => data.splice(0, dividend))
  let dataReversed = dataSliced.reverse().join(",")
  let finalTreatedData = []

  for (n = 0; n < dataReversed.length; n++) {
    finalTreatedData.push(parseInt(dataReversed[n]))
  }

  
  return finalTreatedData.filter((element) => !isNaN(element))
  
}