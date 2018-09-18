import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet,TouchableOpacity,Button } from 'react-native';

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
        <View style={styles.starMoneyContainer}>
          <View style={styles.questionInfo}>
            <View style={styles.moneyContainer}>
              <Text style={styles.moneyText}>$900</Text>
            </View>
            <View style={styles.questionCount}>
              <View>
                <Text style={styles.questionCountText}>SORU: {this.props.questionsAnswers.id}</Text>
              </View>
              <View>
                <Text style={styles.questionCountText}>Kalan Soru: {10 - this.props.questionsAnswers.id} </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Finish', { winPrize: 'Oyundan Ciktigin icin para yok' })}
                style={styles.exitTouchable}
              >
                  <Text style={styles.exitButtonText}>CIKIS</Text>
              </TouchableOpacity>
            </View>

          </View>
            <View >
              <StarRating
                starSize={20}
                disabled={false}
                maxStars={10}
                fullStarColor={'#f6b93b'}
                rating={parseInt(this.props.questionsAnswers.id)}
              />
            </View>
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
  starMoneyContainer: {
    maxHeight:120,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#4286f4',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom:20,

  },
  questionInfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:20,
    paddingBottom:20,
  },
  questionCount:{

  },
  questionCountItem:{
    paddingBottom:5,
  },
  questionCountText:{
    fontFamily: 'MontserratRegular',
    color:'#fff',
    fontSize:20,
  },
  moneyContainer:{
    width:65,
  },
  moneyText:{
    fontFamily: 'MontserratMedium',
    color:'#f6b93b',
    fontSize:27,
    paddingBottom:10,
  },
  exitTouchable:{
    justifyContent:'center',
    alignItems:'center',
    width:55,
    height:55,
    borderRadius:27.5,
    backgroundColor:'#c03546'
  },
  exitButtonText:{
  fontFamily: 'MontserratMedium',
  color:'#fff',
  },


});
