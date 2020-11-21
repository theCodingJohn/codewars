// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
const sortArray = (array) => {
  const oddNumbers = array.filter((num) => num % 2 === 1).sort((a, b) => a - b);
  const origArray = [...array];
  return origArray.map((num) =>
    num % 2 === 1 ? (num = oddNumbers.shift()) : num
  );
};

console.log(sortArray([4, 5, 6, 8, 9, 4, 2, 1, 0, 5]));
