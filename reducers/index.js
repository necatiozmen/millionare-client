import { combineReducers } from 'redux';

import questions from './questions';
import prizeJoker from './prizeJoker';
import joker from './joker';

const reducers = combineReducers({
  questions,
  prizeJoker,
  joker,
});

export default reducers;
