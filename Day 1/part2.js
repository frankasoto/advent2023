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
const path = require('path');
const fh = path.join(__dirname, './input.txt');

const file = fs.readFileSync(fh, 'utf-8');

const letterNums = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine':9
}
// console.log('file', file);
//55, 94, 21, 53
// console.log('line', file.split('\n')[0]);
let fileArr = file.split('\n');
function calibrator(text) {
  let sum = 0;
  // const charCode = line.charCodeAt(letter) >= 48 && line.charCodeAt(letter) <= 57;
  for (let lines = 0; lines < text.length; lines += 1) {
    let numString = '';
    let line = text[lines];

    for (let letter = 0; letter < line.length; letter += 1) {
      let threeSub = line.substring(letter, letter + 3);
      let fourSub = line.substring(letter, letter + 4);
      let fiveSub = line.substring(letter, letter + 5);
      if (letterNums.hasOwnProperty(threeSub)) {
        numString += letterNums[threeSub];
      } else if (letterNums.hasOwnProperty(fourSub)) {
        numString += letterNums[fourSub];
      } else if (letterNums.hasOwnProperty(fiveSub)) {
        numString += letterNums[fiveSub];
      }

      if (!isNaN(line[letter])) {
        numString += line[letter];
      }
    }
    if (numString.length > 1) {
      // console.log('numString')
      let num = numString[0] + numString[numString.length - 1];
      sum += Number(num);
    }
    else {
      // console.log('false');
      let num = numString[0] + numString[0];
      // console.log('numString', num);
      sum += Number(numString[0] + numString[0]);
    }
    if (isNaN(sum)) {
      console.log('true', lines)
    }


  }

  return sum;

}
let sum = calibrator(fileArr);
console.log('sum', sum);