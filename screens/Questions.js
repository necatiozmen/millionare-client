import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { databaseTest, prizeChange } from '../actions';

class Questions extends Component {

  state = {
    questionId: 1,
  };


  componentDidMount() {
    this.props.databaseTest(this.state.questionId);

  }

  answerCheck = (userAnswer) => {
    if (userAnswer == this.props.questionsAnswers.correctAnswer) {
      this.props.databaseTest(this.props.questionsAnswers.id + 1);
      this.props.prizeChange(true);

    } else {
      this.props.prizeChange(false);
      this.props.databaseTest(this.state.questionId); // YANLISTA ILK SORUYA BASLAMASI ICIN
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
          <View>
            <Text onPress={() => this.answerCheck(this.props.questionsAnswers.answer.a)}>
              a: {this.props.questionsAnswers.answer.a}
            </Text>
          </View>
          <View>
            <Text onPress={() => this.answerCheck(this.props.questionsAnswers.answer.b)}>
              b: {this.props.questionsAnswers.answer.b}
            </Text>
          </View>
          <View>
            <Text onPress={() => this.answerCheck(this.props.questionsAnswers.answer.c)}>
              c: {this.props.questionsAnswers.answer.c}
            </Text>
          </View>
          <View>
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

});

const mapDispatchToProps = dispatch => ({
  databaseTest: (id) => dispatch(databaseTest(id)),
  // prizeChange: (data) => dispatch(prizeChange(data)),
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
});
