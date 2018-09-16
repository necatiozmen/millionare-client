import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { jokerFifty, jokerDouble } from '../actions';

class Joker extends Component {
  constructor(props) {
    super(props);
    this.state = {
     isFiftyDisabled: false,
     isDoubleDisabled: false,
    };
    this.baseState = this.state;
  }


  halfJoker = () => {

    const correctAnswer = this.props.questionsAnswers.correctAnswer;
    let fiftyArray = [];
    let newchar = correctAnswer.charCodeAt(0);

    newchar === 97 ? (val1 = newchar + 1,  val2 = newchar + 2) : '';
    newchar === 98 ? (val1 = newchar - 1,  val2 = newchar + 2) : '';
    newchar === 99 ? (val1 = newchar + 1,  val2 = newchar - 2) : '';
    newchar === 100 ? (val1 = newchar - 1,  val2 = newchar - 2) : '';

    fiftyArray.push(String.fromCharCode(val1), String.fromCharCode(val2));

    this.props.jokerFiftyDispatch(fiftyArray); // yuzde 50 ayarlanmis siklari gonderir
    this.setState({isFiftyDisabled : true})
    // this._btn.setNativeProps({ disabled: true });
    //  ref={btn => this._btn = btn
    // console.log('sss', this._btn);
  };


  doubleJoker = () => {
    this.props.jokerDoubleDispatch(true);
    this.setState({isDoubleDisabled : true})
  };

  render() {
    return (
      <View  style={styles.jokerContainer}>
         <View style={styles.jokerItem}>
           <Button onPress={() => this.halfJoker()} disabled={this.state.isFiftyDisabled}
             title='J1'/>
         </View>
         <View style={styles.jokerItem}>
           <Button onPress={() => this.doubleJoker()} disabled={this.state.isDoubleDisabled} title='J2'/>
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
  jokerDoubleDispatch: data => dispatch(jokerDouble(data)),
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
