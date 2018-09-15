const defaultState = {
    jokerFifty: [],
  };

const joker = (state = defaultState, action) => {
  switch (action.type) {
    case 'JOKER_FIFTY':
      return { ...state, jokerFifty: action.data };
    default:
      return state;
  }
};

export default joker;
