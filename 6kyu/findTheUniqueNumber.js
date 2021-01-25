// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

const findUniq = (arr) => {
  const firstNum = arr[0];
  const lastNum = arr[arr.length - 1];
  let unique;
  if (firstNum !== lastNum) {
    if (firstNum !== arr[1]) {
      unique = firstNum;
    } else {
      unique = lastNum;
    }
  } else {
    unique = arr.find((el) => el !== firstNum);
  }
  return unique;
};

console.log(findUniq([1, 2, 2, 2, 2, 2]));

// This is one of the shortest solutions in codewars

// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

// But mine is faster XD
