import { PICK_DAY } from './const';

function action(day) {
  return { type: PICK_DAY, day };
}

module.exports = action;
