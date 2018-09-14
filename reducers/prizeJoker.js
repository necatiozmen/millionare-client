const defaultState = {

};


const prizeJoker = (state = defaultState, action) => {
  switch (action.type) {
    case 'PRIZE_UP':
      return { ...state, increasePrice: true };
    default:
      return state;
  }
};

export default prizeJoker;
