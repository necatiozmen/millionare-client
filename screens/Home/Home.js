import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Questions from '../../components/Questions/Questions';
import Joker from '../../components/Joker/Joker';
import Information from '../../components/Information/Information';
import Timer from '../../components/Timer/Timer';
import styles from './styles';

class Home extends Component {
  state = {
    prize: 0,
    moneyArray: [0],
  };

  updatePrize = (status) => {
    if (status) {
      this.setState({ prize: this.state.prize + 100 });
      this.setState({ moneyArray: [...this.state.moneyArray, this.state.prize] });
      if (this.props.questionsAnswers.id === 10) {// son soruyu dogru bilirse finish ekranina gider
        this.props.navigation.navigate('Finish', {
          resultTitle: 'winBigAward',
          finalMoney: this.state.prize,
        });
      }
    } else {
      this.leaveGame('falseAnswer'); //  baraj sorulardami diye kontrol ediyorum.Limite garantiledigi parayi alir
      this.props.navigation.navigate('Finish', {
        resultTitle: 'falseAnswer',
      });
      this.setState({ prize: 0 });
    }
  };

  leaveGame = (value) => {
    let exitLimitIndex = 0;
    let leaveOrFalse = 'leaveGame';

    if (value === 'falseAnswer') leaveOrFalse = 'falseAnswer'; //finish ekraninda gosterilecek mesaj turu
    else if (value === 'timesUp') leaveOrFalse = 'timesUp';

    if (this.props.questionsAnswers.id >= 3 && this.props.questionsAnswers.id <= 5) exitLimitIndex = 3;
    else if (this.props.questionsAnswers.id > 5 && this.props.questionsAnswers.id <= 8) exitLimitIndex = 5;
    else if (this.props.questionsAnswers.id > 8 && this.props.questionsAnswers.id <= 10) exitLimitIndex = 8;

    this.props.navigation.navigate('Finish', {
      resultTitle: leaveOrFalse,
      finalMoney: this.state.moneyArray[exitLimitIndex],
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.jokerTimerContainer}>
          <Joker />
          <View style={this.props.questionsAnswers.id > 5 ? styles.unvisibleTimer : styles.timer}>
            <Timer
              timesUp={this.leaveGame}
              stopTimer={this.props.questionsAnswers.id > 5 ? 1000 : 25 }
            />
          </View>
        </View>
        <Information
          leaveGameButton={this.leaveGame}
          prize={this.state.prize}/>
        <Questions prizeChange={this.updatePrize}/>
      </View>
    );
  }
};

const mapStateToProps = state => ({
    questionsAnswers: state.questions,
  });

export default connect(mapStateToProps, null)(Home);
