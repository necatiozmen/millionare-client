import firebase from 'firebase';

export const API = Symbol('API');

const config = {
 //firebase config
};

firebase.initializeApp(config);

export const api = store => next => (action) => {
  if (action[API]) {
    const { questionId } = action[API];

    firebase.database().ref('/questions/').once('value')
      .then(result => result.toJSON())
      .then((data) => {
        console.log(data);
        store.dispatch({
          type: `${action.type}_SUCCESS`,
          data,
        });
      })
      .catch((error) => {
        store.dispatch({
          type: `${action.type}_FAILURE`,
          error,
        });
      });
    next({
      ...action,
      type: `${action.type}_REQUEST`,
    });
  } else {
    next(action);
  }
};
