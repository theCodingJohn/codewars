const positiveSum = (arr) => {
  return arr.filter((num) => num > -1).reduce((accu, curr) => accu + curr, 0);
};

console.log(positiveSum([-1, 2, 3, 4, -5]));
