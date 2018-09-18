import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import { StyleSheet } from 'react-native';

class Information extends Component {

  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.starMoneyContainer}>
          <View style={styles.questionInfo}>
            <View style={styles.moneyContainer}>
              <Text style={styles.moneyText}>${this.props.prize}</Text>
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
                onPress={() => this.props.leaveGameButton()}
                style={styles.exitTouchable}
              >
                <Text style={styles.exitButtonText}>CEKIL</Text>
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
    );
  }
};

const mapStateToProps = state => ({
    questionsAnswers: state.questions,
  });

export default connect(mapStateToProps, null)(Information);

const styles = StyleSheet.create({

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

  questionCountText:{
    fontFamily: 'MontserratRegular',
    color:'#fff',
    fontSize:20,
  },
  moneyContainer:{
    width:70,
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
