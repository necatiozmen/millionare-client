import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Button, StyleSheet } from 'react-native';
import { getQuestion } from '../actions';

class Home extends Component {

  componentDidMount() {
    this.props.getQuestion(2);
  }

  onClickTest2 = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.jokerContainer}>
          <View style={styles.jokerItem}>Joker1</View>
          <View style={styles.jokerItem}>Joker2</View>
          <View style={styles.jokerItem}>Joker3</View>
        </View>
        <View style={styles.timeMoneyContainer}>
          <View><Text>$1000</Text></View>
          <View><Text>59 Second</Text></View>
        </View>
        <View style={styles.questionsContainer}>
          <View style={styles.question}><Text>SORU : {
            this.props.questionsAnswers.q2.question
          } </Text></View>
          <View style={styles.answers}>
            <Text>CEVAPLAR</Text>
            <View><Text>a</Text></View>
            <View><Text>b</Text></View>
            <View><Text>c</Text></View>
            <View><Text>d</Text></View>
          </View>

        </View>
        <Button
          onPress={() => this.onClickTest2()}
          title="Click to Profile"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  getQuestion: id => dispatch(getQuestion(id)),
});

const mapStateToProps = state => ({
  questionsAnswers: state.questions.questionsAnswer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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

  timeMoneyContainer: {
    flex: 1,
    backgroundColor: '#4286f4',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  questionsContainer: {
    flex: 3,
    alignItems: 'center',
  },
  question: {
    height: 30,
    width: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#979797',
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
  },

  answers: {
    flex: 1,
    justifyContent: 'space-around',

  },

});
