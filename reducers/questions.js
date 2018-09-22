const defaultState = {
  allQuestions:[],
  currentQuestionId:1,
};

const questions = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS_REQUEST':
      return { ...state, getQuestionfromDatabase: true };
    case 'GET_QUESTIONS_SUCCESS':
      return { ...state, allQuestions: action.data };
    case 'GET_QUESTIONS_FAILURE':
      return { ...state, getQuestionfromDatabase: action.error };
    case 'INCREASE_CURRENT_QUESTION_ID':
      return { ...state, currentQuestionId: action.data };
    default:
      return state;
  }
};

export default questions;
