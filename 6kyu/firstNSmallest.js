// Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with an array/list/vector of integers and the expected number n of smallest elements to return.

// Also:

// the number of elements to be returned cannot be higher than the array/list/vector length;
// elements can be duplicated;
// in case of duplicates, just return them according to the original order (see third example for more clarity).
// Same examples and more in the test cases:

// firstNSmallest([1,2,3,4,5],3) === [1,2,3] //well, not technically ===, but you get what I mean
// firstNSmallest([5,4,3,2,1],3) === [3,2,1]
// firstNSmallest([1,2,3,4,1],3) === [1,2,1]
// firstNSmallest([1,2,3,-4,0],3) === [1,-4,0]
// firstNSmallest([1,2,3,4,5],0) === []

const firstNSmallest = (array, n) => {
  const copyOfArrayToMutate = [...array];
  const copyOfArray = [...array];
  const sortedArrayNumbers = array.sort((a, b) => a - b).splice(0, n);
  const smallestN = [];
  const smallestNIndex = [];

  for (let i = 0; i < n; i++) {
    smallestNIndex.push(copyOfArrayToMutate.indexOf(sortedArrayNumbers[i]));
    copyOfArrayToMutate[copyOfArrayToMutate.indexOf(sortedArrayNumbers[i])] =
      "";
  }

  smallestNIndex
    .sort((a, b) => a - b)
    .forEach((element) => smallestN.push(copyOfArray[element]));

  return smallestN;
};

console.log(firstNSmallest([1, 2, 3, 1, 2], 3)); // return [1, 2, 1]
console.log(firstNSmallest([5, 4, 3, 2, 1], 3)); // return [3,2,1]
