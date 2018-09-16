import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button } from 'react-native';
import { jokerDouble } from '../actions';

class Finish extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.baseState = this.state;
  }

  jokerRefresher = () => {
    this.props.jokerDoubleDispatch(false);
    this.props.navigation.navigate('Home');

  }


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
            onPress={() => this.jokerRefresher() }
            title="Play Again"
          />
        </View>
      </View>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  jokerDoubleDispatch: data => dispatch(jokerDouble(data)),
});

export default connect(null, mapDispatchToProps)(Finish);

const styles = StyleSheet.create({
  finish: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  }
});
