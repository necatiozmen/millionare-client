import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { jokerFifty } from '../actions';

class Joker extends Component {

  halfJoker = () => {

    const correctAnswer = this.props.questionsAnswers.correctAnswer;
    const answer = this.props.questionsAnswers.answer;
    let foundAnswer = '';
    let fiftyArray = [];

    for (const prop in answer) {
      answer[prop] === correctAnswer ? foundAnswer = prop : '';
    }

    let newchar = foundAnswer.charCodeAt(0);

    newchar === 97 ? (val1 = newchar + 1,  val2 = newchar + 2) : '';
    newchar === 98 ? (val1 = newchar - 1,  val2 = newchar + 2) : '';
    newchar === 99 ? (val1 = newchar + 1,  val2 = newchar - 2) : '';
    newchar === 100 ? (val1 = newchar - 1,  val2 = newchar - 2) : '';

    fiftyArray.push(String.fromCharCode(val1), String.fromCharCode(val2));

    this.props.jokerFiftyDispatch(fiftyArray); // yuzde 50 ayarlanmis siklari gonderir
    // this._btn.setNativeProps({ disabled: true });
    //  ref={btn => this._btn = btn
    // console.log('sss', this._btn);
  };

  render() {
    return (
      <View  style={styles.jokerContainer}>
         <View style={styles.jokerItem}>
           <Button onPress={() => this.halfJoker()}
             title='J1'/>
         </View>
         <View style={styles.jokerItem}>
           <Button onPress={() => console.log('jokerButton')} title='J2'/>
         </View>
       </View>
   );
  }
};

const mapStateToProps = state => ({
  jokerFiftyValue: state.joker.jokerFifty,
  questionsAnswers: state.questions,
});

const mapDispatchToProps = dispatch => ({
  jokerFiftyDispatch: data => dispatch(jokerFifty(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Joker);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  jokerContainer: {
    flex: 1,
    // height: 40,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  jokerItem: {
    height: 40,
    width: 40,
    backgroundColor: 'skyblue',
  },
});
