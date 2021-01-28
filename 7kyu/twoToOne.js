// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (s1, s2) => {
  // container for distinct letters
  const distinctLetters = [];
  // combine the two strings
  const concatStrings = s1 + s2;
  concatStrings
    // lower case the combined strings
    .toLowerCase()
    // transform them into array by separating
    .split("")
    // sort them alphabetically
    .sort()
    // loop through the array and check if each letter exists in distinct letters container
    .map((letter) => {
      if (distinctLetters.indexOf(letter) === -1) {
        distinctLetters.push(letter);
      }
    });
  // return distinctLetters as a string
  return distinctLetters.join("");
};

console.log(longest("aretheyhere", "yestheyarehere"));
