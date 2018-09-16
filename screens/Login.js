import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';

class Login extends Component {

  onClickTest = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoImg}><Image source={require('../assets/splash.png')} /></View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => this.onClickTest()}  large full warning >
           <Text style={styles.buttonText}>Oyuna Basla</Text>
         </Button>
        </View>
      </View>
    );
  }
};

export default Login;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#2B1088',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  logoImg: {
    flex: 3,
    justifyContent: 'center',
    marginTop:90,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    width:240,
  },
  buttonText: {
    fontSize: 20,
   fontWeight: 'bold',

  }

});
