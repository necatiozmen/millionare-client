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
