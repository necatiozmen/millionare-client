import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { databaseTest, prizeChange, jokerFifty } from '../actions';

class Questions extends Component {

  state = {
    questionId: 1,
    astyle: 'styles.answerView',
    fiftyCheck: false,
  };

  componentDidMount() {
    this.props.databaseTest(this.state.questionId);
  }

  componentDidUpdate() {
    this.fiftyJoker(this.props.jokerFiftyValue);

  }

  answerCheck = (userAnswer) => {
      this.props.jokerFiftyDispatch('oldStyle'); // 50:50 joker kullandiktan sonra viewler eski haline doner
      if (userAnswer == this.props.questionsAnswers.correctAnswer) {
        this.props.databaseTest(this.props.questionsAnswers.id + 1);
        this.props.prizeChange(true);
      } else {
        this.props.jokerFiftyDispatch(false); // joker butonu tekrar aktif olur
        this.props.prizeChange(false);
        this.props.databaseTest(this.state.questionId); // YANLISTA ILK SORUYA BASLAMASI ICIN

      }
    };

  fiftyJoker = (value) => {

    if (value == 'oldStyle') {
      this._answera.setNativeProps({ style: styles.answerFiftyAfter });
      this._answerb.setNativeProps({ style: styles.answerFiftyAfter });
      this._answerc.setNativeProps({ style: styles.answerFiftyAfter });
      this._answerd.setNativeProps({ style: styles.answerFiftyAfter });
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
          <View answerKey='a' style={styles.answerView} ref={view => this._answera = view } >
            <Text onPress={() => this.answerCheck(this.props.questionsAnswers.answer.a)}>
              a: {this.props.questionsAnswers.answer.a}
            </Text>
          </View>
          <View answerKey='b' style={styles.answerView} ref={view => this._answerb = view }>
            <Text onPress={() => this.answerCheck(this.props.questionsAnswers.answer.b)}>
              b: {this.props.questionsAnswers.answer.b}
            </Text>
          </View>
          <View answerKey='c' style={styles.answerView} ref={view => this._answerc = view }>
            <Text onPress={() => this.answerCheck(this.props.questionsAnswers.answer.c)}>
              c: {this.props.questionsAnswers.answer.c}
            </Text>
          </View>
          <View answerKey='d' style={styles.answerView} ref={view => this._answerd = view }>
            <Text onPress={() => this.answerCheck(this.props.questionsAnswers.answer.d)}>
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

});

const mapDispatchToProps = dispatch => ({
  databaseTest: (id) => dispatch(databaseTest(id)),
  jokerFiftyDispatch: data => dispatch(jokerFifty(data)),
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
    backgroundColor: 'red',
  },
  answerFiftyJoker: {
    opacity: 0,
  },
  answerFiftyAfter: {
    opacity: 1,
  },
});
