import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { databaseTest, prizeChange, jokerFifty, jokerDouble, jokerAfterStyle, jokerFiftyVisibleChecker } from '../actions';
import { Button, Icon } from 'native-base';

class Questions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questionId: 1,
      astyle: 'styles.answerViewItem',
      fiftyCheck: false,
      counter: 0,
      jokerArray: [],
      doubleJokerCheck: false,
      jokerstyle: false,
    };
    // this.baseState = this.state; tekrar bak gerek olmayabilir
  }

  componentDidMount() {
    this.props.databaseTest(this.state.questionId);
  }

  componentDidUpdate() {
    if (this.props.jokerFiftyVisibleChecker) this.fiftyJoker(this.props.jokerFiftyValue);
  }

  doubleJokerFunc = () => {
    if (this.state.jokerArray.includes(this.props.questionsAnswers.correctAnswer)) { // ve eger duble secenekelrden biri dogru ise
      this.props.jokerDoubleDispatch(false); // double jokerin answer check de bir daha kullanilmamasi icin false yaptik
      this.correctAnswerColor(this.props.questionsAnswers.correctAnswer) // dogri sikki yesil yapalim
      setTimeout(() => {
        this.jokerAfterStyle(), // daha sonra siklardaki rengi temizleyelim
        this.props.databaseTest(this.props.questionsAnswers.id + 1),
        this.props.prizeChange(true);}, 2000);
    } else {
      this.correctAnswerColor(this.props.questionsAnswers.correctAnswer)
      setTimeout(() => {
        this.props.prizeChange(false)},
       2000);
    }
  };


  answerCheck = (userAnswer) => { // TODO: databse correct naserlar degisti - if statema n degisti viewvlerdeki on pres leri degistir
      userAnswer.setNativeProps({ style: styles.answerClickYellow }); //secilen her sik sari yapar
      console.log(this._view);

      if (this.props.jokerDoubleValue && this.state.counter <= 1) { // duble secilmis ise

        this.setState({ counter: this.state.counter + 1 });

        if (userAnswer.props.answerKey === 'a') {
          this._answera.setNativeProps({ style: styles.answerClickYellow });
          this.setState({ jokerArray: [...this.state.jokerArray, 'a'] });
        }

        if (userAnswer.props.answerKey === 'b') {
          this._answerb.setNativeProps({ style: styles.answerClickYellow });
          this.setState({ jokerArray: [...this.state.jokerArray, 'b'] });
        }

        if (userAnswer.props.answerKey === 'c') {
          this._answerc.setNativeProps({ style: styles.answerClickYellow });
          this.setState({ jokerArray: [...this.state.jokerArray, 'c'] });
        }

        if (userAnswer.props.answerKey === 'd') {
          this._answerd.setNativeProps({ style: styles.answerClickYellow });
          this.setState({ jokerArray: [...this.state.jokerArray, 'd'] });
        }

        if (this.state.counter === 1) { // 2 adet sik secilmis ise
          setTimeout(() => this.doubleJokerFunc(), 2000); //cifte sans jokerinde kullanicinin sectigi siklardan olusan array i yollayip dogru cevap kontrolu yapan fonks
        }

      } else {

        if (userAnswer.props.answerKey == this.props.questionsAnswers.correctAnswer) {

          setTimeout(() => userAnswer.setNativeProps({ style: styles.answerTrueColor }), 1000);
          setTimeout(() => {
            this.props.databaseTest(this.props.questionsAnswers.id + 1),
            this.props.prizeChange(true),
            userAnswer.setNativeProps({ style: styles.answerViewItem });}, 2000);
          setTimeout(() => this.jokerAfterStyle(), 2200);
        } else {
          setTimeout(() => userAnswer.setNativeProps({ style: styles.answerFalseColor }, this.correctAnswerColor(this.props.questionsAnswers.correctAnswer)), 1000);
          setTimeout(() => {this.props.prizeChange(false);}, 2000); //para artmasin ve cikis ekraninna gitsin
          setTimeout(() => this.jokerAfterStyle(), 2200);    // 50 50 joker basildiktan sonra eksi haline gelmesi icin
        }
      }
    };

  correctAnswerColor = (value) => {
    if (value === 'a') this._answera.setNativeProps({ style: styles.answerTrueColor });
    if (value === 'b') this._answerb.setNativeProps({ style: styles.answerTrueColor });
    if (value === 'c') this._answerc.setNativeProps({ style: styles.answerTrueColor });
    if (value === 'd') this._answerd.setNativeProps({ style: styles.answerTrueColor });
  }

  jokerAfterStyle = (value) => {
      this._answera.setNativeProps({ style: styles.answerViewItem });
      this._answerb.setNativeProps({ style: styles.answerViewItem });
      this._answerc.setNativeProps({ style: styles.answerViewItem });
      this._answerd.setNativeProps({ style: styles.answerViewItem });
  };

  fiftyJoker = (value) => {
  console.log('her zaman cagi');
      if (this._answera.props.answerKey == value[0] || this._answera.props.answerKey == value[1]) {
        this._answera.setNativeProps({ style: styles.answerFiftyJoker });
      }

      if (this._answerb.props.answerKey == value[0] || this._answerb.props.answerKey == value[1]) {
        this._answerb.setNativeProps({ style: styles.answerFiftyJoker });
      }

      if (this._answerc.props.answerKey == value[0] || this._answerc.props.answerKey == value[1]) {
        this._answerc.setNativeProps({ style: styles.answerFiftyJoker });
      }

      if (this._answerd.props.answerKey == value[0] || this._answerd.props.answerKey == value[1]) {
        this._answerd.setNativeProps({ style: styles.answerFiftyJoker });
      }
      this.props.jokerFiftyVisibleCheckerDispatch(false);
    };

  render() {
    return (
      <View style={styles.questionsContainer}>
        <View style={styles.question}>
          <Text style={styles.questionText} >
          {this.props.questionsAnswers.question}
         </Text>
      </View>
      <View ref={view => this._view = view } style={styles.answers}>
        <View  answerKey='a'  style={styles.answerViewItem} ref={view => this._answera = view } >
           <Text onPress={() => this.answerCheck(this._answera)} style={styles.answerText}>
             {this.props.questionsAnswers.answer.a}
           </Text>
         </View>
         <View  answerKey='b'  style={styles.answerViewItem} ref={view => this._answerb = view }>
           <Text onPress={() => this.answerCheck(this._answerb)} style={styles.answerText}>
             {this.props.questionsAnswers.answer.b}
           </Text>
         </View>
         <View  answerKey='c'  style={styles.answerViewItem} ref={view => this._answerc = view }>
           <Text onPress={() => this.answerCheck(this._answerc)} style={styles.answerText} >
             {this.props.questionsAnswers.answer.c}
           </Text>
         </View>
         <View  answerKey='d'  style={styles.answerViewItem}   ref={view => this._answerd = view }>
           <Text onPress={() => this.answerCheck(this._answerd)} style={styles.answerText} >{this.props.questionsAnswers.answer.d} </Text>
         </View>
       </View>
      </View>
    );
  }
};

const mapStateToProps = state => ({
  questionsAnswers: state.questions,
  jokerFiftyValue: state.joker.jokerFifty,
  jokerDoubleValue: state.joker.jokerDouble,
  jokerAfterStyle: state.joker.jokerAfterStyle,
  jokerFiftyVisibleChecker: state.joker.jokerFiftyVisibleChecker,

});

const mapDispatchToProps = dispatch => ({
  databaseTest: (id) => dispatch(databaseTest(id)),
  jokerFiftyDispatch: data => dispatch(jokerFifty(data)),
  jokerDoubleDispatch: data => dispatch(jokerDouble(data)),
  jokerAfterStyleDispatch: data => dispatch(jokerAfterStyle(data)),
  jokerFiftyVisibleCheckerDispatch: data => dispatch(jokerFiftyVisibleChecker(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);

const styles = StyleSheet.create({
  questionsContainer: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#2B1088',


  },
  question: {
    height: 50,
    width: 350,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent:'center',
  },

  questionText: {
    fontFamily: 'MontserratMedium',
    color:'#fff',
    fontSize:20,
  },

  answers: {
    flex: 1,

    justifyContent: 'space-around',
  },
  answerViewItem: {
    height:40,
    width:200,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#4a69bd',
    borderRadius:8,
    borderWidth: 2,
    borderColor: '#fff',
    opacity:1,
  },
  answerText :{
    fontFamily: 'MontserratRegular',
    color:'#fff',
    fontSize:20,
  },
  button:{

    marginLeft:0,
    width: '100%',
  },
  answerClickYellow: {
    backgroundColor: '#f6b93b',
  },
  answerTrueColor: {
    backgroundColor: '#5CAB7D',
  },
  answerFalseColor: {
    backgroundColor: '#c03546',
  },
  answerFiftyJoker: {
    opacity: 0,
  },
  answerFiftyAfter: {
    opacity: 1,
  },
  answerDoubleJoker: {
    backgroundColor: '#f6b93b',
  },
  answerNormalColor: {
    backgroundColor: 'transparent',
  },
});
