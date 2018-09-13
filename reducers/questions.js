const defaultState = {
  questionsAnswer: {
    q1: {
      id: 1,
      question: 'Which one is bigger ?',
      answer: {
            a: '1',
            b: '2',
            c: '3',
            d: '4',
          },
    },
    q2: {
      id: 2,
      question: 'What is Life ?',
      answer: {
            a: 'Nothing',
            b: 'Everything',
            c: 'Something',
            d: 'None of them',
          },
    },
  },
};

const questions = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_QUESTION':
      return { ...state, getQuestion: true };
    default:
      return state;
  }
};

export default questions;
