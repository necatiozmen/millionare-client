const defaultState = {
  id: '',
  question: '',
  answer: {
      a: '',
      b: '',
      c: '',
      d: '',
    },
  correctAnswer: '',
};

const questions = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_QUESTION':
      return { ...state, getQuestion: true };
    case 'DATABASE_TEST_REQUEST':
      return { ...state, getQuestionfromDatabase: true };
    case 'DATABASE_TEST_SUCCESS':
      return { ...state, ...action.data };
    case 'DATABASE_TEST_FAILURE':
      return { ...state, getQuestionfromDatabase: action.error };
    case 'CURRENT_QUESTION':
      return { ...state, currentQuestion: action.data }
    default:
      return state;
  }
};

export default questions;
