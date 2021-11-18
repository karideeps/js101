/*

Problem:
  Input: String
  Output: Number

Algorithm:
  Initialize `sum` to 0
  Iterate through every letter of string
    Find UTF-16 value of char and add it to `sum`
  Return `sum`

*/

function utf16Value(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i);
  }
  return sum;
}


// Test cases:
console.log(utf16Value('Four score') === 984);
console.log(utf16Value('Launch School') === 1251);
console.log(utf16Value('a') === 97);
console.log(utf16Value('') === 0);

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA) === 937);
console.log(utf16Value(OMEGA + OMEGA + OMEGA) === 2811);