import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Finish extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.finishContainer}>
        <View style={styles.finishHeader}>
          <Text style={styles.headerTextStyle}>Yarisma Sonu ! </Text>
        </View>
        <View style={styles.finishMessage}>
          <Text style={styles.textStyle}>
            {navigation.getParam('resultTitle') === 'falseAnswer' ?
            'Yanlis Cevap' : ''}
            {navigation.getParam('resultTitle') ===  'leaveGame' ?
            'Oyundan Cekildiniz' : ''}
            {navigation.getParam('resultTitle') === 'winBigAward' ?
            'Tebrikler! Buyuk odulu kazandiniz' : ''}
            {navigation.getParam('resultTitle') === 'timesUp'  ?
            'Elendiniz ! Sure Bitti' : ''}
          </Text>
        </View>
        <View style={styles.awardContainer}>
          <Text style={styles.awardHeaderText}>Kazanilan Odul</Text>
          <View style={styles.awardMoney}>
            <Text style={styles.awardText}>
             ${navigation.getParam('finalMoney')}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.restartButton}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text style={styles.restartButtonText}>Yeniden Oyna</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Finish;
