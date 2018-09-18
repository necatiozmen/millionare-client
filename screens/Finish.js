import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Finish extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.finish}>
        <Text>GAME OVER</Text>
        <View>
          <Text>
            Kazandiginiz Miktar : {navigation.getParam('winPrize')}
          </Text>
        </View>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('Login') }
            title="Play Again"
          />
        </View>
      </View>
    );
  }
};

export default Finish;

const styles = StyleSheet.create({
  finish: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  }
});
