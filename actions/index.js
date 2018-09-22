import { API } from '../middlewares/api';

export const getQuestions = (questionId) => ({
  type: 'GET_QUESTIONS',
  [API]: {
    questionId: questionId,
  },
});

export const jokerFifty = (data) => ({
  type: 'JOKER_FIFTY',
  data,
});

export const jokerDouble = (data) => ({
  type: 'JOKER_DOUBLE',
  data,
});

export const isFiftyJokerSelectDispatch = (data) => ({
  type: 'IS_FIFTY_JOKER_SELECT',
  data,
});

export const currentQuestionId = (data) => ({
  type: "INCREASE_CURRENT_QUESTION_ID",
  data,
})
