import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getQuestion, databaseTest } from '../actions';
import Questions from './Questions';
import Timer from '../components/Timer';
import Joker from '../components/Joker';
import { LinearGradient } from 'expo';
import StarRating from 'react-native-star-rating';

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

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Joker style={styles.jokerContainer} />
        <View style={styles.timeMoneyContainer}>
          <View>
            <StarRating
              starSize={20}
        disabled={false}
        maxStars={10}
        fullStarColor={'#f6b93b'}
        rating={parseInt(this.props.questionsAnswers.id)}
      />
          </View>
          <View><Text>${this.state.prize}</Text></View>
          <View>
            <Text>{this.props.questionsAnswers.id}.Soru</Text>
            <Text>Kalan Soru: {10 - this.props.questionsAnswers.id} </Text>
          </View>
          <Button
            onPress={() => this.props.navigation.navigate('Finish', { winPrize: 'Oyundan Ciktigin icin para yok' })}
            title='Exit'
            color="#fff"/>
        </View>
        <Questions
                   prizeChange={this.updatePrize}
                   questionId
                   navigation={this.props.navigation}
                   propTest={this.getData}
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
  jokerContainer:{
    flex:1
  },
  timeMoneyContainer: {
    height:90,
    backgroundColor: '#4286f4',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },


});
