import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
class Finish extends Component {

  render() {
    const { navigation } = this.props;
    return (

      <View style={styles.finishContainer}>
        <View style={{paddingTop:90}}>
          <Text style={styles.textStyle}>Oyun Bitti</Text>
        </View>

          <View>
            <Text style={styles.textStyle}>
              {navigation.getParam('resultTitle') === 'falseAnswer' ? 'Uzgunum Yanlis Cevap Kaybettiniz' : ''}
              {navigation.getParam('resultTitle') ===  'leaveGame' ? 'Oyundan Cekildiniz' : ''}
              {navigation.getParam('resultTitle') === 'winBigAward' ? 'Tebrikler Buyuk odulu kazandiniz' : ''}
              {navigation.getParam('resultTitle') === 'timesUp'  ? 'Belirli surede cevap vermediginiz icin elendiniz' : ''}
              {/* {this.props.finalPageMessage === 'leaveGame'  ? 'Yarismadan Cekildiniz! Kazandiginiz Miktar' : ''}
              {this.props.finalPageMessage === 'winBigAward'  ? 'Tebrikler Buyuk odulu kazandiniz' : ''}
              {this.props.finalPageMessage === 'falseAnswer'  ? 'Uzgunum Yanlis Cevap Kaybettiniz' : ''}
              {navigation.getParam('timesUp')  ? 'Belirli surede cevap vermediginiz icin elendiniz' : ''} */}

            </Text>
          </View>

        <View>
          <Text style={styles.awardText}>

            {navigation.getParam('finalMoney')}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.restartButton}
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

const styles = StyleSheet.create({
  finishContainer: {
    backgroundColor: '#2B1088',
    flex:1,
    justifyContent:'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textStyle:{
    fontSize:20,
    fontFamily: 'MontserratMedium',
    color:'#fff'
  },
  awardText:{
    fontSize:30,
    fontFamily: 'MontserratMedium',
    color:'#5CAB7D'
  },
  restartButton:{
    width: 240,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5CAB7D'
  },
  restartButtonText:{
    fontFamily: 'MontserratMedium',
    fontSize:20,
    color:'#fff',
  }

});
