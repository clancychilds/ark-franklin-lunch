import { PICK_WEEK } from './const';

function action(week) {
  return { type: PICK_WEEK, week };
}

module.exports = action;
