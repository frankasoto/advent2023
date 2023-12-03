/* --- Part Two ---
Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values? */

const fs = require('fs');

const file = fs.readFileSync('./input.txt', 'utf-8');
let fileArr = file.split('\n');

function calibrator(text) {
  let sum = 0;

  // Mapping of spelled-out digits to numeric values
  const digitMapping = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  for (let lines = 0; lines < text.length; lines += 1) {
    let line = text[lines];
    let numString = '';

    for (let letter = 0; letter < line.length; letter += 1) {
      let currentSubstring = '';
      let remainingSubstring = line.substring(letter);

      // Try to find a match for a spelled-out digit with increasing substring lengths
      for (let i = 1; i <= remainingSubstring.length; i++) {
        currentSubstring = remainingSubstring.substring(0, i);

        if (digitMapping[currentSubstring]) {
          numString += digitMapping[currentSubstring];
          letter += i - 1; // Move the letter index to the end of the spelled-out digit
          break;
        }
      }

      if (!digitMapping[currentSubstring] && !isNaN(line[letter])) {
        // Check if the character is a numeric digit
        numString += line[letter];
      }
    }

    if (numString.length === 1) {
      // If there's only one digit, add it to the sum
      sum += Number(numString);
    } else if (numString.length >= 2) {
      // Take the first and last digits and form a two-digit number
      let num = numString[0] + numString[numString.length - 1];
      sum += Number(num);
    }
  }

  return sum;
}

console.log(calibrator(fileArr));