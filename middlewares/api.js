export const API = Symbol('API');
export const SERVER_BASE_URL = 'http://192.168.1.3:5000'; //localhost yaparsan iphone calismiyor

export const api = store => next => (action) => {
  if (action[API]) {
    const {
      endpoint,
      method,
      body,
      headers,
    } = action[API];

    fetch(`${SERVER_BASE_URL}${endpoint}`, {
      method: method || 'GET',
      body: JSON.stringify(body),
      headers,
    })
      .then(result => result.json())
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
