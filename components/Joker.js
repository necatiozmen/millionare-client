import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { jokerFifty, jokerDouble,jokerFiftyDispatch, jokerFiftyVisibleChecker } from '../actions';
import { LinearGradient } from 'expo';
import { Button, Icon } from 'native-base';
import Timer from './Timer';

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
    newchar === 99 ? (val1 = newchar - 1,  val2 = newchar - 2) : '';
    newchar === 100 ? (val1 = newchar - 1,  val2 = newchar - 2) : '';

    fiftyArray.push(String.fromCharCode(val1), String.fromCharCode(val2));

    this.props.jokerFiftyVisibleCheckerDispatch(true);
    this.props.jokerFiftyDispatch(fiftyArray); // yuzde 50 ayarlanmis siklari gonderir
    this.setState({isFiftyDisabled : true})

  };


  doubleJoker = () => {
    this.props.jokerDoubleDispatch(true);
    this.setState({isDoubleDisabled : true})
  };

  render() {

    return (

      <View  style={styles.jokerContainer}>
         <View >
           <Button
             style={!this.state.isFiftyDisabled ? styles.jokerButton : styles.jokerButtonDisabled}
             onPress={() => this.halfJoker()}
             disabled={this.state.isFiftyDisabled}
            >
            <Icon
              type="MaterialCommunityIcons"
              name='star-half'
              style={{fontSize: 25 }}
             />
          </Button>
        </View>
        <View style={this.props.questionsAnswers.id > 5 ? styles.timer : styles.timerView}>
          <View>
            <Timer stopTimer={this.props.questionsAnswers.id > 5 ? 1000 : 10 } />
          </View>
        </View>
         <View>
           <Button
             style={!this.state.isDoubleDisabled ? styles.jokerButton : styles.jokerButtonDisabled}
             onPress={() => this.doubleJoker()}
             disabled={this.state.isDoubleDisabled}>
             <Icon
               type="FontAwesome"
               name='superscript'
               style={{fontSize: 25 }}
            />
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
  jokerFiftyVisibleCheckerDispatch: data => dispatch(jokerFiftyVisibleChecker(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Joker);

const styles = StyleSheet.create({

  jokerContainer: {
    flex: 1,
    backgroundColor: '#2B1088',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  jokerButton: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f6b93b',
    width:60,
    height:60,
    borderRadius:30,
    marginTop:20
  },
  jokerButtonDisabled:{
    backgroundColor:'#f2f2f2',
    width:60,
    height:60,
    borderRadius:30,
    marginTop:20
  },
  timer: {
    display: 'none',
  },
  timerView:{
   justifyContent: 'center',
   alignItems:'center',
   width: 100,
   height: 100,
   borderRadius: 200/2,
   borderWidth: 4,
   borderColor: '#979797',
   alignSelf:'flex-end',
   marginBottom:30,



  }
});
