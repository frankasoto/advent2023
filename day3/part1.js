/* --- Day 3: Gear Ratios ---
You and the Elf eventually reach a gondola lift station; he says the gondola lift will
take you up to the water source, but this is as far as he can bring you. You go inside.

It doesn't take long to find the gondolas, but there seems to be a problem: they're not moving.

"Aaah!"

You turn around to see a slightly-greasy Elf with a wrench and a look of surprise.
"Sorry, I wasn't expecting anyone! The gondola lift isn't working right now;
it'll still be a while before I can fix it." You offer to help.

The engineer explains that an engine part seems to be missing from the engine,
but nobody can figure out which one. If you can add up all the part numbers in the engine schematic,
it should be easy to work out which part is missing.

The engine schematic (your puzzle input) consists of a visual representation of the engine.
There are lots of numbers and symbols you don't really understand, but apparently any number
adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum.
(Periods (.) do not count as a symbol.)

Here is an example engine schematic:

467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
In this schematic, two numbers are not part numbers because they are not adjacent to a
symbol: 114 (top right) and 58 (middle right). Every other number is adjacent to a symbol and so is a
part number; their sum is 4361.

Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers
in the engine schematic? */



const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, './input.txt');

let file = fs.readFileSync(filename, 'utf-8').split('\n');
// file = file.split('\n')
// console.log(file);

function checkAbove(matrix, rowPosition, columnPosition) {

  let i = rowPosition - 1;
  let j = columnPosition - 1;

  if (i < 0) {
    return true;
  }
  if (j < 0 || (j + 1) > matrix[i].length) {
    return true;
  }

  while(j <= columnPosition + 1) {
    if (matrix[i].charCodeAt(j) >= 33 && matrix[i].charCodeAt(j) <= 45 || matrix[i].charCodeAt(j) === 47) {
      return false;
    }
    j++;
  }

  return true;
}

function checkBelow(matrix, rowPosition, columnPosition) {

  let i = rowPosition + 1;
  let j = columnPosition - 1;

  if (i > matrix.length) {
    return true;
  }
  if (j < 0 || (j + 1) > matrix[i].length) {
    return true;
  }


  while(j <= columnPosition + 1) {
    if (matrix[i].charCodeAt(j) >= 33 && matrix[i].charCodeAt(j) <= 45 || matrix[i].charCodeAt(j) === 47) {
      return false;
    }
    j++;
  }
  return true;
}

function checkSides(matrix, rowPosition, columnPosition) {
    let i = columnPosition - 1;

    if (i < 0) {
      i = 0;
    }
    if (matrix[rowPosition].charCodeAt(i) >= 33 && matrix[i].charCodeAt(i) <= 45 || matrix[rowPosition].charCodeAt(i) === 47) {
      return false;
    }
    if (matrix[rowPosition].charCodeAt(i + 2) >= 33 && matrix[i].charCodeAt(i) <= 45 || matrix[rowPosition].charCodeAt(i + 2) === 47) {
      return false;
    }

    return true;


}

function partNumber(file) {
  let toCheck = false;
  let sum = 0;

  for (let i = 0; i < file.length; i += 1) {
    let line = file[i];
    let numString ='';
    for (let j = 0; j < line.length; j += 1) {
      if (isNaN(line[j])
    }
  }

}








const test = ['a.c', '12.', 'av/s']

// console.log(checkSides(test, 1,1))