import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Home extends Component {
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
          <View style={styles.question}><Text>SORU</Text></View>
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  jokerContainer: {
    flex:1,
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
    flex:1,
    backgroundColor: '#4286f4',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  questionsContainer: {
    flex:3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  question: {
    height:30,
    width:60,
    borderRadius:12,
    borderWidth:1,
    borderColor:'#979797',
    // paddingTop:15,
    // paddingLeft:15,
    alignItems:'center',
  }


});
