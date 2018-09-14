import { combineReducers } from 'redux';

import questions from './questions';

const reducers = combineReducers({
  questions,
});

export default reducers;
