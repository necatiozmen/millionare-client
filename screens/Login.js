import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Login extends Component {

  onClickTest = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View
        style={{

          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{backgroundColor: 'yellow'}}>
          <Text>LOGIN</Text>
        </View>
        <Button
          onPress={() => this.onClickTest()}
          title="CLICK TO START A GAME"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
};

export default Login;
