const fs = require('fs');

const fh = fs.readFileSync('./input.txt', 'utf-8');

// let file = fh.split(':')

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
console.log('game', file[99])
for (let i = 1; i < file.length; i += 2) {
  let game = file[i];
  let number = '';

  for (let j = 0; j < game.length; j += 1) {

    if(!isNaN(game[j])) {

      number += game[j];

    }
    let selectedColor = colors[game[j]];

    if (values.hasOwnProperty(selectedColor)) {

      if (Number(number) <= values[selectedColor]) {

        number = '';
      } else {
        break;
      }
    }

    if (j === (game.length - 1)) {

      sum += (i - 1);
    }


  }

}

console.log('sum', sum)