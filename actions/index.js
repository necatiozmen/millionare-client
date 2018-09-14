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
