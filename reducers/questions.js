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
    case 'GET_QUESTIONS_REQUEST':
      return { ...state, getQuestionfromDatabase: true };
    case 'GET_QUESTIONS_SUCCESS':
      return { ...state, ...action.data };
    case 'GET_QUESTIONS_FAILURE':
      return { ...state, getQuestionfromDatabase: action.error };
    default:
      return state;
  }
};

export default questions;
