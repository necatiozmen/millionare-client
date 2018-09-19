const defaultState = {
    jokerFifty: [],
    jokerDouble: '',
    isFiftyJokerSelect: '',
  };

const joker = (state = defaultState, action) => {
  switch (action.type) {
    case 'JOKER_FIFTY':
      return { ...state, jokerFifty: action.data };
    case 'JOKER_DOUBLE':
      return { ...state, jokerDouble: action.data };
    case 'IS_FIFTY_JOKER_SELECT':
      return { ...state, isFiftyJokerSelect: action.data };
    default:
      return state;
  }
};

export default joker;
