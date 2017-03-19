/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import pickDay from '../actions/pickDay.js';
import pickWeek from '../actions/pickWeek.js';
const actions = {
  pickWeek,
  pickDay
};
module.exports = actions;
