import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from './styles';

class Login extends Component {

  startGame = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoImg}><Image source={require('../../assets/splash.png')} /></View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => this.startGame()}  large full warning >
           <Text style={styles.buttonText}>Oyuna Basla</Text>
         </Button>
        </View>
      </View>
    );
  }
};

export default Login;
