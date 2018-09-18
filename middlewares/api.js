import firebase from 'firebase';

export const API = Symbol('API');


const config = {
  apiKey: 'AIzaSyCbmPGA9wNG1neewbQx7DNftScvPIGvEGY',
  authDomain: 'millionare-database.firebaseapp.com',
  databaseURL: 'https://millionare-database.firebaseio.com',
  projectId: 'millionare-database',
  storageBucket: 'millionare-database.appspot.com',
  messagingSenderId: '563334098420',
};

firebase.initializeApp(config);

export const api = store => next => (action) => {
  if (action[API]) {
    const { questionId } = action[API];

    firebase.database().ref('/questions/' + questionId).once('value')
      .then(result => result.toJSON())
      .then((data) => {
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




// fetch(`${SERVER_BASE_URL}${endpoint}`, {
//   method: method || 'GET',
//   body: JSON.stringify(body),
//   headers,
// })
//   .then(result => result.json())
