import { API } from '../middlewares/api';



export const getQuestion = id => ({
  type: 'GET_QUESTION',
  payload: id,
});


export const databaseTest = (id) => ({
  type: 'DATABASE_TEST',
  [API]: {
    endpoint: `/test?id=${id}`,
    method: 'GET',
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

export const jokerDouble = (data) => ({
  type: 'JOKER_DOUBLE',
  data,
});

export const jokerOriginalStyleDispatch = (data) => ({
  type:'JOKER_ORIGINAL_STYLE_BACK',
  data,
})
