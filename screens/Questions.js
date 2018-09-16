import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { databaseTest, prizeChange, jokerFifty, jokerDouble } from '../actions';

class Questions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questionId: 1,
      astyle: 'styles.answerView',
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
    this.fiftyJoker(this.props.jokerFiftyValue); // 50 jokerde gerye gidenlerin gelmei icin

  }

  doubleJokerFunc = (val) => {
    if (this.state.jokerArray.includes(this.props.questionsAnswers.correctAnswer)) { // ve eger duble secenekelrden biri dogru ise

      this.props.jokerDoubleDispatch(false);
      this.props.databaseTest(this.props.questionsAnswers.id + 1);
      this.props.prizeChange(true);
      this.props.jokerFiftyDispatch('jokerDoubleAfter'); //fifty jokerin fuonksiyonun class vale ile dispatch eder

    } else {
      this.props.prizeChange(false);
      this.props.databaseTest(this.state.questionId);
      this.props.jokerFiftyDispatch('jokerDoubleAfter');
    }
  };

  answerCheck = (userAnswer) => { // TODO: databse correct naserlar degisti - if statema n degisti viewvlerdeki on pres leri degistir

      userAnswer.setNativeProps({ style: styles.answerClick });



      if (this.props.jokerDoubleValue && this.state.counter <= 1) { // duble secilmis ise

        this.setState({ counter: this.state.counter + 1 }, () => console.log(''));

        if (userAnswer.props.answerKey === 'a') {
          this._answera.setNativeProps({ style: styles.answerDoubleJoker });
          this.setState({ jokerArray: [...this.state.jokerArray, 'a'] });
        }

        if (userAnswer.props.answerKey === 'b') {
          this._answerb.setNativeProps({ style: styles.answerDoubleJoker });
          this.setState({ jokerArray: [...this.state.jokerArray, 'b'] });
        }

        if (userAnswer.props.answerKey === 'c') {
          this._answerc.setNativeProps({ style: styles.answerDoubleJoker });
          this.setState({ jokerArray: [...this.state.jokerArray, 'c'] });
        }

        if (userAnswer.props.answerKey === 'd') {
          this._answerd.setNativeProps({ style: styles.answerDoubleJoker });
          this.setState({ jokerArray: [...this.state.jokerArray, 'd'] });
        }

        if (this.state.counter === 1) {
          setTimeout(() => this.doubleJokerFunc(), 2000);
        }

      } else {

        if (userAnswer.props.answerKey == this.props.questionsAnswers.correctAnswer) {
          setTimeout(() => userAnswer.setNativeProps({ style: styles.answerTrueClick }), 1000);
          setTimeout(() => {
            this.props.databaseTest(this.props.questionsAnswers.id + 1),
            this.props.prizeChange(true)}
          , 2000);

          // this.props.databaseTest(this.props.questionsAnswers.id + 1);
          // this.props.prizeChange(true);
          // userAnswer.setNativeProps({ style: styles.answerAfterClick });
        } else {
          setTimeout(() => userAnswer.setNativeProps({ style: styles.answerFalseClick }), 1000);
          setTimeout(() => {
            this.props.prizeChange(false),
            this.props.databaseTest(this.state.questionId)} // YANLISTA ILK SORUYA BASLAMASI ICIN
          , 2000);

        }
      }
    };

  fiftyJoker = (value) => {

    if (value == 'jokerFiftyAfter') {
      this._answera.setNativeProps({ style: styles.answerFiftyAfter });
      this._answerb.setNativeProps({ style: styles.answerFiftyAfter });
      this._answerc.setNativeProps({ style: styles.answerFiftyAfter });
      this._answerd.setNativeProps({ style: styles.answerFiftyAfter });
    } else if (value === 'jokerDoubleAfter') {
      this._answera.setNativeProps({ style: styles.answerDoubleAfter });
      this._answerb.setNativeProps({ style: styles.answerDoubleAfter });
      this._answerc.setNativeProps({ style: styles.answerDoubleAfter });
      this._answerd.setNativeProps({ style: styles.answerDoubleAfter });
    } else {
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
    }

  };

  render() {

    return (
      <View style={styles.questionsContainer}>
        <View style={styles.question}>
          <Text style={styles.questionText} >SORU :
          {this.props.questionsAnswers.question}
         </Text>
      </View>

        <View style={styles.answers}>
          <Text>CEVAPLAR </Text>
          <View  answerKey='a' style={styles.answerView} ref={view => this._answera = view } >
            <Text onPress={() => this.answerCheck(this._answera)}>
              a: {this.props.questionsAnswers.answer.a}
            </Text>
          </View>
          <View answerKey='b' style={styles.answerView} ref={view => this._answerb = view }>
            <Text onPress={() => this.answerCheck(this._answerb)}>
              b: {this.props.questionsAnswers.answer.b}
            </Text>
          </View>
          <View answerKey='c' style={styles.answerView} ref={view => this._answerc = view }>
            <Text onPress={() => this.answerCheck(this._answerc)}>
              c: {this.props.questionsAnswers.answer.c}
            </Text>
          </View>
          <View answerKey='d' style={styles.answerView} ref={view => this._answerd = view }>
            <Text onPress={() => this.answerCheck(this._answerd)}>
              d: {this.props.questionsAnswers.answer.d}
            </Text>
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

});

const mapDispatchToProps = dispatch => ({
  databaseTest: (id) => dispatch(databaseTest(id)),
  jokerFiftyDispatch: data => dispatch(jokerFifty(data)),
  jokerDoubleDispatch: data => dispatch(jokerDouble(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);

const styles = StyleSheet.create({
  questionsContainer: {
    flex: 3,
    alignItems: 'center',

  },
  question: {
    height: 50,
    width: 400,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#979797',
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
  },

  questionText: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  answers: {
    flex: 1,
    justifyContent: 'space-around',
  },
  answerView: {
    backgroundColor: '#eee',
  },
  answerClick: {
    backgroundColor: 'yellow',
  },
  answerTrueClick: {
    backgroundColor: 'green',
  },
  answerFalseClick: {
    backgroundColor: 'red',
  },
  answerFiftyJoker: {
    opacity: 0,
  },
  answerFiftyAfter: {
    opacity: 1,
  },
  answerDoubleJoker: {
    backgroundColor: 'yellow',
  },
  answerDoubleAfter: {
    backgroundColor: 'transparent',
  },
});
