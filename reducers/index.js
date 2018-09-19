import { combineReducers } from 'redux';
import questions from './questions';
import joker from './joker';

const reducers = combineReducers({
  questions,
  joker,
});

export default reducers;
