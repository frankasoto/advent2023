const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, './input.txt');
// console.log('file', filename);
const fh = fs.readFileSync(filename, 'utf-8');

let file = fh.split(':')

// file = file.join('').split('\n');
let colors = {
  'r': 'red',
  'b': 'blue',
  'g': 'green',
};

const values = {
  blue: 14,
  green: 13,
  red: 12,
}

let sum = 0;
console.log('game', file[0])
for (let i = 1; i < file.length; i += 1) {
  let game = file[i];
  let number = '';

  for (let j = 0; j < game.length; j += 1) {

    if(!isNaN(game[j])) {

      number += game[j];

    }
    let selectedColor = colors[game[j]];

    if (values.hasOwnProperty(selectedColor)) {
      // console.log('color', selectedColor, '::: value', values[selectedColor], 'found:', Number(number));

      if (Number(number) <= values[selectedColor]) {

        number = '';
      } else {
        break;
      }
    }

    if (j === (game.length - 1)) {

      sum += i;
    }


  }

}

console.log('sum', sum)