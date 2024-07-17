function analyzeArray(arr) {
  let average;
  let min = arr[0];
  let max = arr[0];
  let length = arr.length;

  average =
    arr.reduce((acc, curr) => {
      return (acc += curr);
    }, 0) / arr.length;

  arr.forEach((elem) => {
    if (elem <= min) min = elem;
    if (elem >= max) max = elem;
  });
  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
