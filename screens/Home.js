import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getQuestion, databaseTest } from '../actions';
import Questions from './Questions';
import Timer from '../components/Timer';
// import Prize from '../components/Prize';

class Home extends Component {

  state = {
    prize: 0,
    refresh: false,

  };


  updatePrize = (status) => {
    if (status) {
      this.setState({ prize: this.state.prize + 100 });
    } else {
      this.props.navigation.navigate('Finish', { winPrize: this.state.prize });
      this.setState({ prize: 0 });
    }

  };

  onClickTest2 = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    console.log('currentQuestion', this.props.questionsAnswers);
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.jokerContainer}>
          <View style={styles.jokerItem}>Joker1</View>
          <View style={styles.jokerItem}>Joker2</View>
          <View style={styles.jokerItem}>Joker3</View>
        </View>
        <View style={styles.timeMoneyContainer}>
          <View><Text>${this.state.prize}</Text></View>
          <View style={this.props.questionsAnswers.id > 5 ? styles.timer : ''}>
            <Timer stopTimer={this.props.questionsAnswers.id > 5 ? 1000 : 10 } />
          </View>
          <View>
            <Text>{this.props.questionsAnswers.id}.Soru</Text>
            <Text>Kalan Soru: {10 - this.props.questionsAnswers.id} </Text>
          </View>
        </View>
        <Questions
                   prizeChange={this.updatePrize}
                   questionId
                   navigation={this.props.navigation}
                   />
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

const mapStateToProps = state => ({
    priceUp: state.prizeJoker,
    questionsAnswers: state.questions,
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

  timer: {
    display: 'none',
  }
});
