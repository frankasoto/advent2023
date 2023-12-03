/* --- Day 1: Trebuchet?! ---
Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values? */

const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'utf-8');

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
    // console.log('line:',line)
    for (let letter = 0; letter < line.length; letter += 1) {

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

const text2 = ['5nnine', '3prjtkg6three1'];
// console.log('test', calibrator(text2));

// console.log('test2', calibrator(["a1b", "2c", "d3e"])); //66

// console.log('test3', calibrator(["a2", "3b", "4c", "d5"])); //154

// console.log('test4', calibrator(["00a23", "04b56", "00c789"])); //`18

// console.log('test5', calibrator(["ab", "123", "xyz", "4567", "89"])); //149

// console.log('test6', calibrator(["abc", "xyz", "lmn"])); //0
