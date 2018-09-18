import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import Questions from '../../components/Questions';
import Joker from '../../components/Joker';
import StarRating from 'react-native-star-rating';
import styles from './styles';
import Information from '../../components/Information';

class Home extends Component {
  state = {
    prize: 0,
    moneyArray: [0],
  };

  updatePrize = (status) => {
    if (status) {  // eget cevap dogru ise
      this.setState({ prize: this.state.prize + 100 });
      this.setState({ moneyArray: [...this.state.moneyArray, this.state.prize] }); // baraj soru limitindemi takibi icin kazandigi miktarlari array de tutuyorum
      if (this.props.questionsAnswers.id === 10) {//eger son soruyu dogru bilirse finish ekranina gider
        this.props.navigation.navigate('Finish', {
          resultTitle: 'winBigAward',
          finalMoney: this.state.prize,
        });
      }
    } else { //eger cevap yanlis ise
      this.leaveGame('falseAnswer'); //  baraj sorulardami diye kontrol ediyorum.Duruma gore garantiledigi parayi alir
      this.props.navigation.navigate('Finish', {
        resultTitle: 'falseAnswer',
      });
      this.setState({ prize: 0 });
    }
  };

  leaveGame = (value) => {
    let exitLimitIndex = 0;
    let leaveOrFalse = 'leaveGame';  // oyundan cekil butonu ile baraj soru sinirina gore

    if (value === 'falseAnswer') leaveOrFalse = 'falseAnswer'; // bunu yapmamin sebebi cevap yanlis oldugunda da bu function cagiriyorum ikisine biribirinde ayirmaylim sonuc ekranini da ona gore mesaj olacak
    if (this.props.questionsAnswers.id >= 3 && this.props.questionsAnswers.id <= 5) exitLimitIndex = 3;  //burada oyuncu 4 6 ve 8. baraj sorularindami diye kontrol edildi
    else if (this.props.questionsAnswers.id > 5 && this.props.questionsAnswers.id <= 8) exitLimitIndex = 5;
    else if (this.props.questionsAnswers.id > 8 && this.props.questionsAnswers.id <= 10) exitLimitIndex = 8;

    this.props.navigation.navigate('Finish', {
      resultTitle: leaveOrFalse,
      finalMoney: this.state.moneyArray[exitLimitIndex], // baraj limitine gore array  indexteki miktar final sayfaina gonderdim
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Joker style={styles.jokerContainer} />
        <Information
          leaveGameButton={this.leaveGame}
          prize={this.state.prize}/>

        {/* <View style={styles.starMoneyContainer}>
          <View style={styles.questionInfo}>
            <View style={styles.moneyContainer}>
              <Text style={styles.moneyText}>${this.state.prize}</Text>
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
                onPress={() => this.leaveGame()}
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
        </View> */}
        <Questions
         prizeChange={this.updatePrize}
        />
      </View>
    );
  }
};

const mapStateToProps = state => ({
    questionsAnswers: state.questions,
  });

export default connect(mapStateToProps, null)(Home);
