import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { getQuestions, currentQuestionId} from '../../actions';
import styles from './styles';

class Login extends Component {

  componentDidMount() {
    this.props.getQuestions(true);
  }

  startGame = () => {
    this.props.currentQuestionIdDispatch(1);
    setTimeout(() => { this.props.navigation.navigate('Home');},1000);
  };

  render() {
      console.log('login ciomponent');
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

const mapDispatchToProps = dispatch => ({
  getQuestions: id => dispatch(getQuestions(id)),
  currentQuestionIdDispatch : data => dispatch(currentQuestionId(data)),
});

export default connect(null, mapDispatchToProps)(Login);
