import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { jokerFifty, jokerDouble, isFiftyJokerSelectDispatch } from '../../actions';
import { Button, Icon } from 'native-base';
import styles from './styles';

class Joker extends Component {
  state = {
    isFiftyDisabled: false,
    isDoubleDisabled: false,
    timerSecond:0,
  };

  halfJoker = () => {
    const correctAnswer = this.props.questionsAnswers[this.props.currentQuestionId].correctAnswer;
    let fiftyArray = [];
    let newchar = correctAnswer.charCodeAt(0);

    newchar === 97 ? (val1 = newchar + 1,  val2 = newchar + 2) : '';
    newchar === 98 ? (val1 = newchar - 1,  val2 = newchar + 2) : '';
    newchar === 99 ? (val1 = newchar - 1,  val2 = newchar - 2) : '';
    newchar === 100 ? (val1 = newchar - 1, val2 = newchar - 2) : '';

    fiftyArray.push(String.fromCharCode(val1), String.fromCharCode(val2));
    this.props.isFiftyJokerSelectDispatch(true); // parenttaki didupdate function calismasi icin
    this.props.jokerFiftyDispatch(fiftyArray); // yuzde 50 ayarlanmis siklari gonderir
    this.setState({ isFiftyDisabled: true });
  };

  doubleJoker = () => {
    this.props.isDoubleJokerSelectDispatch(true);
    this.setState({ isDoubleDisabled: true });
  };

  render() {
    return (
      <View style={styles.jokerContainer}>
        <View>
          <Button
            style={!this.state.isFiftyDisabled ? styles.jokerButton : styles.jokerButtonDisabled}
            onPress={() => this.halfJoker()}
            disabled={this.state.isFiftyDisabled}
          >
            <Icon
              type="MaterialCommunityIcons"
              name='star-half'
              style={{ fontSize: 25 }}
            />
          </Button>
        </View>
        <View>
          <Button
            style={!this.state.isDoubleDisabled ? styles.jokerButton : styles.jokerButtonDisabled}
            onPress={() => this.doubleJoker()}
            disabled={this.state.isDoubleDisabled}
          >
            <Icon
              type="FontAwesome"
              name='superscript'
              style={{ fontSize: 25 }}
            />
          </Button>
        </View>
      </View>
   );
  }
};

const mapStateToProps = state => ({
  questionsAnswers: state.questions.allQuestions,
  currentQuestionId: state.questions.currentQuestionId,
});

const mapDispatchToProps = dispatch => ({
  jokerFiftyDispatch: data => dispatch(jokerFifty(data)),
  isDoubleJokerSelectDispatch: data => dispatch(jokerDouble(data)),
  isFiftyJokerSelectDispatch: data => dispatch(isFiftyJokerSelectDispatch(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Joker);
