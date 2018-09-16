const defaultState = {
    jokerFifty: [],
    jokerDouble: '',
    jokerOriginalStyle: '',
  };

const joker = (state = defaultState, action) => {
  switch (action.type) {
    case 'JOKER_FIFTY':
      return { ...state, jokerFifty: action.data };
    case 'JOKER_DOUBLE':
      return { ...state, jokerDouble: action.data };
    case 'JOKER_ORIGINAL_STYLE_BACK':
      return { ...state, jokerOriginalStyle: action.data };
    default:
      return state;
  }
};

export default joker;
