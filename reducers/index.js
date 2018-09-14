import { combineReducers } from 'redux';

import questions from './questions';
import prizeJoker from './prizeJoker';

const reducers = combineReducers({
  questions,
  prizeJoker,
});

export default reducers;
