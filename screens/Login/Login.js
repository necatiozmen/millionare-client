import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

class Login extends Component {

  startGame = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoImg}>
          <Image source={require('../../assets/splash.png')} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.startGame()}>
            <Text style={styles.buttonText}>Oyuna Basla</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Login;
