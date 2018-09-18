import { API } from '../middlewares/api';

export const getQuestion = id => ({
  type: 'GET_QUESTION',
  payload: id,
});

export const databaseTest = (questionId) => ({
  type: 'DATABASE_TEST',
  [API]: {

    questionId: questionId,
  },
});

export const prizeChange = (data) => ({
  type: 'PRIZE_UP',
  payload: data,
});

export const currentQuestion = (data) => ({
  type: 'CURRENT_QUESTION',
  data,
});

export const jokerFifty = (data) => ({
  type: 'JOKER_FIFTY',
  data,
});
export const jokerAfterStyle = (data) => ({
  type: 'JOKER_AFTER_STYLE',
  data,
});

export const jokerDouble = (data) => ({
  type: 'JOKER_DOUBLE',
  data,
});

export const jokerFiftyVisibleChecker = (data) => ({
  type: 'JOKER_FIFTY_VISIBLE_CHECKER',
  data,
});
