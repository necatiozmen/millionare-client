import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './reducers';
import RootNavigator  from './navigation/RootNavigator';
import { api } from './middlewares/api';
import MontserratRegular from './assets/fonts/Montserrat-Regular.ttf';
import MontserratMedium from './assets/fonts/Montserrat-Medium.ttf';
import MontserratSemiBold from './assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from './assets/fonts/Montserrat-Bold.ttf';
import MontserratExtraBold from './assets/fonts/Montserrat-ExtraBold.ttf';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(api),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  componentWillMount() {
  this.loadFonts();
}


  async loadFonts() {
    await Expo.Font.loadAsync({
      MontserratRegular,
      MontserratSemiBold,
      MontserratMedium,
      MontserratBold,
      MontserratExtraBold,
    });
    this.setState({ isReady: true });
  }



  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
  }
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
