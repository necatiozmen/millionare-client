import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { databaseTest } from '../actions';


class Prize extends Component {

  state = {
    prize: 0,

  };

  updatePrize = (status) => {

    if (status) this.setState({ prize: this.state.prize + 100 });

    else this.setState({ prize: 0 });

    return this.state.prize;

  };

  render() {
     return (
    <View><Text>${this.updatePrize(this.props.priceUp.increasePrice)}</Text></View>
    );
  }
};

const mapStateToProps = state => ({
  priceUp: state.prizeJoker,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Prize);
