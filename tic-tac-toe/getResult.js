/*
Imagine you are playing a game of tic-tac-toe
and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array,
where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1
if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/
import { flatten } from "../flatten/index.test.js";

function arraysEqual(a, mask) {
  let new_arr = [];
  for (var i = 0; i < a.length; ++i) {
    new_arr.push(a[i] && mask[i]);
  }
  for (var i = 0; i < a.length; ++i) {
    if (new_arr[i] !== mask[i]) return false;
  }
  return true;
}

function create_masks(val = true) {
  let masks = [];
  for (let i = 0; i < 3; i++) {
    let mask = Array(9).fill(false);
    mask[i] = val;
    mask[i + 3] = val;
    mask[i + 6] = val;
    masks.push(mask);
  }
  for (let i = 0; i < 9; i = i + 3) {
    let mask = Array(9).fill(false);
    mask.fill(val, i, i + 3);
    masks.push(mask);
  }
  masks.push(
    [true, false, false, false, true, false, false, false, true],
    [false, false, true, false, true, false, true, false, false]
  );
  return masks;
}

export function get_result(board) {
  let flat = flatten(board);
  let mask1 = flat.map((item) => item == 1);
  let mask2 = flat.map((item) => item == 2);
  let masks = create_masks();
  for (let i = 0; i < masks.length; i++) {
    if (arraysEqual(mask1, masks[i])) return 1;
    if (arraysEqual(mask2, masks[i])) return 2;
  }
  return -1;
}
