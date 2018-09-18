const defaultState = {
    jokerFifty: [],
    jokerDouble: '',
    jokerFiftyVisibleChecker: '',
    jokerAfterStyle:'',
  };

const joker = (state = defaultState, action) => {
  switch (action.type) {
    case 'JOKER_FIFTY':
      return { ...state, jokerFifty: action.data };
    case 'JOKER_DOUBLE':
      return { ...state, jokerDouble: action.data };
    case 'JOKER_FIFTY_VISIBLE_CHECKER':
      return { ...state, jokerFiftyVisibleChecker: action.data };
    case 'JOKER_AFTER_STYLE':
      return { ...state, jokerAfterStyle: action.data };
    default:
      return state;
  }
};

export default joker;
