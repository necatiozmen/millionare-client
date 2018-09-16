import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { jokerFifty, jokerDouble } from '../actions';
import { LinearGradient } from 'expo';
import { Button, Icon } from 'native-base';

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
         <View>
           <Button style={styles.jokerButton} onPress={() => this.halfJoker()} disabled={this.state.isFiftyDisabled}
             >
             <Icon type="MaterialCommunityIcons"  name='star-half' />
           </Button>
        </View>
         <View>
           <Button style={styles.jokerButton}  onPress={() => this.doubleJoker()} disabled={this.state.isDoubleDisabled}>
             <Icon type="MaterialCommunityIcons"  name='star-half' />
           </Button>
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
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  // jokerButton: {
  //   marginLeft:0,
  //   width: '100%',
  // }
});
