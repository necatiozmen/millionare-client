import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Button, StyleSheet } from 'react-native';
import { getQuestion, databaseTest } from '../actions';
import Questions from './Questions';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      prize: 0,
    };
  }

  updatePrize = () => {
    this.setState({ prize: this.state.prize + 100 });
  };

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
          <View><Text>${this.state.prize}</Text></View>
          <View><Text>59 Second</Text></View>
        </View>
        <Questions prizeChange={this.updatePrize}/>
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
  databaseTest: (id) => dispatch(databaseTest(id)),
});

// const mapStateToProps = state => ({
//   questionsAnswers: state.questions.questionsAnswer,
// });

export default connect(null, mapDispatchToProps)(Home);












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
});
